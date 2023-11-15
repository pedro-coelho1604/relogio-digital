const temaClaro = document.querySelector('#claro')
const temaEscuro = document.querySelector('#escuro')
temaEscuro.addEventListener('click', ()=> {
    document.body.classList.add('darkModeActivate')
})

temaClaro.addEventListener('click', ()=> {
    document.body.classList.remove('darkModeActivate')
})

const currentTime = () => {
    const el = document.querySelector('h1')

    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    hh = hh < 10 ? `0${hh}` : hh
    mm = mm < 10 ? `0${mm}` : mm
    ss = ss < 10 ? `0${ss}` : ss

    let time = `${hh}:${mm}:${ss}`
    el.innerHTML = time
}

currentTime()
setInterval(currentTime, 1000)