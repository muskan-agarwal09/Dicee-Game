function myFunction() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;                         // 1 - 6
    var arrange = "dice" + randomNumber1 + ".png";                                  //dice1.png - dice6.png
    var proper_img1_name = "images/" + arrange;                                    //images/dice1.png - images/dice6.png
    document.querySelectorAll("img")[0].setAttribute("src", proper_img1_name);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;                         // 1 - 6
    var arrange2 = "dice" + randomNumber2 + ".png";                                 //dice1.png - dice6.png
    var proper_img2_name = "images/" + arrange2;                                   //images/dice1.png - images/dice6.png
    document.querySelectorAll("img")[1].setAttribute("src", proper_img2_name);

    if (randomNumber1 > randomNumber2)
        document.querySelector("h1").innerHTML = "Player 1 wins";
    else if (randomNumber2 > randomNumber1)
        document.querySelector("h1").innerHTML = "Player 2 wins";
    else
        document.querySelector("h1").innerHTML = "Match is Draw";
}

function myFunction2() {
    document.querySelector("h1").innerHTML = "Let's play Dicee Game";
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}