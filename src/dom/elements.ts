export const cycleButtons = {
	pomodoro: document.querySelector("#pomodoro") as HTMLButtonElement,
	shortBreak: document.querySelector("#short-break") as HTMLButtonElement,
	longBreak: document.querySelector("#long-break") as HTMLButtonElement
}

export const configModal = {
	overlay: document.querySelector("#modal-overlay") as HTMLElement,
	openButton: document.querySelector("#open-config-modal") as HTMLButtonElement,
	closeButton: document.querySelector("#close-config-modal") as HTMLButtonElement
}

export const rootElement = document.documentElement as HTMLElement

export const timerElements = {
	display: document.querySelector("#timer-display") as HTMLTimeElement,
	toggleButton: document.querySelector("#toggle-timer") as HTMLButtonElement
}
