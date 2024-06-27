let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function (){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop')
        scroll.classList.toggle('active', window.scrollY > 450)
})

window.sr = ScrollReveal ({ reset: true});

// sr.reveal('.img-logo', {
//     rotate: { x: 0, y: 30, z: 0},
//     duration: 2000
// });


sr.reveal('.banner__titulo', {
    rotate: { x: 0, y: 80, z: 0},
    duration: 5000
});

sr.reveal('.banner__texto', {
    rotate: { x: 50, y: 0, z: 0},
    duration: 7000
});

sr.reveal('.botao', {
    rotate: { x: 30, y: 0, z: 0},
    duration: 9000
});

sr.reveal('.titulo-carrossel',  {
    rotate: { x: 0, y: 20, z: 0},
    duration: 5000
});

sr.reveal('.slider',  {
    rotate: { x: 0, y: 90, z: 0},
    duration: 5000
});

sr.reveal('.apresentacao-texto', {
    rotate: { x: 50, y: 0, z: 0},
    duration: 5000
});

sr.reveal('.videos_container', {
    rotate: { x: 50, y: 0, z: 0},
    duration: 7000
});

sr.reveal('.titulo-hist',  {
    rotate: { x: 0, y: 10, z: 0},
    duration: 5000
});

sr.reveal('.historia-texto',  {
    rotate: { x: 0, y: 50, z: 0},
    duration: 8000
});

sr.reveal('.fotos-historia',  {
    rotate: { x: 50, y: 0, z: 0},
    duration: 5000
});


sr.reveal('.contato-titulo',  {
    rotate: { x: 0, y: 10, z: 0},
    duration: 5000
});

sr.reveal('.container-form',  {
    rotate: { x: 0, y: 50, z: 0},
    duration: 5000
});

sr.reveal('.submit', {
    rotate: { x: 50, y: 0, z: 0},
    duration: 5000
});


