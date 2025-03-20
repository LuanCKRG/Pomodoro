import { pauseTimerButton, startTimerButton } from "@/dom/elements"

export function showStopTimerButton() {
  startTimerButton.classList.add("hidden")
  pauseTimerButton.classList.remove("hidden")
}

export function showStartTimerButton() {
  startTimerButton.classList.remove("hidden")
  pauseTimerButton.classList.add("hidden")
}