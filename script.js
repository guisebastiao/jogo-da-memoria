const gameClass = document.querySelector('.game');
let firstCard = '', secondCard = '';
let hits = [];
const arrayImages = [
    "c_sharp",
    "c_sharp",
    "c",
    "c",
    "c++",
    "c++",
    "css",
    "css",
    "html",
    "html",
    "java",
    "java",
    "js",
    "js",
    "python",
    "python",
];

function game(){
    const imagesRandom = arrayImages.sort(() => Math.random() - 0.5);
    const time = 500;

    imagesRandom.forEach((e) => {
        criaCards(e)
    });

    const cards = document.querySelectorAll('.cards');

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.add('active');

            if(firstCard === ''){
                firstCard = card.dataset.caracter;
            } else {
                secondCard = card.dataset.caracter;
            }

            if(arrayImages.includes(secondCard)){
                if(firstCard === secondCard){
                    cards.forEach((e) => {
                        if(e.dataset.caracter === firstCard){
                            e.classList.add('card-certain');
                        }

                        if(e.dataset.caracter === secondCard){
                            e.classList.add('card-certain');
                        }
                    });

                    hits.push(firstCard, secondCard);

                    firstCard = '';
                    secondCard = '';
                } else {
                    cards.forEach((e) => {
                        if(e.classList.contains('active')){
                            setTimeout(() => {
                                e.classList.remove('active');
                            }, time);
                        }
                    });

                    firstCard = '';
                    secondCard = '';
                }
            }

            checkWin();
        });
    });
}

function checkWin(){
    const screenWin = document.querySelector('.screen-win')
    const time = 200;
    const reload = 1800;

    if(hits.length >= 16){
        setTimeout(() => {
            gameClass.classList.add('hidden');
            screenWin.classList.add('active');
        }, time);

        setTimeout(() => {
            location.reload();
        }, reload);
    }
}

function criaCards(caracter){
    const cards = document.createElement('div');
    cards.setAttribute('class', 'cards');
    cards.setAttribute('data-caracter', caracter)
    const front = document.createElement('div');
    front.setAttribute('class', 'front');
    const back = document.createElement('div');
    back.setAttribute('class', 'back');
    const img = document.createElement('img');
    img.setAttribute('class', 'images');
    img.src = `img/${caracter}.png`

    gameClass.appendChild(cards);
    cards.appendChild(front);
    cards.appendChild(back);
    front.appendChild(img);
}

game();