# project releted to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-wzdw8x?file=1-colorChanger%2Fchaiaurcode.js)
# Solution Code

## project 1

```Java Script
console.log("Hitesh")
const button=document.querySelectorAll('.button');
const body=document.querySelector('body');

button.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.id==='grey'){
    body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
      }
      if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow'){
          body.style.backgroundColor=e.target.id
          }
    
  })
})
```