import { timerDisplay } from "@/dom/elements"
import { showStartTimerButton, updateActiveCycleButton } from "@/dom/ui"
import { stopTimer } from "@/logic/timer"
import { CyclePhase, type TimerType } from "@/types"
import { updateTimerDisplay } from "@/utils/format"

export const timer: TimerType = {
	minutes: 25,
	seconds: 0
}

export let currentCyclePhase: CyclePhase = CyclePhase.pomodoro

const phaseDurations = {
	[CyclePhase.pomodoro]: 25,
	[CyclePhase.shortBreak]: 5,
	[CyclePhase.longBreak]: 15
}

export function handleCyclePhase(newPhase: CyclePhase) {
	if (newPhase === currentCyclePhase) return

	timer.seconds = 0

	if (phaseDurations[newPhase] !== undefined) {
		timer.minutes = phaseDurations[newPhase]
		currentCyclePhase = newPhase
	}

	stopTimer()
	showStartTimerButton()
	updateTimerDisplay(timerDisplay, timer.minutes, timer.seconds)
	updateActiveCycleButton(currentCyclePhase)
}

export function resetCycle() {
	stopTimer()
	timer.minutes = phaseDurations[currentCyclePhase]
	timer.seconds = 0
	updateTimerDisplay(timerDisplay, timer.minutes, timer.seconds)
}
