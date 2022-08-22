// selected player add on array

let selectedPlayer = [];

// player select function
function addToSelectList(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerAbelity = element.parentNode.children[1].innerText;
    // ready a player object 
    const selectPlayer = {
        playerName: playerName,
        playerAbelity: playerAbelity,
    }
    // push select player
    if (selectedPlayer.length < 5) {
        selectedPlayer.push(selectPlayer);
        element.classList.add("disabled");
    }
    else {
        alert('Best Five Player Selected')
    }
    // call player displas function
    playerNameDisplay();
}

// player display section

function playerNameDisplay() {
    let selectedPlayerName = [];

    const totalSelectedPlayer = document.getElementById("total-selected-player-count");
    const playerContainer = document.getElementById("seleted-player");

    totalSelectedPlayer.innerText = selectedPlayer.length;
    playerContainer.textContent = '';

    for (let i = 0; i < selectedPlayer.length; i++) {

        selectedPlayerName = selectedPlayer[i].playerName;

        const ol = document.createElement('li');
        ol.innerHTML = `
            <p>${selectedPlayerName}</p>
            `;
        playerContainer.appendChild(ol);
    }
}

// get input value form input filed 
// this is a common function
function getValue(element, text) {
    const elementValue = document.getElementById(element).value;
    if (elementValue > 0) {
        const value = parseInt(elementValue);
        return value;
    }

    else {
        alert('Please Enter Cost For ' + text);
        return 0;
    }


}

//set value function
//this is also a common function
function setValue(element, value) {
    element = document.getElementById(element);
    element.innerText = value;
}

// calculate cost of selectedPlayer
document.getElementById('calculat-btn').addEventListener('click', function () {
    const numberOfPlayer = selectedPlayer.length;
    const perPlayerCost = getValue('player-cost-filed', 'Player');

    const costForPlayer = numberOfPlayer * perPlayerCost;
    if (numberOfPlayer > 0) {
        setValue('player-cost', costForPlayer);
    }
    else {
        alert('Please Select A Player');
    }
});

// calculat total cost for player
document.getElementById('total-calculat').addEventListener('click', function () {
    const playerCostString = document.getElementById('player-cost').innerText;
    const playerCost = parseInt(playerCostString);

    const manegerCost = getValue('maneger-cost-filed', 'Manager');
    const coachCost = getValue('coach-cost-filed', 'Coach');

    const totalExpence = playerCost + manegerCost + coachCost;
    setValue('total-cost', totalExpence);
})