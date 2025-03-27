import { timerElements } from "@/dom/elements"
import { handleTheme } from "@/dom/theme"
import { showStartTimerButton, updateActiveCycleButton } from "@/dom/ui"
import { phaseDurations } from "@/logic/phase-durations"
import { stopTimer } from "@/logic/timer"
import { CyclePhase, type TimerType } from "@/types"
import { updateTimerDisplay } from "@/utils/format"

export let currentCyclePhase: CyclePhase = CyclePhase.pomodoro
export let pomodoroCount = 0
export let shortBreakCount = 0

export const timer: TimerType = {
	minutes: phaseDurations[CyclePhase.pomodoro],
	seconds: 0
}

export function handleCyclePhase(newPhase: CyclePhase) {
	if (newPhase === currentCyclePhase) return

	stopTimer()
	showStartTimerButton()

	timer.seconds = 0

	if (phaseDurations[newPhase] !== undefined) {
		timer.minutes = phaseDurations[newPhase]
		currentCyclePhase = newPhase
	}

	updateTimerDisplay(timerElements.display, timer.minutes, timer.seconds)
	updateActiveCycleButton(currentCyclePhase)
	handleTheme(newPhase)
}

export function nextPhase() {
	if (currentCyclePhase === CyclePhase.pomodoro) {
		pomodoroCount++ // Contabiliza o Pomodoro concluído

		if (shortBreakCount === 3) {
			handleCyclePhase(CyclePhase.longBreak)
			shortBreakCount = 0 // Reseta os short breaks após um long break
		} else {
			handleCyclePhase(CyclePhase.shortBreak)
			shortBreakCount++
		}
	} else {
		handleCyclePhase(CyclePhase.pomodoro)
	}
}
