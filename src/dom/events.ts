import { longBreakButton, pauseTimerButton, pomodoroButton, shortBreakButton, startTimerButton } from "@/dom/elements"
import { handleTheme } from "@/dom/theme"
import { showStartTimerButton, showStopTimerButton } from "@/dom/ui"
import { handleCyclePhase } from "@/logic/cycle"
import { startTimer, stopTimer } from "@/logic/timer"
import { CyclePhase } from "@/types"

pomodoroButton.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.pomodoro)
	handleTheme("red")
})
shortBreakButton.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.shortBreak)
	handleTheme("light-blue")
})
longBreakButton.addEventListener("click", () => {
	handleCyclePhase(CyclePhase.longBreak)
	handleTheme("dark-blue")
})

startTimerButton.addEventListener("click", () => {
	startTimer()
	showStopTimerButton()
})

pauseTimerButton.addEventListener("click", () => {
	stopTimer()
	showStartTimerButton()
})
