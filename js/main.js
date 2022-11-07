let balls = document.querySelector('.balls')
let quant = document.querySelectorAll('.slides .image')
let atual = 0
let imagem = document.getElementById('atual')
let next = document.getElementById('next')
let voltar = document.getElementById('voltar')
let rolar = true
for (let i = 0; i < quant.length; i++) {
    let div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

let pos = document.querySelectorAll('.balls div')

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        atual = pos[i].id
        rolar = false
        slide()
    })
}
voltar.addEventListener('click', () => {
    atual--
    slide()
})

next.addEventListener('click', () => {
    atual++
    slide()
})

function slide() {
    if (atual >= quant.length) {
        atual = 0
    }
    else if (atual < 0) {
        atual = quant.length - 1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -1189 * atual + 'px'
    document.getElementById(atual).classList.add('imgAtual')
}

setInterval(() => {
    if (rolar) {
        atual++
        slide()
    }
    else {
        rolar = true
    }
}, 4000)