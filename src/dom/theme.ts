import { rootElement } from "@/dom/elements"
import { CyclePhase } from "@/types"

export function handleTheme(newPhase: CyclePhase) {
	const currentTheme = rootElement.getAttribute("data-theme")

	let newTheme = "red"

	if (newPhase === CyclePhase.pomodoro) {
		newTheme = "red"
	} else if (newPhase === CyclePhase.shortBreak) {
		newTheme = "light-blue"
	} else if (newPhase === CyclePhase.longBreak) {
		newTheme = "dark-blue"
	}

	if (currentTheme === newTheme) return

	rootElement.setAttribute("data-theme", newTheme)
}
