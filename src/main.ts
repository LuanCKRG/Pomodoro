import "@/dom/events"
console.log("hello world")

import { PomodoroTimer } from "@/features/pomodoro/pomodoro-timer"
import { ButtonController } from "@/ui/button.controller"
import { DisplayController } from "@/ui/display.controller"

class App {
	private timer: PomodoroTimer

	constructor() {
		this.timer = new PomodoroTimer()
		this.initUI()
	}

	private initUI(): void {
		const displayController = new DisplayController(this.timer, {
			timerDisplay: document.getElementById("timer-display") as HTMLDivElement,
			sessionType: document.getElementById("session-type") as HTMLDivElement,
			nextSession: document.getElementById("next-session") as HTMLDivElement,
			progressBar: document.getElementById("progress-bar") as HTMLDivElement,
			pomodoroCount: document.getElementById("pomodoro-count") as HTMLDivElement
		})

		const buttonController = new ButtonController(this.timer, {
			playPauseButton: document.getElementById("play-pause-btn") as HTMLButtonElement,
			resetButton: document.getElementById("reset-btn") as HTMLButtonElement,
			workButton: document.getElementById("work-btn") as HTMLButtonElement,
			shortBreakButton: document.getElementById("short-break-btn") as HTMLButtonElement,
			longBreakButton: document.getElementById("long-break-btn") as HTMLButtonElement
		})

		this.timer.addObserver(displayController)
		this.timer.addObserver(buttonController)

		displayController.init()
		buttonController.init()
	}
}

window.addEventListener("DOMContentLoaded", () => new App())
