import { timerElements, cycleButtons } from "@/dom/elements"
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
	cycleButtons.pomodoro.classList.remove("active-cycle-button")
	cycleButtons.shortBreak.classList.remove("active-cycle-button")
	cycleButtons.longBreak.classList.remove("active-cycle-button")

	if (currentCycle === CyclePhase.pomodoro) {
		cycleButtons.pomodoro.classList.add("active-cycle-button")
	} else if (currentCycle === CyclePhase.shortBreak) {
		cycleButtons.shortBreak.classList.add("active-cycle-button")
	} else if (currentCycle === CyclePhase.longBreak) {
		cycleButtons.longBreak.classList.add("active-cycle-button")
	}
}
