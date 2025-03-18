export function formatTime(value: number): string {
  return value.toString().padStart(2, "0")
}

export function updateTimerDisplay(timer_display: HTMLElement, minutes: number, seconds: number) {
  timer_display.innerHTML = `${formatTime(minutes)}:${formatTime(seconds)}`
}
