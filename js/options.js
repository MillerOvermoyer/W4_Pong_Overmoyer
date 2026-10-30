/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
const h2El = document.querySelector('h2')
h2El.addEventListener('click', function (e) {
    optionsButton = document.getElementsByClassName('sides');
    optionsButton[0].classList.toggle('hidden');
})
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
const fillOptions = document.getElementsByClassName('fill');
const strokeOptions = document.getElementsByClassName('stroke');

for (let i = 0; i < fillOptions.length; i++) {
    const updateFill = (fillEvent) => {
        const selectedFillColor = fillEvent.target.value; // Returns hex string (e.g., "#ff0000")
        player[i].fill = selectedFillColor;
        player[i].pad.fill = player[i].fill;

        fillEvent.target.nextElementSibling.textContent = selectedFillColor;
    };

    const updateStroke = (strokeEvent) => {
        const selectedStrokeColor = strokeEvent.target.value;
        player[i].stroke = selectedStrokeColor;
        player[i].pad.stroke = player[i].stroke;

        strokeEvent.target.nextElementSibling.textContent = selectedStrokeColor;
    }

    fillOptions[i].addEventListener('input', updateFill);
    strokeOptions[i].addEventListener('input', updateStroke);
}


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
const keyOptions = document.querySelectorAll('.u, .d, .s');

keyOptions.forEach((keyInput, index) => {
    keyInput.addEventListener('keydown', (keyEvent) => {
        keyEvent.preventDefault();

        let keyAction;
        if (keyInput.classList.contains('u')) {
            keyAction = 'u';
        } else if (keyInput.classList.contains('d')) {
            keyAction = 'd';
        } else if (keyInput.classList.contains('s')) {
            keyAction = 's';
        }

        let playerIndex;
        if (index < 3) {
            playerIndex = 0;
        } else {
            playerIndex = 1;
        }
        player[playerIndex].keys[keyAction] = keyEvent.key;
        keyInput.value = keyEvent.key;
        keyInput.nextElementSibling.textContent = keyEvent.key;
    });
});