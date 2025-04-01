import { PomodoroTimer } from "@/features/pomodoro/pomodoro-timer"
import { ButtonController } from "@/ui/button.controller"
import { DisplayController } from "@/ui/display.controller"
import { ModalController } from "@/ui/modal.controller"
import { configModal } from "@/dom/elements"
import { setupIcons } from "@/utils/icons"
import { StorageService } from "./services/storage-service"

class App {
	private timer: PomodoroTimer
	private modalController!: ModalController
	private displayController!: DisplayController
	private buttonController!: ButtonController

	constructor() {
		const initialSettings = StorageService.getSettings()
		this.timer = new PomodoroTimer(initialSettings) // Já envia notificação

		// Configura os controladores
		this.setupModal()
		this.setupUI()
		this.setupEventListeners()
	}

	private setupModal(): void {
		this.modalController = new ModalController(configModal)

		// Carrega configurações salvas no modal
		this.modalController.initializeFormValues()
	}

	private setupUI(): void {
		// Controlador de exibição
		this.displayController = new DisplayController(this.timer, {
			timerDisplay: document.getElementById("timer-display") as HTMLDivElement,
			sessionType: document.getElementById("session-type") as HTMLDivElement,
			nextSession: document.getElementById("next-session") as HTMLDivElement,
			progressBar: document.getElementById("progress-bar") as HTMLDivElement,
			pomodoroCount: document.getElementById("pomodoro-count") as HTMLDivElement
		})

		this.buttonController = new ButtonController(this.timer, {
			playPauseButton: document.getElementById("play-pause-btn") as HTMLButtonElement,
			resetButton: document.getElementById("reset-btn") as HTMLButtonElement,
			workButton: document.getElementById("work-btn") as HTMLButtonElement,
			shortBreakButton: document.getElementById("short-break-btn") as HTMLButtonElement,
			longBreakButton: document.getElementById("long-break-btn") as HTMLButtonElement
		})

		// Registra observers
		this.timer.addObserver(this.displayController)
		this.timer.addObserver(this.buttonController)

		this.timer.notifyStateChange()

		this.displayController.init()
		this.buttonController.init()
	}

	private setupEventListeners(): void {
		document.addEventListener("settings-changed", (e) => {
			this.timer.updateSettings((e as CustomEvent).detail)
		})

		// Integrar com o botão de configurações
		configModal.openButton.addEventListener("click", () => this.modalController.open())
	}
}

window.addEventListener("DOMContentLoaded", () => {
	setupIcons()
	new App()
})
