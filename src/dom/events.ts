import { handleCyclePhase } from "@/logic/cycle"
import { CyclePhase } from "@/types"
import { pomodoroButton, shortBreakButton, longBreakButton, startTimerButton } from "@/dom/elements"
import {startTimer}  from "@/logic/timer"

pomodoroButton.addEventListener("click", () => handleCyclePhase(CyclePhase.pomodoro))
shortBreakButton.addEventListener("click", () => handleCyclePhase(CyclePhase.shortBreak))
longBreakButton.addEventListener("click", () => handleCyclePhase(CyclePhase.longBreak))

startTimerButton.addEventListener("click", () => startTimer())