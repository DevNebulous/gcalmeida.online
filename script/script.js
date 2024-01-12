
function atualizarAlturaDaDiv() {
    var alturaDaTela = window.innerHeight;
    var homeDiv = document.getElementById('bannerHome');
    homeDiv.style.height = (alturaDaTela - 135) + 'px';
}

window.addEventListener('resize', function() {
    atualizarAlturaDaDiv();
});

atualizarAlturaDaDiv();



const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const animateRobo = document.getElementById('svg-container');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    const darkMode = `
    <div class="svg">
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
        <dotlottie-player src="https://lottie.host/70ee8435-d320-411e-83d9-bad7e552a75d/Ca1jjw6NpR.json" background="transparent" speed="1" style="width: 100%; height: 100%;" loop autoplay></dotlottie-player>
    </div>
  `;

    const lightMode = `
    <div class="svg">
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
        <dotlottie-player src="https://lottie.host/22889ef5-46f7-478c-b14c-f7f5d71793a4/TjM7XzdGmW.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>
    </div>
    `;

    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        animateRobo.innerHTML = lightMode;
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        animateRobo.innerHTML = darkMode;
    }
});


var btnTop = document.getElementById('btn-top');
var btnbottom = document.getElementById('btn-bottom');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        btnTop.style.display = 'block';
        btnbottom.style.display = 'none';
    } else {
        btnTop.style.display = 'none';
        btnbottom.style.display = 'block';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function scrollToBottom() {
    window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
}); }



const buttonMeuNegocio = document.getElementById('app-meu-negocio');
const buttonLab2 = document.getElementById('app-lab-2');
const buttonBI = document.getElementById('relatorio-bi');

const projectCards2 = document.querySelectorAll('.project-card');

buttonBI.addEventListener('click', () => {
    projectCards2.forEach(card => {
        if (card.id !== buttonBI.id) {
            card.classList.remove('current', 'previous');
            card.classList.add('next');
        } else {
            card.classList.remove('next', 'previous');
            card.classList.add('current');
        }
    });
});

buttonLab2.addEventListener('click', () => {
    projectCards2.forEach(card => {
        if (card.id !== buttonLab2.id) {
            card.classList.remove('current', 'next');
            card.classList.add('previous');
        } else {
            card.classList.remove('next', 'previous');
            card.classList.add('current');
        }
    });
});

buttonMeuNegocio.addEventListener('click', () => {
    projectCards2.forEach(card => {
        if (card.id === buttonLab2.id) {
            card.classList.remove('current', 'previous');
            card.classList.add('next');
        } else if (card.id === buttonBI.id) {
            card.classList.remove('current', 'next');
            card.classList.add('previous');
        } else {
            card.classList.remove('next', 'previous');
            card.classList.add('current');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtém o destino do link
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rola a página até o elemento de destino
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

