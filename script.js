const target = document.querySelectorAll('[data-anime]');

function scroll() {
    const topoWindow = window.scrollY + ((window.innerHeight * 3) / 4);
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