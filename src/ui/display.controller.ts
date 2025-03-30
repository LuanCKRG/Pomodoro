import type { Observer } from "@/core/types/observer.interface"
import type { PomodoroState, SessionType } from "@/core/types/pomodoro-types"
import type { PomodoroTimer } from "@/features/pomodoro/pomodoro-timer"

export class DisplayController implements Observer<PomodoroState> {
	private timer: PomodoroTimer
	private elements: {
		timerDisplay: HTMLElement
		sessionType: HTMLElement
		nextSession: HTMLElement
		progressBar: HTMLElement
		pomodoroCount: HTMLElement
	}

	constructor(timer: PomodoroTimer, elements: Record<string, HTMLElement>) {
		this.timer = timer
		this.elements = {
			timerDisplay: elements.timerDisplay,
			sessionType: elements.sessionType,
			nextSession: elements.nextSession,
			progressBar: elements.progressBar,
			pomodoroCount: elements.pomodoroCount
		}
	}

	private formatTime(seconds: number): string {
		const mins = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
	}

	private updateProgress(state: PomodoroState): void {
		const totalTime = this.timer.getState().sessions[state.currentSession]
		const percentage = ((totalTime - state.remainingTime) / totalTime) * 100
		this.elements.progressBar.style.width = `${percentage}%`
	}

	update(state: PomodoroState): void {
		this.setTheme(state.currentSession)

		this.elements.timerDisplay.textContent = this.formatTime(state.remainingTime)
		this.elements.sessionType.textContent = state.currentSession.replace("_", " ")
		this.elements.nextSession.textContent = `Next: ${state.nextSession.replace("_", " ")}`
		this.elements.pomodoroCount.textContent = `Pomodoros: ${state.pomodoroCount}`
		this.updateProgress(state)
	}

	private setTheme(sessionType: SessionType): void {
		const themeMap = {
			WORK: "red",
			SHORT_BREAK: "light-blue",
			LONG_BREAK: "dark-blue"
		}

		document.body.setAttribute("data-theme", themeMap[sessionType])
	}

	init(): void {
		this.update(this.timer.getState())
	}
}
