let menuVisible = false;

const mostrarOcultarMenu = () => {
    if (menuVisible) {
        document.getElementById('nav').classList = '';
        menuVisible = false;
    } else {
        document.getElementById('nav').classList = 'responsive';
        menuVisible = true;
    }
}

const seleccionar = () => {
    document.getElementById('nav').classList = '';
    menuVisible = false;
}
const efectoHabilidades = () => {
    let skills = document.getElementById('skills');
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distanciaSkills >= 300) {
        let habilidades=document.getElementsByClassName('progress');
        habilidades[0].classList.add('javascript');
        habilidades[1].classList.add('htmlcss');
        habilidades[2].classList.add('angular');
        habilidades[3].classList.add('tailwind');
        habilidades[4].classList.add('bootstrap');
        habilidades[5].classList.add('lit');
        habilidades[6].classList.add('comunicacion');
        habilidades[7].classList.add('equipo');
        habilidades[8].classList.add('dedicacion');
        habilidades[9].classList.add('project');
        habilidades[10].classList.add('adaptabilidad');
        habilidades[11].classList.add('creatividad');
    }
}

window.onscroll = function () {
     efectoHabilidades();
}
