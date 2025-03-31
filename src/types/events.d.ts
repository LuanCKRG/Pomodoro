interface SettingsChangedEvent extends CustomEvent {
	detail: {
		pomodoro: number
		shortBreak: number
		longBreak: number
		timestamp: number
	}
}

declare global {
	interface DocumentEventMap {
		"settings-changed": SettingsChangedEvent
	}
}
