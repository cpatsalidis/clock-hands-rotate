const allHands = document.querySelector('.hand')
const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date()
    const secs = now.getSeconds();
    const secsToDegrees = (secs / 60) * 360

    secHand.style.transform = `rotate(${secsToDegrees + 90}deg)`
    console.log(secsToDegrees)
    const mins = now.getMinutes();
    const minsToDegrees = (mins / 60) * 360

    minHand.style.transform = `rotate(${minsToDegrees + 90}deg)`

    const hours = now.getHours();
    const hoursToDegrees = (hours / 12) * 360

    hourHand.style.transform = `rotate(${hoursToDegrees + 90}deg)`
}


setInterval(setDate, 1000)
