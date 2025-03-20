const pomodoroButton = document.querySelector("#pomodoro") as HTMLButtonElement
const shortBreakButton = document.querySelector("#short-break") as HTMLButtonElement
const longBreakButton = document.querySelector("#long-break") as HTMLButtonElement

const timerDisplay = document.querySelector("#timer-display") as HTMLTimeElement

const startTimerButton = document.querySelector("#start-timer") as HTMLButtonElement
const pauseTimerButton = document.querySelector("#pause-timer") as HTMLButtonElement

export { pomodoroButton, shortBreakButton, longBreakButton, timerDisplay, startTimerButton, pauseTimerButton }