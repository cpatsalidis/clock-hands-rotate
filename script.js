const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function seconds() {
    const now = new Date()
    const secs = now.getSeconds();
    const secsToDegrees = (secs / 60) * 360

    secHand.style.transform = `rotate(${secsToDegrees + 90}deg)`
}

function minutes() {
    const now = new Date()
    const mins = now.getMinutes();
    const minsToDegrees = (mins / 60) * 360

    minHand.style.transform = `rotate(${minsToDegrees + 90}deg)`
}

function hours() {
    const now = new Date()
    const hours = now.getHours();
    const hoursToDegrees = (hours / 12) * 360

    hourHand.style.transform = `rotate(${hoursToDegrees + 90}deg)`
}

setInterval(seconds, 1000)
setInterval(minutes, 1000)
setInterval(hours, 1000 * 60 * 60)