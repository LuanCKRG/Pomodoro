import { configModal, cycleButtons, timerElements } from "@/dom/elements"
import { CyclePhase } from "@/types"

const startButtonClasses = ["border-b-6", "border-neutral-400"]
const pauseButtonClasses = ["translate-y-1.5"]

const { toggleButton } = timerElements

export function showPauseTimerButton() {
	toggleButton.dataset.state = "pause" // Atualiza o estado para pause
	toggleButton.classList.remove(...startButtonClasses)
	toggleButton.classList.add(...pauseButtonClasses)
	toggleButton.innerText = "Pause"
}

export function showStartTimerButton() {
	toggleButton.dataset.state = "start" // Atualiza o estado para start
	toggleButton.classList.remove(...pauseButtonClasses)
	toggleButton.classList.add(...startButtonClasses)
	toggleButton.innerText = "Start"
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

export function toggleModal(willOpen: boolean) {
	configModal.overlay.classList.toggle("hidden", !willOpen)
	document.body.style.overflow = willOpen ? "hidden" : "auto"
}
