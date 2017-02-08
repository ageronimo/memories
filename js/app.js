var cardNum = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
var cardPics = [1,1,2,2,3,3,4,4];
var rotationQueue = [];
var picQueue = [];
var i;
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
}
cardRandomizer();

function flipCard(idName) {
  //flips card to back
	var showBack = document.getElementById(idName);
  showBack.style.transform = "rotateY(180deg)";
 
  var idMatch = showBack.getElementsByClassName("back")[0].id;
  console.log(rotationQueue);
  //checks if two cards are flipped   
  if(rotationQueue.length < 2){
    rotationQueue.push(idName); 
    picQueue.push(idMatch); 
    //^ after seeing that pic ids are sam   e, deletes divs, look up how to access id within div
  } 
  if(rotationQueue.length == 2){
    setTimeout(function(){
      document.getElementById(rotationQueue[0]).style.transform = "rotateY(0deg)";
      document.getElementById(rotationQueue[1]).style.transform = "rotateY(0deg)";
    }, 1000);
    // if (idMatch[0] !== idMatch[1]) {
    //   showBack.parentNode.removeChild(showBack); 
    // }
    setTimeout(function() {
      rotationQueue.splice(0, 2);
    }, 1050);

  }



}