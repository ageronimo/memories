var cardIsFlipped = false;
var rotationQueue = [];
var picQueue = [];

function flipCard(idName, secondChild) {
  //flips card to back
  console.log(idName + secondChild);
	var showBack = document.getElementById(idName);
  showBack.style.transform = "rotateY(180deg)";
 
  //checks if two cards are flipped 
  console.log(rotationQueue);   
  if(rotationQueue.length < 2){
    rotationQueue.push(idName); 
    // picQueue.push() 
    //^ after seeing that pic ids are same, deletes divs, look up how to access id within div
  } 
  if(rotationQueue.length == 2){
    setTimeout(function(){
      document.getElementById(rotationQueue[0]).style.transform = "rotateY(0deg)";
      document.getElementById(rotationQueue[1]).style.transform = "rotateY(0deg)";
    }, 1000);
    setTimeout(function() {
      rotationQueue.splice(1, 1);
      rotationQueue.splice(0, 1);
    }, 1100);
  }


}