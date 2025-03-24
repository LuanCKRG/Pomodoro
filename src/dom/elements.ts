export const cycleButtons = {
	pomodoro: document.querySelector("#pomodoro") as HTMLButtonElement,
	shortBreak: document.querySelector("#short-break") as HTMLButtonElement,
	longBreak: document.querySelector("#long-break") as HTMLButtonElement
}

export const modal = {
	openButton: document.querySelector("#open-config-modal") as HTMLButtonElement,
	root: document.querySelector("#modal") as HTMLDivElement
}

export const rootElement = document.documentElement as HTMLElement

export const timerElements = {
	display: document.querySelector("#timer-display") as HTMLTimeElement,
	toggleButton: document.querySelector("#toggle-timer") as HTMLButtonElement
}
