//step 1: generate a random number
function getRandomNumber() {
    var RandomNumber = Math.floor(Math.random() * 6) + 1;
    return RandomNumber
}




//step 2: associate that number with an image
function GetDiceClass(number) {
    return 'dice_' + number;
}


//step 3: binding the dice rolling to a button click 
$(document).ready(function(){
    var $button = $('#roll-dice');
    var $dice = $('#dice')

    $button.click(function){
        var number = getRandomNumber();
        var diceClass = GetDiceClass(number);

        $dice.removeClass();
        $dice.addClass(diceClass);
    }
});
