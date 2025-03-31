interface PomodoroSettings {
	pomodoro: number
	shortBreak: number
	longBreak: number
}

const STORAGE_KEY = "pomodoro-settings"

function getSettings(): PomodoroSettings {
	const defaultSettings: PomodoroSettings = {
		pomodoro: 25,
		shortBreak: 5,
		longBreak: 15
	}

	try {
		const data = localStorage.getItem(STORAGE_KEY)
		return data ? JSON.parse(data) : defaultSettings
	} catch {
		return defaultSettings
	}
}

function saveSettings(settings: PomodoroSettings): void {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
}

export const StorageService = {
	getSettings,
	saveSettings
}
