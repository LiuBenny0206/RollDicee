



function rollDicee() {
    var randomNum1 = Math.floor(Math.random() * 6 + 1);
    var randomPic1 = "dice" + randomNum1 + ".png";
    var randomPic1Source = "images/" + randomPic1;

    document.querySelectorAll("img")[0].setAttribute("src", randomPic1Source);

    var randomNum2 = Math.floor(Math.random() * 6 + 1);
    var randomPic2 = "dice" + randomNum2 + ".png";
    var randomPic2Source = "images/" + randomPic2;

    document.querySelectorAll("img")[1].setAttribute("src", randomPic2Source);

    var changeTitle = document.querySelector("h1");
    if (randomNum1 > randomNum2) {
        changeTitle.innerText = "Player 1 Wins!";
    } else if (randomNum1 < randomNum2) {
        changeTitle.innerText = "Player 2 Wins!";
    } else {
        changeTitle.innerText = "Draw!";
    }
}