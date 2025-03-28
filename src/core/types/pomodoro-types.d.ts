export type SessionType = "WORK" | "SHORT_BREAK" | "LONG_BREAK"

export interface PomodoroState {
	currentSession: SessionType
	nextSession: SessionType
	remainingTime: number
	isRunning: boolean
	pomodoroCount: number
	sessions: {
		WORK: number
		SHORT_BREAK: number
		LONG_BREAK: number
	}
}
