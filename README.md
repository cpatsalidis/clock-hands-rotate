# CSS & JavaScript Analog Clock  

This project is a simple analog clock built using HTML, CSS, and JavaScript. The clock updates every second to display the current time.  

## Features  
- Uses JavaScript to get the current time and rotate clock hands accordingly.  
- Smoothly updates the second, minute, and hour hands.  
- Styled with CSS for a visually appealing clock face.  

## How It Works  
1. JavaScript retrieves the current time using `new Date()`.  
2. The seconds, minutes, and hours are converted into degrees (for rotation).  
3. The clock hands (`.second-hand`, `.min-hand`, `.hour-hand`) are rotated using CSS `transform`.  
4. The `setInterval()` function updates the time every second.  


