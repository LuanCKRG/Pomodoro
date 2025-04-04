export const cycleButtons = {
	pomodoro: document.querySelector("#pomodoro") as HTMLButtonElement,
	shortBreak: document.querySelector("#short-break") as HTMLButtonElement,
	longBreak: document.querySelector("#long-break") as HTMLButtonElement
}

export const configModal = {
	overlay: document.getElementById("modal-overlay") as HTMLDivElement,
	modal: document.getElementById("modal") as HTMLDivElement,

	openButton: document.getElementById("open-config-modal") as HTMLButtonElement,
	closeButton: document.getElementById("close-config-modal") as HTMLButtonElement,
	submitButton: document.getElementById("submit-config") as HTMLButtonElement,

	pomodoroInput: document.getElementById("pom-input") as HTMLInputElement,
	shortBreakInput: document.getElementById("short-input") as HTMLInputElement,
	longBreakInput: document.getElementById("long-input") as HTMLInputElement
}

export const rootElement = document.documentElement as HTMLElement

export const timerElements = {
	display: document.querySelector("#timer-display") as HTMLTimeElement,
	toggleButton: document.querySelector("#toggle-timer") as HTMLButtonElement
}
