let menuVisible = false;
const URL_EYE = 'https://eyeseguros.com/';
const URL_VUS = 'https://b2cprdciudadanos.b2clogin.com/b2cprdciudadanos.onmicrosoft.com/b2c_1a_signinvus/oauth2/v2.0/authorize?client_id=dbf00fe0-455f-4d25-baab-403f2ff4a277&scope=openid%20offline_access%20profile&redirect_uri=https%3A%2F%2Fvus.circulemosdigital.com.co%2F&client-request-id=6b64b5b8-bf77-4db7-a42b-b05799855b5d&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.30.0&client_info=1&code_challenge=f3peQtBBvwnh1a_136nJT3b7sVJ830AdcoVfuDyrxyo&code_challenge_method=S256&nonce=2d8bd597-71c3-4ab0-9ff7-cf9218640da4&state=eyJpZCI6IjgxNTAwMDQ1LTg0NTEtNDcyZS04YmQwLTdjODU1NDZjZDYwMiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D/';
const scriptUrl = 'https://script.google.com/macros/s/AKfycbyFFJbucH8MmiBGHCbg_SC8Ep5fM0l-jXgR_7QiTFH-ELHxeTn1handABHb5fS1JEo2eQ/exec';
const URL_LANDING = 'https://xaviersalcedorealtor.com/';
const  URL_LINEA_TIEMPO = 'https://linea-tiempo.vercel.app/'
const form = document.forms['contact-form'];

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
        let habilidades = document.getElementsByClassName('progress');
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

document.getElementById('eye').setAttribute('href', URL_EYE);
document.getElementById('vus').setAttribute('href', URL_VUS);
document.getElementById('landing').setAttribute('href', URL_LANDING);
document.getElementById('linea-tiempo').setAttribute('href', URL_LINEA_TIEMPO);

form.addEventListener('submit', e => {
    e.preventDefault()

    const formulario = {
        nombre: form['nombre'].value.trim(),
        celular: form['celular'].value.trim(),
        email: form['email'].value.trim(),
        asunto: form['asunto'].value.trim(),
        descripcion: form['descripcion'].value.trim()
    }

    if (formulario.nombre === '' || formulario.celular === '' || formulario.email === '' ||
            formulario.asunto === '' || formulario.descripcion === '') {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Falta algún dato!",
        });
    } else {
        fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
                .then(response => Swal.fire({
                    title: "¡MUCHAS GRACIAS!",
                    text: "Formulario Envíado",
                    icon: "success"
                }))
                .catch(error => console.error('Error', error.message))
    }
})
