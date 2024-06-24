# project releted to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ykzywh?file=2-BMICalculator%2Fchaiaurcode.js)
# Solution Code


## Project 2


```
javascript

console.log("Ram")




const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height. Current value: ${height}`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML += `<br>Please provide a valid weight. Current value: ${weight}`;
    // You might want to add similar validation 
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

   results.innerHTML=`<span>${bmi}</span>`
  }
});
```
