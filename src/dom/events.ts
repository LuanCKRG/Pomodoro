import { handleCyclePhase } from "@/logic/cycle"
import { CyclePhase } from "@/types"
import { pomodoroButton, shortBreakButton, longBreakButton, startTimerButton, pauseTimerButton } from "@/dom/elements"
import {startTimer, stopTimer}  from "@/logic/timer"
import { showStartTimerButton, showStopTimerButton } from "@/dom/ui"

pomodoroButton.addEventListener("click", () => handleCyclePhase(CyclePhase.pomodoro))
shortBreakButton.addEventListener("click", () => handleCyclePhase(CyclePhase.shortBreak))
longBreakButton.addEventListener("click", () => handleCyclePhase(CyclePhase.longBreak))

startTimerButton.addEventListener("click", () => {
  startTimer()
  showStopTimerButton()
})

pauseTimerButton.addEventListener("click", () => {
  stopTimer()
  showStartTimerButton()
})