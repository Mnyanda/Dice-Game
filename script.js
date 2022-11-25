var p1Score = 0;
var p2Score = 0;
var total = 0;

var dice = {
  1: img1.src,
  2: img2.src,
  3: img3.src,
  4: img4.src,
  5: img5.src,
  6: img6.src
};

function rollDice() {
  var numP1 = Math.floor(Math.random() * 6) + 1;
  var numP2 = Math.floor(Math.random() * 6) + 1;

  imgDiceP1.src = dice[numP1];
  imgDiceP2.src = dice[numP2];
  total++;

  if (numP1 > numP2) {
    lblMsg.innerHTML = "Player 1 is the winner!";
    p1Score++;
  } else if (numP1 < numP2) {
    lblMsg.innerHTML = "Player 2 is the winner!";
    p2Score++;
  } else {
    lblMsg.innerHTML = "That's a draw! Please roll again";
  }

  lblP1.innerHTML = "Player 1 Scrore: " + p1Score;
  lblP2.innerHTML = "Player 2 Scrore: " + p2Score;
  lblTot.innerHTML = "Total no. of Rolls: " + total;
  
  document.getElementsByTagName("span")[0].style.display = "inline";
  document.getElementsByTagName("span")[1].style.display = "inline";
  
  imgRstrt.style.display = "inline";
}

function restart() {
  p1Score = 0;
  p2Score = 0;
  total = 0;

  lblMsg.innerHTML = "";
  lblP1.innerHTML = "";
  lblP2.innerHTML = "";
  lblTot.innerHTML = "";

  imgDiceP1.src = "";
  imgDiceP2.src = "";
  
  document.getElementsByTagName("span")[0].style.display = "none";
  document.getElementsByTagName("span")[1].style.display = "none";

  imgRstrt.style.display = "none";
}
// Calculate the average:
var  Age=  [23, 46, 33, 28, 53, 18, 30, 60 ]; // define the array 
var sum = 0; // initialize the sum
var i = 0;

function calculateAverage(){
	if (Age.length > 0){
		for (i = 0; i < Age.length; i++){ // loop (Age.length) times
			sum += Age[i];
		}
		document.write("The existing list is: " + Age + "<br>"
			+ "The average Age is: " + sum/Age.length);
	} 
	else
		document.write("Empty Array");
}

