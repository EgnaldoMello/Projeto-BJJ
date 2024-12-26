/*efeito com scroll*/
const target = document.querySelectorAll('[data-anime]');
const icone1 = document.querySelector('.icone1');
const icone2 = document.querySelector('.icone2');

console.log(icone2.offsetTop)

function scroll() {
    const topoWindow = window.scrollY + ((window.innerHeight * 3) / 4);
    if(topoWindow > Math.abs(icone1.offsetTop) * 20) { 
        icone1.classList.add('girar')
        } else {
        icone1.classList.remove('girar')
        };
    if(topoWindow > icone2.offsetTop * 85) { 
        icone2.classList.add('saltar')
        } else {
        icone2.classList.remove('saltar')
        };
    target.forEach((e) => {
        if(topoWindow > e.offsetTop) {
            e.classList.add('animate')
        } else {
            e.classList.remove('animate')
        }   
    })
}

scroll();

if(target.length){
window.addEventListener('scroll', function(){
    scroll();
})};

/*slide*/
const imagens = document.querySelectorAll('.slide');
const setad = document.querySelector('.setad');
const setae = document.querySelector('.setae');
let i = 0;

function mostrarimg() {
    imagens[i].classList.add('frente');
}

function esconderimg() {
    imagens.forEach(e => e.classList.remove('frente'))
}

function imganterior() {
    esconderimg()
    if(i == 0) {
        i = imagens.length - 1;    
    } else {
        i--
    }
    mostrarimg()
}

function imgposterior() {
    esconderimg()
    if(i == imagens.length - 1) {
        i = 0    
    } else {
        i++
    }
    mostrarimg()
}

setad.addEventListener('click', imgposterior)
setae.addEventListener('click', imganterior)