import { CyclePhase } from "@/types"

const DEFAULT_PHASE_DURATIONS: Record<CyclePhase, number> = {
	[CyclePhase.pomodoro]: 25,
	[CyclePhase.shortBreak]: 5,
	[CyclePhase.longBreak]: 15
}

const STORAGE_KEY = "phaseDurations"

function loadPhaseDurations(): Record<CyclePhase, number> {
	const storedData = localStorage.getItem(STORAGE_KEY)

	if (storedData) {
		try {
			return JSON.parse(storedData)
		} catch (error) {
			console.error("Erro ao carregar phaseDurations do localStorage. Usando valores padrão.", error)
		}
	}

	localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PHASE_DURATIONS))

	return { ...DEFAULT_PHASE_DURATIONS }
}

export let phaseDurations: Record<CyclePhase, number> = loadPhaseDurations()

export function updatePhaseDurations(newDurations: Partial<Record<CyclePhase, number>>) {
	phaseDurations = { ...phaseDurations, ...newDurations }
	localStorage.setItem(STORAGE_KEY, JSON.stringify(phaseDurations))
}
