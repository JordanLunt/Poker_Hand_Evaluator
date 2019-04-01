//Add Code//

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

