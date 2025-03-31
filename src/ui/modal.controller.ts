import { StorageService } from "@/services/storage-service"

// src/features/ui/ModalController.ts
interface ModalElements {
	overlay: HTMLElement
	modal: HTMLElement
	closeButton: HTMLButtonElement
	submitButton: HTMLButtonElement
	pomodoroInput: HTMLInputElement
	shortBreakInput: HTMLInputElement
	longBreakInput: HTMLInputElement
}

export class ModalController {
	private elements: ModalElements

	constructor(elements: ModalElements) {
		this.elements = elements

		this.initEventListeners()
		this.validateElements()
	}

	private validateElements(): void {
		for (const [key, element] of Object.entries(this.elements)) {
			if (!element) {
				throw new Error(`Modal element not found: ${key}`)
			}
		}
	}

	private initEventListeners(): void {
		// Fechar modal
		this.elements.overlay.addEventListener("click", (e) => {
			if (e.target === this.elements.overlay) this.close()
		})

		this.elements.closeButton.addEventListener("click", () => this.close())
		this.elements.submitButton.addEventListener("click", (e) => {
			e.preventDefault()
			this.handleSubmit()
		})
	}

	public open(): void {
		this.elements.overlay.classList.remove("hidden")
		this.elements.modal.classList.remove("hidden")
	}

	public close(): void {
		this.elements.overlay.classList.add("hidden")
		this.elements.modal.classList.add("hidden")
	}

	private handleSubmit(): void {
		const values = {
			pomodoro: this.validateInput(this.elements.pomodoroInput.value, 25),
			shortBreak: this.validateInput(this.elements.shortBreakInput.value, 5),
			longBreak: this.validateInput(this.elements.longBreakInput.value, 15)
		}

		StorageService.saveSettings(values)
		document.dispatchEvent(new CustomEvent("settings-changed", { detail: values }))
		this.close()
	}

	private validateInput(value: string, defaultValue: number): number {
		const parsed = Number.parseInt(value)
		return Number.isNaN(parsed) || parsed < 1 ? defaultValue : parsed
	}

	public initializeFormValues(): void {
		const settings = StorageService.getSettings()
		this.elements.pomodoroInput.value = settings.pomodoro.toString()
		this.elements.shortBreakInput.value = settings.shortBreak.toString()
		this.elements.longBreakInput.value = settings.longBreak.toString()
	}
}
