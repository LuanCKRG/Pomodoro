import { Subject } from "@/core/patterns/subject"
import type { Observer } from "@/core/types/observer.interface"
import type { PomodoroState, SessionType } from "@/core/types/pomodoro-types"
import { StorageService } from "@/services/storage-service"

interface PomodoroSettings {
	pomodoro: number
	shortBreak: number
	longBreak: number
}

export class PomodoroTimer {
	private subject = new Subject<PomodoroState>()
	private state: PomodoroState
	private intervalId: number | null = null
	private sessions: {
		WORK: number
		SHORT_BREAK: number
		LONG_BREAK: number
	}

	constructor(initialSettings?: PomodoroSettings) {
		const defaults = {
			WORK: 25 * 60,
			SHORT_BREAK: 5 * 60,
			LONG_BREAK: 15 * 60
		}

		this.sessions = {
			WORK: initialSettings?.pomodoro ? initialSettings.pomodoro * 60 : defaults.WORK,
			SHORT_BREAK: initialSettings?.shortBreak ? initialSettings.shortBreak * 60 : defaults.SHORT_BREAK,
			LONG_BREAK: initialSettings?.longBreak ? initialSettings.longBreak * 60 : defaults.LONG_BREAK
		}

		this.state = this.createInitialState()
		this.notifyStateChange()
	}

	private createInitialState(): PomodoroState {
		return {
			currentSession: "WORK",
			nextSession: "SHORT_BREAK",
			remainingTime: this.sessions.WORK,
			isRunning: false,
			pomodoroCount: 0,
			sessions: this.sessions
		}
	}

	// Método modificado para notificar com o estado atual
	private notifyStateChange(): void {
		this.subject.notifyObservers(this.state)
	}

	public selectSession(sessionType: SessionType): void {
		if (this.state.isRunning) return

		this.state.currentSession = sessionType
		this.state.remainingTime = this.state.sessions[sessionType]

		if (sessionType === "WORK") {
			this.state.pomodoroCount++
		} else {
			this.state.pomodoroCount = 0
		}

		this.updateNextSession()
		this.notifyStateChange() // Notificação com estado atual
	}

	public start(): void {
		if (!this.state.isRunning) {
			this.state.isRunning = true
			this.intervalId = window.setInterval(() => this.tick(), 1000)
			this.notifyStateChange()
		}
	}

	private tick(): void {
		if (this.state.remainingTime > 0) {
			this.state.remainingTime--
			this.notifyStateChange() // Notificação a cada segundo
		} else {
			this.completeSession()
		}
	}

	private completeSession(): void {
		this.pause()
		this.state.isRunning = false

		if (this.state.currentSession === "WORK") {
			this.state.pomodoroCount++
		}

		this.updateNextSession()
		this.notifyStateChange() // Notificação ao completar sessão
	}

	public pause(): void {
		if (this.intervalId) {
			clearInterval(this.intervalId)
			this.intervalId = null
			this.state.isRunning = false
			this.notifyStateChange()
		}
	}

	public reset(): void {
		this.pause()
		this.state.remainingTime = this.state.sessions[this.state.currentSession]
		this.notifyStateChange() // Notificação ao resetar
	}

	public addObserver(observer: Observer<PomodoroState>): void {
		this.subject.addObserver(observer)
	}

	public updateSettings(settings: PomodoroSettings): void {
		this.sessions.WORK = settings.pomodoro * 60
		this.sessions.SHORT_BREAK = settings.shortBreak * 60
		this.sessions.LONG_BREAK = settings.longBreak * 60

		if (!this.state.isRunning) {
			this.state.remainingTime = this.sessions[this.state.currentSession]
			this.notifyStateChange()
		}
	}

	private updateNextSession(): void {
		let next: SessionType = "SHORT_BREAK"
		if (this.state.currentSession === "WORK") {
			next = this.state.pomodoroCount % 3 === 0 ? "LONG_BREAK" : "SHORT_BREAK"
		} else {
			next = "WORK"
		}
		this.state.nextSession = next
	}

	public getState(): PomodoroState {
		return this.state
	}
}
