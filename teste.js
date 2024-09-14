// Array de jogadores com nome e foto
const jogadores = [
    { nome: "Bruno", imagem: "./images/bruno.jpeg"},
    { nome: "Guilherme", imagem: "./images/guilherme.jpeg"},
    { nome: "Exemplo 1", imagem: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"},
    { nome: "Exemplo 2", imagem: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"},
    { nome: "Kareca", imagem: "./images/kareca.jpeg"},
    { nome: "Exemplo 3", imagem: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"},
    { nome: "Exemplo 4", imagem: "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"},
];

// Capturando o elemento atraves do ID. 
// No caso eu quero criar uma estrutura de repeticao e colocar os valores dentro desse elemento a seguir.
var divJogadores = document.getElementById('carousel-jogadores');
let slideIndex = 0;
let carouselItem;

// no meu caso, consigo ver atraves do meu HTML que a cada 3 jogadores eu tenho um ITEM de carrousel
//carrousel leva o nome porque igual na vida real, é algo que vai sempre rodando

// eu deixei comentando no meu teste.html como era o carousel antigamente antes do javacript, a maneira chumbada

jogadores.forEach((jogador, index) => {

    // a cada 3 jogadores criar um novo slide
    if (index % 3 === 0) {
        slideIndex++;
        carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (slideIndex === 1) {
          carouselItem.classList.add('active'); // O primeiro slide é o ativo
        }
        const playerWrapper = document.createElement('div');
        playerWrapper.classList.add('d-flex', 'justify-content-center');
        carouselItem.appendChild(playerWrapper);
        divJogadores.appendChild(carouselItem);
    }

    // Criar a imagem do jogador
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    const playerImg = document.createElement('img');
    playerImg.src = jogador.imagem;
    playerImg.alt = jogador.nome;
    playerImg.classList.add('d-block', 'mx-3');
    playerDiv.appendChild(playerImg);

    // Adicionar a imagem ao slide atual
    carouselItem.querySelector('.d-flex').appendChild(playerDiv);
});
