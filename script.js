// Select all clock hands (though 'allHands' is not used in the script)
const allHands = document.querySelector('.hand');

// Select individual hands of the clock
const secHand = document.querySelector('.second-hand'); // Second hand
const minHand = document.querySelector('.min-hand');   // Minute hand
const hourHand = document.querySelector('.hour-hand'); // Hour hand

lastSeconds = 0;
lastMinutes = 0;

// Function to update the clock hands based on the current time
function setDate() {
    const now = new Date(); // Get the current date and time

    // Calculate rotation for the second hand
    const secs = now.getSeconds();
    const secsToDegrees = (secs / 60) * 360; // Convert seconds into degrees
    secHand.style.transform = `rotate(${secsToDegrees + 90}deg)`; // Rotate second hand

    // Calculate rotation for the minute hand
    const mins = now.getMinutes();
    const minsToDegrees = (mins / 60) * 360; // Convert minutes into degrees
    minHand.style.transform = `rotate(${minsToDegrees + 90}deg)`; // Rotate minute hand

    // Calculate rotation for the hour hand
    const hours = now.getHours();
    const hoursToDegrees = (hours / 12) * 360; // Convert hours into degrees (12-hour format)
    hourHand.style.transform = `rotate(${hoursToDegrees + 90}deg)`; // Rotate hour hand

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

    lastSeconds = secs;
    lastMinutes = mins;
}

// Update the clock hands every second
setInterval(setDate, 1000);
