let rotate = false
let toggleBtn = document.querySelector('#toggle')
let block2 = document.querySelector('#block2')
let liquid1 = document.querySelector('.liquid1');
let liquid2 = document.querySelector('.liquid2');
let liquid3 = document.querySelector('.liquid3');
let liquid = [liquid1,liquid2, liquid3]

liquid.forEach(item => {
    item.style.display = 'none'
})

let Aliquid1 = document.querySelector('.Aliquid1');
let Aliquid3 = document.querySelector('.Aliquid3');
let Aliquid2 = document.querySelector('.Aliquid2');
let Aliquid = [Aliquid1,Aliquid2,Aliquid3]

toggleBtn.addEventListener('click', () => {
    rotate = !rotate
    if (rotate) {
        toggleBtn.children[0].classList.add('rotate')
        Aliquid.forEach(item => {
            item.style.display = 'block'
        })
        liquid.forEach(item => {
            item.style.display = 'block'
        })
        block2.classList.remove('close')
        block2.classList.add('show')
        setTimeout(() => {
            console.log('Triggered')
            Aliquid.forEach(item => {
                item.style.top = 0
            })
            liquid.forEach(item => {
                item.style.bottom = 0
            })
        }, 690)
    } else{
        toggleBtn.children[0].classList.remove('rotate')
        Aliquid.forEach(item => {
            item.style.display = 'none'
        })
        liquid.forEach(item => {
            item.style.display = 'none'
        })
        Aliquid.forEach(item => {
            item.style.top = '-20px'
        })
        liquid.forEach(item => {
            if(item === Aliquid3){
                item.style.bottom = '-40px'
            } else {
                item.style.bottom = '-5px'
            }
        })
        block2.classList.remove('show')
        block2.classList.add('close')
    }
})