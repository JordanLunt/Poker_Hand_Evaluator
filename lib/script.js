//Add Code//
var inputValue;
var cardResult;

document.getElementById("cardSubmitButton").addEventListener('click', clicked);
const cardResultLabel = document.getElementById('cardResult');
cardResultLabel.setAttribute('hidden', true);

function clicked() {
    inputValue = document.getElementById('cardsInput').value; //input value comes from input box
    var inputValueSpaceRemoved = inputValue.replace(/\s/g, '');// input Value Variable has white Space Removed
    var cardVal = inputValueSpaceRemoved.toUpperCase();// inputValueSpaceRemoved has lowercase Values converted to Uppercase
    var cardResult = cardVal.split(',');
    document.getElementById('cardResult').innerHTML = cardResult;
    sortCards(cardResult);

    const result = getResult(cardResult);

    switch (result) {
        case 'Royal Flush':
            document.getElementById('cardResult').innerHTML = labelRoyalFlush;
            console.log('You Have a Royal Flush!');
            break;
        case 'straight Flush':
            document.getElementById('cardResult').innerHTML = labelStraightFlush;
            console.log('You Have a Straight Flush!');
            break;
        case 'Four of a Kind':
            document.getElementById('cardResult').innerHTML = labelFourOfKind;
            console.log('You Have Four of a Kind!');
            break;
        case 'Full House':
            document.getElementById('cardResult').innerHTML = labelFullHouse;
            console.log('You Have a Full House!');
            break;
        case 'Flush':
            document.getElementById('cardResult').innerHTML = labelFlush;
            console.log('You Have a Flush!');
            break;
        case 'straight':
            document.getElementById('cardResult').innerHTML = labelStraight;
            console.log('You Have a Straight!');
            break;
        case 'Three of Kind':
            document.getElementById('cardResult').innerHTML = labelThreeOfKind;
            console.log('You Have Three of a Kind!');
            break;
        case 'Two Pair':
            document.getElementById('cardResult').innerHTML = labelTwoPair;
            console.log('You Have a Two Pair!');
            break;
        case 'One Pair':
            document.getElementById('cardResult').innerHTML = labelOnePair;
            console.log('You Have a Pair!');
            break;
        default:
            document.getElementById('cardResult').innerHTML = labelNoHand;
            console.log('You Have No Hand!');
            break;
    }
    cardResultLabel.removeAttribute('hidden', true);
};

function getResult(cards) {
    let result = checkRoyalFlush(cards);
    if (result.length > 0) {
        return result;
    };
    result = checkStraightFlushHighCards(cards);
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
    result = checkOnePair(cards);
    if (result.length > 0) {
        return result;
    };
}

function sortCards(cards) {
    cards.sort()
};

