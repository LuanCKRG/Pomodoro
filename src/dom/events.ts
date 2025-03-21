import { handleCyclePhase } from "@/logic/cycle"
import { CyclePhase } from "@/types"
import { pomodoroButton, shortBreakButton, longBreakButton, startTimerButton, pauseTimerButton } from "@/dom/elements"
import {startTimer, stopTimer}  from "@/logic/timer"
import { showStartTimerButton, showStopTimerButton } from "@/dom/ui"
import { handleTheme } from "@/dom/theme"

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