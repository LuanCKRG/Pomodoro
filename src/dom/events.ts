import { configModal, cycleButtons, timerElements } from "@/dom/elements"
import { setupIcons } from "@/dom/icons"
import { setupDefaultValuesOnInputs, showPauseTimerButton, showStartTimerButton, toggleModal } from "@/dom/ui"
import { handleCyclePhase } from "@/logic/cycle"
import { startTimer, stopTimer } from "@/logic/timer"
import { CyclePhase } from "@/types"

document.addEventListener("DOMContentLoaded", () => {
	setupIcons()

	setupDefaultValuesOnInputs()
})

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

// -------------* Modal *-------------
configModal.openButton.addEventListener("click", () => toggleModal(true))
configModal.closeButton.addEventListener("click", () => toggleModal(false))

configModal.overlay.addEventListener("click", (e) => {
	const target = e.target as HTMLElement
	if (target.dataset.modal === "backdrop") {
		toggleModal(false)
	}
})

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && !configModal.overlay.classList.contains("hidden")) {
		toggleModal(false)
	}
})
