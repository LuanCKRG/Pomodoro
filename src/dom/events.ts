import { configModal, cycleButtons, timerElements } from "@/dom/elements"
import { setupIcons } from "@/dom/icons"
import { getConfigInputValues, setupDefaultValuesOnInputs } from "@/dom/inputs"
import { showPauseTimerButton, showStartTimerButton, toggleModal } from "@/dom/ui"
import { handleCyclePhase, timer } from "@/logic/cycle"
import { updatePhaseDurations } from "@/logic/phase-durations"
import { startTimer, stopTimer } from "@/logic/timer"
import { CyclePhase } from "@/types"
import { updateTimerDisplay } from "@/utils/format"

document.addEventListener("DOMContentLoaded", () => {
	setupIcons()

	setupDefaultValuesOnInputs()
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

configModal.submitConfigButton.addEventListener("click", () => {
	const newPhaseDurations = getConfigInputValues()
	updatePhaseDurations(newPhaseDurations)
	updateTimerDisplay(timerElements.display, timer.minutes, timer.seconds)
	toggleModal(false)
})
