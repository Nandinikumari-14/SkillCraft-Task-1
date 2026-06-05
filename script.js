
const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector('.ocfe');
const pcfe = document.querySelector('.pcfe');
const red = document.querySelector('.box.red');
const pink = document.querySelector('.box.pink');
const yellow = document.querySelector('.box.yellow');

gcfe.addEventListener('click', ()=>{
    red.style.opacity = '1'
    red.style.transform = 'rotate(0deg)'

    yellow.style.opacity = '0'
    yellow.style.transform = 'rotate(-90deg)'
    pink.style.opacity = '0'
    pink.style.transform = 'rotate(-90deg)'
})

ocfe.addEventListener('click', ()=>{
    pink.style.opacity = '1'
    pink.style.transform = 'rotate(0deg)'

    yellow.style.opacity = '0'
    yellow.style.transform = 'rotate(-90deg)'
    red.style.opacity = '0'
    red.style.transform = 'rotate(-90deg)'
})

pcfe.addEventListener('click', ()=>{
    yellow.style.opacity = '1'
    yellow.style.transform = 'rotate(0deg)'

    red.style.opacity = '0'
    red.style.transform = 'rotate(-90deg)'
    pink.style.opacity = '0'
    pink.style.transform = 'rotate(-90deg)'
})