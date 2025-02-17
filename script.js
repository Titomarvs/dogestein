const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')



suffleImage()
clicking()
function suffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}

function clicking(){

    for(let i =0; i<card.length; i++){

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}





function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')


    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}

function match(cardOne, cardTwo) {
    if (cardOne.dataset.index == cardTwo.dataset.index) {
        score.innerHTML = parseInt(score.innerHTML) + 1;

        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        cardOne.classList.add('match');
        cardTwo.classList.add('match');

        // Check if all cards are matched
        setTimeout(() => {
            if (document.querySelectorAll('.match').length === card.length) {
                showPopup();
            }
        }, 500);
    } else {
        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');
        }, 1000);
    }
}

function showPopup() {
    let popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <div class="popup-content">
            <p style="color:black;" >Congratulations! You finished the game.</p>
            <button onclick="restartGame()">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
}

function restartGame() {
    // Remove pop-up
    document.querySelector('.popup').remove();

    // Reset all cards
    document.querySelectorAll('.cell').forEach(c => {
        c.classList.remove('match', 'flip');
    });

    // Reset score
    score.innerHTML = '0';

    // Shuffle images again
    suffleImage();
}

function restartGame() {
    location.reload(); // Reloads the page
}
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".description2, .box");

    function scrollAppear() {
        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (position < screenHeight - 300) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", scrollAppear);
    scrollAppear(); // Run on page load to check initial visibility
});
