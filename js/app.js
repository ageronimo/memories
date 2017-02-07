var cardNum = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
var cardPics = [1,1,2,2,3,3,4,4];
var rotationQueue = [];
var picQueue = [];
var i;

function cardRandomizer() {
  //combine strings
  for (i = 0; i < 8; i++){	
		console.log(setImg);
		var randomNum = Math.floor(Math.random()*(cardNum.length));
		var setImg = document.getElementsByClassName("back").style.backgroundImage;
		if (randomNum === 2 || randomNum === 3) {
			setImg = "url('../assets/pic"+cardPics[randomNum]+".jpg')";
		} else {
			setImg = "url('../assets/pic"+cardPics[randomNum]+".jpeg')";
		}
		cardPics.splice(randomNum, 1);
	}
}

function flipCard(idName) {
  //flips card to back
	var showBack = document.getElementById(idName);
  showBack.style.transform = "rotateY(180deg)";
 
  //checks if two cards are flipped   
  if(rotationQueue.length < 2){
    rotationQueue.push(idName); 
    // picQueue.push() 
    //^ after seeing that pic ids are sam   e, deletes divs, look up how to access id within div
  } 

  if(rotationQueue.length == 2){
    setTimeout(function(){
      document.getElementById(rotationQueue[0]).style.transform = "rotateY(0deg)";
      document.getElementById(rotationQueue[1]).style.transform = "rotateY(0deg)";
    }, 1000);
    setTimeout(function() {
      rotationQueue.splice(0, 2);
    }, 1050);
  }


}