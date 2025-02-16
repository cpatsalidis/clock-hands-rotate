const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let lastSeconds = 0;
let lastMinutes = 0;

function setDate() {
    const now = new Date();

    // Get current time
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    // Convert time to degrees
    const secsToDegrees = (secs / 60) * 360;
    const minsToDegrees = (mins / 60) * 360;
    const hoursToDegrees = (hours / 12) * 360;

    // Fix for second hand: Remove animation when it resets
    if (secs === 0) {
        secHand.style.transition = 'none';
    } else {
        secHand.style.transition = '';
    }

    // Fix for minute hand: Remove animation when it resets
    if (mins !== lastMinutes) {
        minHand.style.transition = mins === 0 ? 'none' : '';
    }

    // Fix for hour hand: Remove animation when it resets
    if (hours === 0 && mins === 0) {
        hourHand.style.transition = 'none';
    } else {
        hourHand.style.transition = '';
    }

    // Apply transformations
    secHand.style.transform = `rotate(${secsToDegrees + 90}deg)`;
    minHand.style.transform = `rotate(${minsToDegrees + 90}deg)`;
    hourHand.style.transform = `rotate(${hoursToDegrees + 90}deg)`;

    // Update last recorded values
    lastSeconds = secs;
    lastMinutes = mins;
}

// Update the clock hands every second
setInterval(setDate, 1000);

// Initialize the clock immediately
setDate();
