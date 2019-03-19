//Add Code//
var input_value;
var cardResult;
var yourCurrentCardIs = "Your Current Card = ";
var yourPreviousCardIs = "Your Previous Card = ";

let labelRoyalFlush = "You Have a Royal Flush!";
let labelStraightFlush = "You Have a Straight Flush!";
let labelFourOfKind = " You Have Four of a Kind!";
let labelFullHouse = " You Have a Full House!";
let labelFlush = "You Have a Flush!";
let labelStraight = "You Have a Straight!";
let labelThreeOfKind = " You Have Three of a Kind!";
let labelTwoPair = "You Have a Two Pair!";
let labelOnePair = "You Have a Pair!";
let labelNoHand = "You Have No Hand!";

let royalFlushClubs = ["10C", "AC", "JC", "KC", "QC"]
let royalFlushDiamonds = ["10D", "AD", "JD", "KD", "QD"]
let royalFlushHearts = ["10H", "AH", "JH", "KH", "QH"]
let royalFlushSpades = ["10S", "AS", "JS", "KS", "QS"]

document.getElementById("cardSubmitButton").addEventListener('click', clicked);
const cardResultLabel = document.getElementById('cardResult');
cardResultLabel.setAttribute('hidden', true);

function clicked() {
    input_value = document.getElementById('cardsInput').value;
    var cardResult = input_value.split(',');
    document.getElementById('cardResult').innerHTML = cardResult;
    sortCards(cardResult);

    const result = getResult(cardResult);

    switch (result) {
        case 'Royal Flush':
            document.getElementById('cardResult').innerHTML = labelRoyalFlush;
            break;
        case 'straight Flush':
            document.getElementById('cardResult').innerHTML = labelStraightFlush;
            break;
        case 'Four of a Kind':
            document.getElementById('cardResult').innerHTML = labelFourOfKind;
            break;
        case 'Full House':
            document.getElementById('cardResult').innerHTML = labelFullHouse;
            break;
        case 'Flush':
            document.getElementById('cardResult').innerHTML = labelFlush;
            break;
        case 'straight':
            document.getElementById('cardResult').innerHTML = labelStraight;
            break;
        case 'Three of Kind':
            document.getElementById('cardResult').innerHTML = labelThreeOfKind;
            break;
        case 'Two Pair':
            document.getElementById('cardResult').innerHTML = labelTwoPair;
            break;
        case 'One Pair':
            document.getElementById('cardResult').innerHTML = labelOnePair;
            break;
        default:
            document.getElementById('cardResult').innerHTML = labelNoHand;
            break;
    }
    cardResultLabel.removeAttribute('hidden', true);
};

function getResult(cards) {
    let result = checkRoyalFlush(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkStraightFlush(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkFourOfKind(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkFullHouse(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkFlush(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkStraight(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkThreeKind(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkTwoPair(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkForTwoPair(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkOnePair(cards);
    if (result.length > 0) {
        return result;
    };

}

function sortCards(cards) {
    cards.sort()
    console.log(cards.length);
};

function checkRoyalFlush(cards) {
    const name = 'Royal Flush';
    if (JSON.stringify(cards) === JSON.stringify(royalFlushClubs)) {
        return name;
    }
    if (JSON.stringify(cards) === JSON.stringify(royalFlushDiamonds)) {
        return name;
    }
    if (JSON.stringify(cards) === JSON.stringify(royalFlushHearts)) {
        return name;
    }
    if (JSON.stringify(cards) === JSON.stringify(royalFlushSpades)) {
        return name;
    }
    else {
        return '';
    }
};

function checkStraightFlush(cards) {
    let straightFlushResult = true;
    const name = 'straight Flush';
    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {

        let myCard = cards[cardCheck].charAt(0);
        let mySuit = cards[cardCheck].charAt(1);

        if (cardCheck !== 0) {

            let prevCard = cards[cardCheck - 1].charAt(0);
            let prevSuit = cards[cardCheck - 1].charAt(1);

            if (myCard - 1 == prevCard) {

                console.log(yourCurrentCardIs + myCard);
                console.log(yourPreviousCardIs + prevCard);
                if (mySuit === prevSuit) {
                    console.log(myCard)
                }
                else {
                    return '';
                }
            }
            else {
                return '';
            }
        }
    }
    if (straightFlushResult) {
        return name;// labelStraight = "You have a Straght Flush";
    }
};

function checkFourOfKind(cards) {
    const name = 'Four of a Kind';
    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {

        let myCard = cards[cardCheck].charAt(0);

        if (cardCheck !== 0) {

            if (cards[0].charAt(0) === cards[1].charAt(0)) {

                if (myCard === cards[0].charAt(0)) {

                    if (cardCheck === 3) {
                        return name;
                    }

                }
                else {
                    
                        return '';
                    
                }
            }
            if (cards[0].charAt(0) !== cards[1].charAt(0)) {

                if (myCard === cards[1].charAt(0)) {

                    if (cardCheck === 4) {

                        return name;
                    }
                }
                else {
                    return '';
                    
                }
            }

        }
    }
};

function checkFullHouse(cards) {
    const name = 'Full House';
    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {

        let myCard = cards[cardCheck].charAt(0);

        if (cardCheck !== 0) {

            if (cards[0].charAt(0) !== cards[2].charAt(0)) {

                let prevCard = cards[cardCheck - 1].charAt(0)

                console.log("pair comes first")

                if (myCard == prevCard) {

                    if (cards[2].charAt(0) == cards[4].charAt(0)) {

                        return name;
                    }
                    else {

                    
                        return '';
                    
                    }

                }
                
            }

            if (cards[0].charAt(0) === cards[2].charAt(0)) {

                console.log("3 kind comes first")

                if (cardCheck >= 3) {

                    let prevCard = cards[cardCheck - 1].charAt(0)

                    if (myCard === prevCard) {

                        return name;
                    }
                   
                    else {
                        if(cardCheck === 4){
                            return '';
                        }

                    }
                }
               
            }
            else {
                
                    return '';
                }
                

        }
    }
};

function checkFlush(cards) {
    const name = 'Flush';
    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {

        let myCard = cards[cardCheck].charAt(1);

        if (cardCheck !== 0) {

            let prevCard = cards[cardCheck - 1].charAt(1);

            if (myCard === prevCard) {
                console.log(yourCurrentCardIs + myCard);
                console.log(yourPreviousCardIs + prevCard);
                if(cardCheck===4 ){
                    return name;
                }
            }
            else {
                if(myCard !== prevCard){
                    return '';
                }
                
            }
        }
    }

};

function checkStraight(cards) {
    const name = 'straight';
    let straightResult = true;

    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {
        let myCard = cards[cardCheck].charAt(0);
        console.log(cards);

        if (cardCheck !== 0) {
            let prevCard = cards[cardCheck - 1].charAt(0);

            if (myCard - 1 == prevCard) {
                console.log(yourCurrentCardIs + myCard);
                console.log(yourPreviousCardIs + prevCard);
            }
            else {
                return '';
            }
        }
    }
    if (straightResult) {
        return name;// labelStraight = "You have a Straght Flush";
    }
};

function checkThreeKind(cards) {
    const name = 'Three of Kind';
    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {
        let myCard = cards[cardCheck].charAt(0);

        if (cardCheck !== 0) {

            if (cards[0].charAt(0) === cards[2].charAt(0)) /* Checks Cards [0,1,2]*/ {

                if (myCard === cards[0].charAt(0)) {

                    if (cardCheck === 2) {

                        return name;
                    }
                }
                else {
                    if (cardCheck === 4) 
                        return '';
                    
                }
            }
            if (cards[1].charAt(0) === cards[3].charAt(0)) /* Checks Cards [1,2,3]*/  {
                if (myCard === cards[1].charAt(0)) {
                    if (cardCheck === 3) {
                        return name;
                    }
                }
                else {
                    if (cardCheck === 4) {
                        return '';
                    }
                }
            }
            if (cards[2].charAt(0) === cards[4].charAt(0)) /* Checks Cards [2,3,4]*/ {
                if (myCard === cards[2].charAt(0)) {
                    if (cardCheck === 4) {
                        return name;
                    }
                }
                else {
                    if (cardCheck === 4) {
                        return '';
                    }
                }
            }

                    else {
                    if (cardCheck === 4) {
                        return '';
                    }
                }
        }
    }
};

function checkTwoPair(cards) {
    const name = 'Two Pair';
    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {
        var firstpair;
        let myCard = cards[cardCheck].charAt(0);
        let mySecondCard = cards[cardCheck].charAt(0);
        console.log(yourCurrentCardIs + myCard);

        if (cardCheck !== 0) {

            let prevCard = cards[cardCheck - 1].charAt(0);
            if (myCard === prevCard) {
                firstpair = true;

                if (firstpair = true) {

                    if (myCard === prevCard) {

                        console.log(myCard);
                        return name;
                    }
                    else {
                        if (cardCheck === 4) {
                            return '';
                        }
                    }
                }


                else {
                    if (cardCheck === 4) {
                        return '';
                    }
                }
            }
        }
    }
};

function checkOnePair(cards) {
    const name = 'One Pair';
    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {
        let myCard = cards[cardCheck].charAt(0);
        console.log(yourCurrentCardIs + myCard);
        if (cardCheck !== 0) {
            let prevCard = cards[cardCheck - 1].charAt(0);
            if (myCard === prevCard) {

                return name;

            }
            else {
                if (cardCheck >= 4) {
                    return 'No Hand'; // labelNoHand = "You Have No Hand";
                }
            }
        }
    }
};