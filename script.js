const horasE = document.getElementById('horas')
const minutosE = document.getElementById('minutos')
const segundosE = document.getElementById('segundos')

function novoTempo(){

    const data = new Date();

    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()

    horasE.textContent = tempoFixed(horas)
    minutosE.textContent = tempoFixed(minutos)
    segundosE.textContent = tempoFixed(segundos)
}

function tempoFixed(time){
    return time < 10 ? '0'+time : time
}
novoTempo()
setInterval(novoTempo, 1000)

