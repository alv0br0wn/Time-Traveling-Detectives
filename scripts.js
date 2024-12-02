const timePeriods = [
    { name: "Ancient Egypt", clue: "A hieroglyphic tablet." },
    { name: "Medieval Europe", clue: "A knight's shield." },
    { name: "Victorian London", clue: "A mysterious letter." },
    { name: "Roaring Twenties", clue: "A jazz record." },
    { name: "Future City", clue: "A holographic device." }
];

let currentPeriodIndex = 0;
let inventory = [];

// Add a score variable if you are implementing the score feature
let score = 0;

const timePeriodElement = document.getElementById("time-period");
const clueElement = document.getElementById("clue");
const inventoryElement = document.getElementById("inventory");
const nextButton = document.getElementById("next-button");

function updateGame() {
    if (currentPeriodIndex < timePeriods.length) {
        const currentPeriod = timePeriods[currentPeriodIndex];
        timePeriodElement.textContent = `You are in: ${currentPeriod.name}`;
        clueElement.textContent = `Clue: ${currentPeriod.clue}`;
    } else {
        timePeriodElement.textContent = "You've collected all the clues!";
        clueElement.textContent = "";
        nextButton.disabled = true;
    }
}

nextButton.addEventListener("click", () => {
    if (currentPeriodIndex < timePeriods.length) {
        inventory.push(timePeriods[currentPeriodIndex].clue);
        currentPeriodIndex++;
        updateGame();
        updateInventory();
    }
});

function updateInventory() {
    inventoryElement.innerHTML = "<h3>Inventory:</h3>";
    inventory.forEach(clue => {
        inventoryElement.innerHTML += `<p>${clue}</p>`;
    });
}
// Reset game functionality

resetButton.addEventListener("click", () => {
    currentPeriodIndex = 0; // Reset the index to start over
    inventory = []; // Clear the inventory
    // If implementing score, reset it here
    // score = 0; 
    updateGame(); // Update the game display
    updateInventory(); // Update the inventory display
    nextButton.disabled = false; // Re-enable the next button
});

// Initialize the game
updateGame();