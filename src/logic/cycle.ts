import { CyclePhase, TimerType } from "@/types"
import { updateTimerDisplay } from "@/utils/format"
import { timerDisplay } from "@/dom/elements"
import { stopTimer } from "./timer"

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
  updateTimerDisplay(timerDisplay, timer.minutes, timer.seconds)
}

export function resetCycle() {
  stopTimer() 
  timer.minutes = phaseDurations[currentCyclePhase]
  timer.seconds = 0
  updateTimerDisplay(timerDisplay, timer.minutes, timer.seconds)
}