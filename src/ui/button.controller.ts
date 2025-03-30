import type { Observer } from "@/core/types/observer.interface"
import type { PomodoroState } from "@/core/types/pomodoro-types"
import type { PomodoroTimer } from "@/features/pomodoro/pomodoro-timer"

export class ButtonController implements Observer<PomodoroState> {
	private timer: PomodoroTimer
	private elements: {
		playPauseButton: HTMLButtonElement
		resetButton: HTMLButtonElement
		workButton: HTMLButtonElement
		shortBreakButton: HTMLButtonElement
		longBreakButton: HTMLButtonElement
	}

	constructor(timer: PomodoroTimer, elements: Record<string, HTMLButtonElement>) {
		this.timer = timer
		this.elements = {
			playPauseButton: elements.playPauseButton,
			resetButton: elements.resetButton,
			workButton: elements.workButton,
			shortBreakButton: elements.shortBreakButton,
			longBreakButton: elements.longBreakButton
		}
	}

	update(state: PomodoroState): void {
		const playPauseButton = this.elements.playPauseButton
		// Atualiza o botão play/pause
		this.elements.playPauseButton.textContent = state.isRunning ? "Pause" : "Start"

		// Gerencia classes condicionais
		if (state.isRunning) {
			// Modo Pause - Remove classes de Start e adiciona de Pause
			playPauseButton.classList.remove("border-b-6", "border-neutral-400")
			playPauseButton.classList.add("translate-y-1.5")
		} else {
			// Modo Start - Remove classes de Pause e adiciona de Start
			playPauseButton.classList.remove("translate-y-1.5")
			playPauseButton.classList.add("border-b-6", "border-neutral-400")
		}

		// Atualiza botões de sessão
		this.elements.workButton.classList.toggle("active", state.currentSession === "WORK")
		this.elements.shortBreakButton.classList.toggle("active", state.currentSession === "SHORT_BREAK")
		this.elements.longBreakButton.classList.toggle("active", state.currentSession === "LONG_BREAK")
	}

	init(): void {
		this.elements.playPauseButton.addEventListener("click", () => {
			if (this.timer.getState().isRunning) {
				this.timer.pause()
			} else {
				this.timer.start()
			}
		})

		this.elements.resetButton.addEventListener("click", () => this.timer.reset())

		this.elements.workButton.addEventListener("click", () => {
			if (!this.timer.getState().isRunning) {
				this.timer.selectSession("WORK")
			}
		})

		this.elements.shortBreakButton.addEventListener("click", () => {
			if (!this.timer.getState().isRunning) {
				this.timer.selectSession("SHORT_BREAK")
			}
		})

		this.elements.longBreakButton.addEventListener("click", () => {
			if (!this.timer.getState().isRunning) {
				this.timer.selectSession("LONG_BREAK")
			}
		})
	}
}
