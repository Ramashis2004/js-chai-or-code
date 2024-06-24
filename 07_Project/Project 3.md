# project releted to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ykzywh?file=3-DigitalClock%2Fchaiaurcode.js)
# Solution Code


## Project 3


```
javascript

console.log("Ram")

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function() {
  let date = new Date();
  console.log(date.toLocaleTimeString()); // Corrected: added parentheses
  clock.innerHTML = date.toLocaleTimeString(); // Corrected: added parentheses
}, 1000);
```