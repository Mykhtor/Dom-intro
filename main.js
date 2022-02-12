// document.addEventListener('DOMContentLoaded',function () {
//     alert('Dom yuklandi')
// })

// let element = querySelector

// let btn = document.querySelector('#btn')

// btn.addEventListener('click',function () {

// let a = prompt('Malumot kiriting: ')
// let name = document.querySelector('#text')
// text.innerText=a



// })





let btn = document.querySelector('#btn')

btn.addEventListener('click',function () {


let a = prompt('Yoshingizni kiriting: ')
if ( a >= 18){
    let yosh = document.querySelector('#yosh')
    yosh.innerText = 'saytga marhamat'
}
else if ( a < 18 ){
    let yosh = document.querySelector('#yosh')
    yosh.innerText = 'damingni ol charchading'
}

// let a = Number(prompt('a sonini kiriting: '))
// let b = Number( prompt('b sinini kiriting: '))
// let kopaytiruv = document.querySelector('.kopaytiruv')
// let boluv = document.querySelector('.boluv')
// let plus = document.querySelector('.plus')
// let minus = document.querySelector('.minus')
// kopaytiruv.innerText = a*b
// boluv.innerText = a/b
// plus.innerText = a + b
// minus.innerText = a - b

})


