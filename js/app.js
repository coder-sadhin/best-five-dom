


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
    selectedPlayer.push(selectPlayer);

    if (selectedPlayer.length <= 5) {
        element.classList.add("disabled");
    }
    // call player displas function
    playerNameDisplay();
}

// player display section

function playerNameDisplay() {
    let selectedPlayerName = [];

    const totalSelectedPlayer = document.getElementById("total-selected-player-count");
    const playerContainer = document.getElementById("seleted-player");

    if (selectedPlayer.length <= 5) {
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
    else {
        alert('Best Five Player Selected');
    }


}

