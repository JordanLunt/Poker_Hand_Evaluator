//Add Code//

function checkRoyalFlush(cards) {
    const name = 'Royal Flush';
    if (JSON.stringify(cards) === JSON.stringify(royalFlushClubs)|JSON.stringify(cards) === JSON.stringify(royalFlushDiamonds)|JSON.stringify(cards) === JSON.stringify(royalFlushHearts)|JSON.stringify(cards) === JSON.stringify(royalFlushSpades)) {
        return name;
    }
    else {
        return '';
    }
};

function checkStraightFlushHighCards(cards) {
    const name = 'straight Flush'
    if (JSON.stringify(cards) === JSON.stringify(straightFlushClubsKing)|JSON.stringify(cards) === JSON.stringify(straightFlushClubsQueen)|JSON.stringify(cards) === JSON.stringify(straightFlushClubsJack)|JSON.stringify(cards) === JSON.stringify(straightFlushClubsTen)) {
        return name; // all Clubs
    }
    if (JSON.stringify(cards) === JSON.stringify(straightFlushDiamondsKing)|JSON.stringify(cards) === JSON.stringify(straightFlushDiamondsQueen)|JSON.stringify(cards) === JSON.stringify(straightFlushDiamondsJack) | JSON.stringify(cards) === JSON.stringify(straightFlushDiamondsTen)) {
        return name;// all Diamonds
    }
    if (JSON.stringify(cards) === JSON.stringify(straightFlushHeartsKing)|JSON.stringify(cards) === JSON.stringify(straightFlushHeartsQueen)|JSON.stringify(cards) === JSON.stringify(straightFlushHeartsJack)|JSON.stringify(cards) === JSON.stringify(straightFlushHeartsTen)) {
        return name;// all Hearts
    }
    if (JSON.stringify(cards) === JSON.stringify(straightFlushSpadesKing)|JSON.stringify(cards) === JSON.stringify(straightFlushSpadesQueen)|JSON.stringify(cards) === JSON.stringify(straightFlushSpadesJack)|JSON.stringify(cards) === JSON.stringify(straightFlushSpadesTen)) {
        return name;// all Spades
    }
    else {
        return '';
    }

}

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

                if (mySuit === prevSuit) {

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

                if (cardCheck >= 3) {

                    let prevCard = cards[cardCheck - 1].charAt(0)

                    if (myCard === prevCard) {

                        return name;
                    }

                    else {
                        if (cardCheck === 4) {
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
        var myCard = cards[cardCheck];

        console.log(myCard.length)
        if (cardCheck !== 0) {
            var prevCard = cards[cardCheck - 1];
            console.log(myCard.length);
            console.log(prevCard.length);

            if (myCard.charAt(1) === prevCard.charAt(1)) {

                if (cardCheck === 4) {
                    return name;
                }
            }
            else {

                if (myCard !== prevCard) {
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

        if (cardCheck !== 0) {
            let prevCard = cards[cardCheck - 1].charAt(0);

            if (myCard - 1 == prevCard) {

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
            if (cards[1].charAt(0) === cards[3].charAt(0)) /* Checks Cards [1,2,3]*/ {
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

        if (cardCheck !== 0) {

            if (cards[0].charAt(0) === cards[1].charAt(0)) {
                if (cards[2].charAt(0) === cards[3].charAt(0)) {
                    return name;
                }
                else {

                    return '';

                }

            }
            if (cards[1].charAt(0) === cards[2].charAt(0)) {
                if (cards[3].charAt(0) === cards[4].charAt(0)) {

                    return name;
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

};

function checkOnePair(cards) {
    const name = 'One Pair';
    for (let cardCheck = 0; cardCheck <= 4; cardCheck++) {
        let myCard = cards[cardCheck].charAt(0);

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

