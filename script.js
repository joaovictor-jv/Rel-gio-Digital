const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const data = document.getElementById('data');

const relogioDigital = setInterval(function time() {

    let dateToday = new Date();

    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();
    
    let currentDate = dateToday.toLocaleDateString();

    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;

    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = seconds;

    data.textContent = currentDate;
})





const modo = document.getElementById('icon');
const body = document.getElementById('corpo')

modo.addEventListener('click', () => {
    if(modo.classList.contains('fa-sun')){
        modo.classList.remove('fa-sun');
        modo.classList.add('fa-moon');

        body.classList.add('light');
        return;
    }

    modo.classList.add('fa-sun');
    modo.classList.remove('fa-moon');
    body.classList.remove('light');
    
});