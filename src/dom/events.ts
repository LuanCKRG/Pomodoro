import { cycleButtons, timerElements } from "@/dom/elements"
import { setupIcons } from "@/dom/icons"
import { showPauseTimerButton, showStartTimerButton } from "@/dom/ui"
import { handleCyclePhase } from "@/logic/cycle"
import { startTimer, stopTimer } from "@/logic/timer"
import { CyclePhase } from "@/types"

document.addEventListener("DOMContentLoaded", () => {
	setupIcons()
})

// modal.openButton.addEventListener("click", () => {
// 	openModal()
// })

cycleButtons.pomodoro.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.pomodoro)
})
cycleButtons.shortBreak.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.shortBreak)
})
cycleButtons.longBreak.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.longBreak)
})

timerElements.toggleButton.addEventListener("click", () => {
	const currentState = timerElements.toggleButton.dataset.state

	if (currentState === "pause") {
		stopTimer()
		showStartTimerButton()
	} else if (currentState === "start") {
		startTimer()
		showPauseTimerButton()
	}
})
