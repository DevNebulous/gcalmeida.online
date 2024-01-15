
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
    if (document.body.classList.contains('light-mode')) {
        animateRobo.innerHTML = `
        <div class="svg">
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
            <dotlottie-player src="https://lottie.host/70ee8435-d320-411e-83d9-bad7e552a75d/Ca1jjw6NpR.json" background="transparent" speed="1" style="width: 100%; height: 100%;" loop autoplay></dotlottie-player>
        </div>
      `;
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        
    } else {
        animateRobo.innerHTML = `
        <div class="svg">
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
            <dotlottie-player src="https://lottie.host/22889ef5-46f7-478c-b14c-f7f5d71793a4/TjM7XzdGmW.json" background="transparent" speed="1" style="width: 100%; height: 100%;" loop autoplay></dotlottie-player>
        </div>
        `;
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        
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
const divProjeto = document.getElementById('descricao-projetos-container');
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
    divProjeto.innerHTML = `
    <div class="descricao-projetos">
    <div class="image-projeto">
        <img src="img/bi/image_bi_1.png" alt='Demonstração da tela de login do projeto "Meu negocio" '>
    </div>
    <div class="descricao-projeto">
        <h3>Descrição do projeto</h3>
        <p> O projeto "Relatório da Pesquisa de Satisfação" foi iniciado para atender à necessidade de uma empresa em aprimorar suas interações com os clientes. O foco do projeto foi a análise detalhada dos dados para identificar os principais pontos de falha da empresa, bem como as áreas de maior e menor satisfação do cliente. Além disso, o projeto calcula o NPS (Net Promoter Score), um indicador padronizado que mede a satisfação dos clientes com o atendimento. Embora não sejam tecnologias específicas, o projeto envolveu o desenvolvimento da estrutura do relatório, utilizando SQL e DAX. Um dos desafios foi estabelecer as relações entre as tabelas de dados e determinar quais indicadores seriam mais eficazes para o cliente. O projeto foi muito bem recebido dentro da empresa do cliente, desde os técnicos até a gerência e as áreas de metas.</p>
    </div>
    <div class="tecnologias-projeto">
        <h3>Tecnologias:</h3>
        <ul>
            <li>DAX<span class="tooltip">Data Analysis Expressions</span></li>
            <li><i class="fa-solid fa-database"></i><span class="tooltip">SQL</span></li>
        </ul>
    </div>
</div>
    `
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

    divProjeto.innerHTML = `
    <div class="descricao-projetos">
    <div class="image-projeto">
        <img src="img/lab2/image_lab2.png" alt='Demonstração da tela de login do projeto "Meu negocio" '>
    </div>
    <div class="descricao-projeto">
        <h3>Descrição do projeto</h3>
        <p> O Lab2 é um aplicativo móvel dedicado a tablets, desenvolvido para uma empresa com o objetivo de otimizar os processos laboratoriais. No ambiente da empresa, os técnicos recebem amostras e realizam ensaios nelas. O aplicativo se integra ao sistema principal do cliente por meio de uma API, permitindo que os tablets acessem as amostras a serem testadas, exibam os ensaios aos técnicos e retornem os resultados dos ensaios, eliminando a necessidade de fichários em papel. O Lab2 foi desenvolvido utilizando Google Firebase, Java e SQL para criar um aplicativo nativo. O principal desafio foi garantir que o aplicativo fosse totalmente dinâmico e, ao mesmo tempo, atendesse aos requisitos do cliente. O     Lab2 foi bem recebido pelo laboratório do cliente e continua sendo utilizado até hoje. O aplicativo é elogiado por sua total dinamicidade e intuitividade, facilitando e agilizando um dos processos essenciais para o cliente. </p>
    </div>
    <div class="tecnologias-projeto">
        <h3>Tecnologias:</h3>
        <ul>
            <li><i class="fab fa-java"></i><span class="tooltip">Java</span></li>
            <li><i class="fa-solid fa-database"></i><span class="tooltip">SQL</span></li>
        </ul>
    </div>
</div>
    `

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

    divProjeto.innerHTML = `
    <div class="descricao-projetos">
    <div class="image-projeto">
        <img src="img/meu-negocio/negocio-1.jpg" alt='Demonstração da tela de login do projeto "Meu negocio" '>
    </div>
    <div class="descricao-projeto">
        <h3>Descrição do projeto</h3>
        <p> O projeto "Meu Negócio" foi concebido como um aplicativo de suporte para microempresas de serviços. Ele permite o registro e controle de agendamentos, clientes e horários, além de oferecer um resumo mensal financeiro. O aplicativo também possibilita o cadastro de serviços e clientes para vinculação a agendamentos e disponibiliza mensagens pré-definidas para comunicação ágil com os clientes, entre outros recursos. Para sua criação, foram utilizadas as tecnologias Firebase, Java e SQL. O principal desafio foi garantir uma experiência livre de problemas para os usuários no dia a dia, priorizando configurações flexíveis e a agilidade na inserção e coleta de dados. Embora ainda não tenha sido lançado publicamente, o aplicativo destaca-se pela sua usabilidade, permitindo o registro de fotos no atendimento, forma de pagamento e status de pagamento do cliente, com foco na eliminação de falhas e na inclusão de todos os registros relacionados à venda de serviços. Para quem não está familiarizado, o aplicativo é descrito como uma solução que gerencia os serviços de forma eficiente e sem complicações, eliminando preocupações como cobranças e atrasos. </p>
    </div>
    <div class="tecnologias-projeto">
        <h3>Tecnologias:</h3>
        <ul>
            <li><i class="fab fa-java"></i><span class="tooltip">Java</span></li>
            <li><i class="fa-solid fa-database"></i><span class="tooltip">SQL</span></li>
        </ul>
    </div>
    <div class="button-download">
    <a href="down/Meu Negocio.apk" download="Meu Negocio.apk">
        <button>Baixar APK</button>
    </a>
</div>
</div>
    `

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


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


