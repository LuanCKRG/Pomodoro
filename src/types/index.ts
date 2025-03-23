export type TimerType = {
	minutes: number
	seconds: number
}

export enum CyclePhase {
	pomodoro = "pomodoro",
	shortBreak = "short-break",
	longBreak = "long-break"
}
