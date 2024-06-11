const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const appTitle = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button'); // classe comum aos botoes
//const musicaFocoInput = document.querySelector("#alternar-musica");
// ou
const musicaFocoInput = document.getElementById("alternar-musica");
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if( musica.paused ) {
        musica.play();
    } else {
        musica.pause();
    }
})


// Adicionando um evento ao botao para mudar um atributo
focoBt.addEventListener( 'click', () => {
    alteraContexto('foco');
    focoBt.classList.add('active');
});

// Adicionando um evento ao botao para mudar um atributo
curtoBt.addEventListener( 'click', () => {
    alteraContexto('descanso-curto');
    curtoBt.classList.add('active');
});

// Adicionando um evento ao botao para mudar um atributo
longoBt.addEventListener( 'click', () => {
    alteraContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alteraContexto( contexto ) {
    botoes.forEach( function (contexto) {
        contexto.classList.remove('active');
    });
    html.setAttribute( 'data-contexto', contexto );
    banner.setAttribute( 'src', `/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            appTitle.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;            
            break;
        case "descanso-curto":
            appTitle.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `;            
            break;
        case "descanso-longo":
            appTitle.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;            
            break;            
        default:
            break;
    }
}


