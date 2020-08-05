//*********************MEMORY GAME********************************** */
document.addEventListener('DOMContentLoaded', () => {

        //card options
        const cardArray = [{
                name: 'fries',
                img: 'images/fries.png'
            },
            {
                name: 'fries',
                img: 'images/fries.png'
            },
            {
                name: 'cheeseburger',
                img: 'images/cheeseburger.png'
            },
            {
                name: 'cheeseburger',
                img: 'images/cheeseburger.png'
            },
            {
                name: 'hotdog',
                img: 'images/hotdog.png'
            },
            {
                name: 'hotdog',
                img: 'images/hotdog.png'
            },
            {
                name: 'ice-cream',
                img: 'images/ice-cream.png'
            },
            {
                name: 'ice-cream',
                img: 'images/ice-cream.png'
            },
            {
                name: 'milkshake',
                img: 'images/milkshake.png'
            },
            {
                name: 'milkshake',
                img: 'images/milkshake.png'
            },
            {
                name: 'pizza',
                img: 'images/pizza.png'
            },
            {
                name: 'pizza',
                img: 'images/pizza.png'
            },
        ]

        cardArray.sort(() => 0.5 - Math.random())

        const grid = document.querySelector('.grid')
        var resultDisplay = document.querySelector('#result')
        var cardsChosen = []
        var cardsChosenId = []
        var cardsWon = []

        //Creating game board
        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                var card = document.createElement('img')
                card.setAttribute('src', 'images/blank.png')
                card.setAttribute('data-id', i)
                card.addEventListener('click', flipCard)
                grid.appendChild(card)

            }
        }

        //Check for matches
        function checkForMatch() {
            var cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenId[0]
            const optionTwoId = cardsChosenId[1]
            if (cardsChosen[0] === cardsChosen[1]) {
                alert('You found a match')
                cards[optionOneId].setAttribute('src', 'images/white.png')
                cards[optionTwoId].setAttribute('src', 'images/white.png')
                cardsWon.push(cardsChosen)
            } else {
                cards[optionOneId].setAttribute('src', 'images/blank.png')
                cards[optionTwoId].setAttribute('src', 'images/blank.png')
                alert('Sorry, try again')
            }
            cardsChosen = []
            cardsChosenId = []
            resultDisplay.textContent = cardsWon.length
            if (cards.cardsWon.length === cardArray.length / 2) {
                resultDisplay.textContent = 'Congratulations!, you found them all!'
            }
        }

        //flip card
        function flipCard() {
            var cardId = this.getAttribute('data-id')
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }
        }
        createBoard()
    })
    //----------------------------------------------------------------------------------------------

//**************************Whak-a-Mole**************************************************** */
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //unasign the id of the random to hitPosition for us to use later

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is: ' + result)
    } else {

    }
}

let timerId = setInterval(countDown, 1000)

//-------------------------------------------------------------------------------------------