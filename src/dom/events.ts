import { longBreakButton, pauseTimerButton, pomodoroButton, shortBreakButton, startTimerButton } from "@/dom/elements"
import { handleTheme } from "@/dom/theme"
import { showStartTimerButton, showStopTimerButton } from "@/dom/ui"
import { handleCyclePhase } from "@/logic/cycle"
import { startTimer, stopTimer } from "@/logic/timer"
import { CyclePhase } from "@/types"
import { setupIcons } from "@/dom/icons"

document.addEventListener("DOMContentLoaded", () => {
	setupIcons()
})

pomodoroButton.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.pomodoro)
})
shortBreakButton.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.shortBreak)
})
longBreakButton.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.longBreak)
})

startTimerButton.addEventListener("click", () => {
	startTimer()
	showStopTimerButton()
})

pauseTimerButton.addEventListener("click", () => {
	stopTimer()
	showStartTimerButton()
})
