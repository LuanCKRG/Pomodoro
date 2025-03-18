import { updateTimerDisplay } from "@/utils/format"
import { timerDisplay } from "@/dom/elements"
import { timer } from "./cycle"

let intervalId: number | null = null

export function startTimer() {
  if (timer.seconds === 0) {
    if (timer.minutes === 0) {
      clearInterval(intervalId!)
      intervalId = null
      return
    }
    timer.seconds = 59
    timer.minutes--
  } else {
    timer.seconds--
  }

  updateTimerDisplay(timerDisplay, timer.minutes, timer.seconds)
}

export function startPomodoro() {
  if (!intervalId) {
    intervalId = setInterval(startTimer, 1000)
  }
}
