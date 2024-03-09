document.addEventListener("DOMContentLoaded", () => {
    displayIcon();
    initializeButtons();
    populateCurrency();
});

function displayIcon() {
    let physicalCompleted = localStorage.getItem("physicalCompleted");
    let mentalCompleted = localStorage.getItem("mentalCompleted");
    let checkmarkIcon = document.getElementById("checkIcon");
    let alertIcon = document.getElementById("alertIcon");

    if (physicalCompleted === "true" && mentalCompleted === "true") {
        checkmarkIcon.style.display = "block";
        alertIcon.style.display = "none";
    } else if (physicalCompleted === "false" && mentalCompleted === "false") {
        document.getElementById("completePhysicalButton").disabled = false;
        document.getElementById("completeMentalButton").disabled = false;
        document.getElementById("physicalDaily").checked = false;
        document.getElementById("mentalDaily").checked = false;
        alertIcon.style.color = "black";
        checkmarkIcon.style.display = "none";
        alertIcon.style.display = "block";
    } else {
        checkmarkIcon.style.display = "none";
        alertIcon.style.display = "block";
        alertIcon.style.color = "yellow";
    }
}

function initializeButtons() {
    let dailyButton = document.getElementById("dailyBox");

    dailyButton.addEventListener("click", () => {
        document.getElementById("dailyScreen").showModal();
        setupDailyScreen();
    });
}

function setupDailyScreen() {
    let dailyScreen = document.getElementById("dailyScreen");
    let closeButton = document.getElementById("closeButton");
    let physicalDaily = document.getElementById("physicalDaily");
    let mentalDaily = document.getElementById("mentalDaily");
    let completePhysicalButton = document.getElementById("completePhysicalButton");
    let completeMentalButton = document.getElementById("completeMentalButton");

    closeButton.addEventListener("click", () => {
        dailyScreen.close();
    });

    completePhysicalButton.addEventListener("click", () => {
        physicalDaily.checked = true;
        completePhysicalButton.disabled = true;
        localStorage.setItem("physicalCompleted", "true");
        displayIcon();
    });

    completeMentalButton.addEventListener("click", () => {
        mentalDaily.checked = true;
        completeMentalButton.disabled = true;
        localStorage.setItem("mentalCompleted", "true");
        displayIcon();
    });
}

// timer for daily reset
setInterval(() => { 
    localStorage.setItem("physicalCompleted", "false");
    localStorage.setItem("mentalCompleted", "false");
    displayIcon();
}, 8000);