let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");

let question = document.querySelector(".question");
let gifts = document.querySelector(".gifts");

let gift1Button = document.getElementById("gift1Button");
let gift2Button = document.getElementById("gift2Button");
let gift3Button = document.getElementById("gift3Button");
let finalPage = document.querySelector(".finalPage");

let gift1 = document.querySelector(".gift1");
let gift2 = document.querySelector(".gift2");
let gift3 = document.querySelector(".gift3");

let noMessage = document.getElementById("noMessage");

let noSize = 1;
let yesSize = 1;

let messages = [
    "Are you serious? 👀",
    "Think again 😂",
    "Come onnn 🥺",
    "Pleaseee 😭❤️",
    "You don't have a choice 😂",
    "Okay... YES it is! 😂❤️"
];

let messageNumber = 0;
let giftsLeft = 3; 


noButton.addEventListener("click", function() {

    noSize = noSize - 0.2;
    yesSize = yesSize + 0.2;

    noButton.style.transform = "scale(" + noSize + ")";
    yesButton.style.transform = "scale(" + yesSize + ")";

    noMessage.innerHTML = messages[messageNumber];

    if (messageNumber < messages.length - 1) {
        messageNumber = messageNumber + 1;
    }

    if (noSize <= 0.2) {
        noButton.style.display = "none";
    }

});


yesButton.addEventListener("click", function() {

    question.style.display = "none";

    gifts.style.display = "block";

});


gift1Button.addEventListener("click", function() {

    gifts.style.display = "none";

    gift1.style.display = "block";
    gift1Button.style.display = "none";
    giftsLeft = giftsLeft - 1;

});


gift2Button.addEventListener("click", function() {

    gifts.style.display = "none";

    gift2.style.display = "block";
    gift2Button.style.display = "none";
    giftsLeft = giftsLeft - 1;

});


gift3Button.addEventListener("click", function() {

    gifts.style.display = "none";

    gift3.style.display = "block";
    gift3Button.style.display = "none";
    giftsLeft = giftsLeft - 1;

});
let backButtons = document.querySelectorAll(".backButton");

backButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        gift1.style.display = "none";
        gift2.style.display = "none";
        gift3.style.display = "none";

        if (giftsLeft > 0) {

            gifts.style.display = "block";

        } else {

            gifts.style.display = "none";
            finalPage.style.display = "block";

        }

    });

});