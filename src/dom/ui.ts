import { longBreakButton, pauseTimerButton, pomodoroButton, shortBreakButton, startTimerButton } from "@/dom/elements"
import { CyclePhase } from "@/types"

export function showStopTimerButton() {
	startTimerButton.classList.add("hidden")
	pauseTimerButton.classList.remove("hidden")
}

export function showStartTimerButton() {
	startTimerButton.classList.remove("hidden")
	pauseTimerButton.classList.add("hidden")
}

export function updateActiveCycleButton(currentCycle: CyclePhase) {
	pomodoroButton.classList.remove("active-cycle-button")
	shortBreakButton.classList.remove("active-cycle-button")
	longBreakButton.classList.remove("active-cycle-button")

	if (currentCycle === CyclePhase.pomodoro) {
		pomodoroButton.classList.add("active-cycle-button")
	} else if (currentCycle === CyclePhase.shortBreak) {
		shortBreakButton.classList.add("active-cycle-button")
	} else if (currentCycle === CyclePhase.longBreak) {
		longBreakButton.classList.add("active-cycle-button")
	}
}
