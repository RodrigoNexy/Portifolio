
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
           setTimeout(()=>{
            elemento.innerHTML += letra
           }, 75 * i)
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria');

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('ativado');
});

const listaAll = document.querySelectorAll('.project_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_models ul li');
const buttonAll = document.querySelectorAll('.project_models .all');

function removeClick(index) {
    buttonGeral.forEach((item) => {
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeClick(index);
    });
});

buttonGeral.forEach((item) => {
    item.addEventListener('click', (e) => {
        let currentButton = e.target;
        // Use a variável currentButton conforme necessário
    });
});