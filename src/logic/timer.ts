import { timerDisplay } from "@/dom/elements"
import { nextPhase, timer } from "@/logic/cycle"
import { updateTimerDisplay } from "@/utils/format"

let intervalId: ReturnType<typeof setInterval> | null = null

export function startTimer() {
	if (!intervalId) {
		intervalId = setInterval(() => {
			if (timer.seconds === 0) {
				if (timer.minutes === 0) {
					stopTimer()
					nextPhase()
					return
				}
				timer.seconds = 59
				timer.minutes--
			} else {
				timer.seconds--
			}

			updateTimerDisplay(timerDisplay, timer.minutes, timer.seconds)
		}, 1000)
	}
}

export function stopTimer() {
	if (intervalId) {
		clearInterval(intervalId)
		intervalId = null
	}
}
