import { CyclePhase } from "@/types"
import { configModal } from "./elements"

export function getConfigInputValues(): Record<CyclePhase, number> {
	return {
		[CyclePhase.pomodoro]: +configModal.pomodoroValueInput.value,
		[CyclePhase.shortBreak]: +configModal.shortBreakvalueInput.value,
		[CyclePhase.longBreak]: +configModal.longBreakValueInput.value
	}
}
