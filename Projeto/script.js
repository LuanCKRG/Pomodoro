//Botões
const Pausar = document.querySelector("#pause")
const Começar = document.querySelector("#start")
const Resetar = document.querySelector("#resetar")
//Eventos DOM
Pausar.addEventListener("click", Pause)
Começar.addEventListener("click", Start)
Resetar.addEventListener("click", Reset)

var Pomo
var timerTotaly = 25
var Minuto = Number(timerTotaly)
var Segundo = 00

//Contagem de Tempo
function Timer() {
  Segundo--
  if (Segundo < 0) {
    Segundo = 59
    Minuto--
  }
  document.querySelector("#pom").innerText = `${Formatador(Minuto)}:${Formatador(Segundo)}`
  if (Minuto == 0 && Segundo == 00) {
    clearInterval(Pomo)
    MudarEstado()
  }
}

// "Passagem" de Tela
function ComeçarIntervalo() {
  Reset()
  Minuto = 05
  Segundo = 00
  document.querySelector("#pom").innerText = `${Formatador(Minuto)}:${Formatador(Segundo)}`
  document.querySelector("#titulo").innerText = "Intervalo"
}
function FinalizarIntervalo() {
  Reset()
  Minuto = 25
  Segundo = 00
  document.querySelector("#pom").innerText = `${Formatador(Minuto)}:${Formatador(Segundo)}`
  document.querySelector("#titulo").innerText = "Pomodoro"
}

//Comandos Básicos
function Start() {
  document.querySelector("#start").innerText = "Começar"
  clearInterval(Pomo)
  Pomo = setInterval(Timer, 1000)
  Sumir(Começar)
  Aparecer(Pausar)
  Aparecer(Resetar)
}
function Pause() {
  clearInterval(Pomo)
  Aparecer(Começar)
  document.querySelector("#start").innerText = "Continuar"
  Sumir(Pausar)
}
function Reset() {
  clearInterval(Pomo)
  Minuto = timerTotaly
  Segundo = 00
  document.querySelector("#pom").innerText = `${Formatador(Minuto)}:${Formatador(Segundo)}`
  document.querySelector("#start").innerText = "Começar"
  Sumir(Pausar)
  Sumir(Resetar)
  Aparecer(Começar)
}

//Formatador
function Formatador(input) {
  return input < 10 ? `0${input}` : input
}

//Esconder&Aparecer os elementos
function Sumir(input) {
  return (input.style.display = "none")
}
function Aparecer(input) {
  return (input.style.display = "inline")
}

function MudarEstado() {
  if (document.querySelector("#titulo").innerText == "Pomodoro") {
    ComeçarIntervalo()
    timerTotaly = 05
  } else {
    FinalizarIntervalo()
    timerTotaly = 25
  }
}