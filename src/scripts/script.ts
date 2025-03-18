//Botões
const pause_btn = document.querySelector("#pause") as HTMLButtonElement
const start_btn = document.querySelector("#start") as HTMLButtonElement
const reset_btn = document.querySelector("#reset") as HTMLButtonElement

// Timer
const timer_display = document.querySelector("#timer-display") as HTMLTimeElement

//Eventos DOM
// pause_button?.addEventListener("click", Pause)
start_btn.addEventListener("click", startPomodoro)
// reset_button?.addEventListener("click", Reset)

interface TimerType {
  minutes: number
  seconds: number
}

const timer: TimerType = {
  minutes: 25,
  seconds: 0
}

let intervalId: number | null = null // Controle do intervalo

let isPomodoroCycle: boolean = false

function formatTime(value: number): string {
  return value.toString().padStart(2, "0")
}

function updateTimerDisplay() {
  timer_display.innerHTML = `${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`
}

function startTimer() {
  if (timer.seconds === 0) {
    if (timer.minutes === 0) {
      clearInterval(intervalId!) // Para o timer quando chegar a zero
      intervalId = null
      return
    }
    timer.seconds = 59
    timer.minutes--
  } else {
    timer.seconds--
  }

  updateTimerDisplay()
}

function startPomodoro() {
  if (!intervalId) { // Evita múltiplos intervals
    intervalId = setInterval(startTimer, 1000)
    isPomodoroCycle = true
  }
}