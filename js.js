
var TARGET = document.querySelector("#target");
var CARD = document.querySelector(".card");
var BACKCARD = document.querySelector(".backcard");
var TEMP = document.getElementById("temp");


class game{

    constructor(deck){
        // this.players = players;
        this.deck = deck;

        this.play();
    }

    play = function(){

        var buttonshuffle = document.getElementById('buttonshuffle');
        buttonshuffle.addEventListener('click', () => {

            var shuffledcards = this.deck.shuffle(this.deck);
        });

        var buttondeal = document.getElementById('buttondeal');
        buttondeal.addEventListener('click', () => {
            this.deck.deal();
        });

        //this.deck.shuffle();

        // for(var i = 0; i < this.players.length; i++)
        //     this.deck.deal(this.players[i]);

        // document.body.addEventListener("click", this.notover.bind(this));

        // while(this.notover()) {
        //     alert("yayyy!")
        // }
        // alert("yay!")

    }



}

class player{
    constructor(name){
        this.name = name;
        this.hand = [];
        this.ingame;
    }

    joingame(game){
        this.ingame = game;
    }

    illustrate(){

    }
}

class deck{

    constructor(num){
        this.cardcount = num;
        this.cards = [];
        this.showdeck();
        this.make();
    }
    
    // deal(player){
    //     alert(player.name);
    // }

    make(){
        for(var i = 0; i < this.cardcount; i++){
            var c = new card(i);
            this.cards.push(c);
        };

        return this.cards;
    }   
    
    // makedeck = function(howmany){
    //     var deck = [];

    //     for(var i = 0; i < howmany; i++){
    //         var card = new card(1);
    //         deck.push(card);
    //     }

    //     return deck;
    // }

    showdeck = function() {
        var deckimage = document.getElementById('imgdeck');
        deckimage.setAttribute('src', 'public/img/deckofcards.png');
    }

    shuffle = function(deck){
                alert(deck);

        var deckimage = document.getElementById('imgdeck');
        deckimage.setAttribute('src', 'public/img/shuffle.gif');

        // for(var i=0; i < deck.length; i++){
        //     var r = Math.floor(Math.random() * deck.length);
        //     var card1 = deck[i];
        //     var card2 = deck[rnd];
        //     deck[i] = card2;
        //     deck[rnd] = card1;
        // }
        for(let i = deck.length; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));

            [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
        };
        
        setTimeout(this.showdeck, 2500);

        return deck;
    }

    deal = function(cards){
        var card1 = document.getElementById('playercard1');
        card1.setAttribute('src', 'public/img/backofcard.png');
        // card1.style.backgroundPositionX = "1px 100px";
        // card1.style.backgroundPositionY = "100px 200px";

        // var backcardCopy = CARD.cloneNode(true);
        // cardCopy.innerHTML = "silver" + this.id;
        // cardCopy.style.backgroundPositionX = -(this.id) + "00%";
        // cardCopy.style.backgroundPositionY = Math.floor(this.id/13) + "00%";


        // random cards
    }

}

class card{

    constructor(num){
        this.id = num;
        this.suit = Math.floor(num/13);
        this.val = num % 13 + 1;
        //this.pic = "mine.svg";
    }

    draw(){
        var cardCopy = CARD.cloneNode(true);
        cardCopy.innerHTML = "silver" + this.id;
        cardCopy.style.backgroundPositionX = -(this.id) + "00%";
        cardCopy.style.backgroundPositionY = Math.floor(this.id/13) + "00%";

        return cardCopy
    }
}


    // var play
    // var button = document.getElementById('buttonplayer1');
    // var image = document.getElementById('image');

    // button.addEventListener('click', () => {
    //   image.src = image.src.includes('image1.jpg') ? 'image2.jpg' : 'image1.jpg';

    // });



// var dave = new player("dave");
// var bob = new player("bob");
var mydeck = new deck(52);
new game(mydeck)