function randomizer(){
  var d1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").src = "images/dice" + d1 + ".png";                    //mesma coisa que a linha 5, só escrito de um jeito diferente
  var d2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").setAttribute("src", "images/dice" + d2 + ".png");
  if (d1 > d2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (d1 < d2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
