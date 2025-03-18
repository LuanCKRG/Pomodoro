import { handleCyclePhase } from "@/logic/cycle"
import { CyclePhase } from "@/types"
import { pomodoroButton, shortBreakButton, longBreakButton } from "./elements"

pomodoroButton.addEventListener("click", () => handleCyclePhase(CyclePhase.pomodoro))
shortBreakButton.addEventListener("click", () => handleCyclePhase(CyclePhase.shortBreak))
longBreakButton.addEventListener("click", () => handleCyclePhase(CyclePhase.longBreak))