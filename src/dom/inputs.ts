import { phaseDurations } from "@/logic/phase-durations"
import { CyclePhase } from "@/types"
import { configModal } from "./elements"

export function setupDefaultValuesOnInputs() {
	configModal.pomodoroValueInput.value = phaseDurations[CyclePhase.pomodoro].toString()
	configModal.shortBreakvalueInput.value = phaseDurations[CyclePhase.shortBreak].toString()
	configModal.longBreakValueInput.value = phaseDurations[CyclePhase.longBreak].toString()
}

export function getConfigInputValues(): Record<CyclePhase, number> {
	return {
		[CyclePhase.pomodoro]: +configModal.pomodoroValueInput.value,
		[CyclePhase.shortBreak]: +configModal.shortBreakvalueInput.value,
		[CyclePhase.longBreak]: +configModal.longBreakValueInput.value
	}
}
