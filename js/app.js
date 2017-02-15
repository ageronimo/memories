var cardNum = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
var cardPics = [1,1,2,2,3,3,4,4];
var rotationQueue = [];
var picQueue = [];
var i;
var scored = [];
var x = 0; //for scoreboard
// var idMatch = document.getElementsByClassName("back")[i].id;

function cardRandomizer() {
  //combine strings
  console.log("hello");
  for (i = 0; i < 8; i++){  
		var randomNum = Math.floor(Math.random()*(cardPics.length));
		var setImg = document.getElementsByClassName("back")[i];
		if (cardPics[randomNum] === 2 || cardPics[randomNum] === 3) {
			setImg.style.backgroundImage = "url('./assets/pic"+cardPics[randomNum]+".jpg')";
      setImg.id = ""+cardPics[randomNum]+"";
		} else {
			setImg.style.backgroundImage = "url('./assets/pic"+cardPics[randomNum]+".jpeg')";
      setImg.id = ""+cardPics[randomNum]+"";
		}
		cardPics.splice(randomNum, 1);
	}
  document.getElementById("score").innerHTML = "Score: "+x;
  document.getElementById("timer").innerHTML = "Time: currently unavailable";
}
//initializes above function
cardRandomizer();

//when a card is flipped:
function flipCard(idName) {
  //score board

  //flips card to back
  var showBack = document.getElementById(idName);
  showBack.style.transform = "rotateY(180deg)";
 

  //checks if two cards are flipped   
  var idMatch = showBack.getElementsByClassName("back")[0].id;
  if(rotationQueue.length < 2){
    rotationQueue.push(idName); 
    picQueue.push(idMatch); 
    //^ after seeing that pic ids are sam   e, deletes divs, look up how to access id within div
  } 
  console.log(x);
  if (rotationQueue.length == 2) {
    if (picQueue[0] == picQueue[1]) {
      setTimeout (function() {
          document.getElementById(rotationQueue[0]).style.opacity = "0";
          document.getElementById(rotationQueue[1]).style.opacity = "0";
          
          x = x+1; //inc score
        }, 700);
    } 
    
    setTimeout(function(){
      document.getElementById(rotationQueue[0]).style.transform = "rotateY(0deg)";
      document.getElementById(rotationQueue[1]).style.transform = "rotateY(0deg)";
      document.getElementById("score").innerHTML = "Score: "+x;
    }, 1000);
    
    setTimeout(function() {
        rotationQueue.splice(0, 2);
        picQueue.splice(0, 2);
        if (x == 4) {
          alert("You won! :D");
        }
      }, 1050);
    }


}