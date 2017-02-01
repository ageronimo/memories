var cardIsFlipped = false;
var rotationStatus = [];
var i;

function flipCard(idName) {
  //flips card to back
	var showBack = document.getElementById(idName);
  showBack.style.transform = "rotateY(180deg)";
 
  //checks if two cards are flipped 
  if (rotationStatus.length < 2) {
    rotationStatus.push(idName);    
  }

  if (rotationStatus.length == 2) {
  document.getElementById(rotationStatus[0]).style.transform = "rotateY(0deg)";
  document.getElementById(rotationStatus[1]).style.transform = "rotateY(0deg)";
  }

    // count--;
  
//   for (i = 0; i < rotationStatus.length; i++) {
//     if (rotationStatus[i] == "unflipped"){
//       showBack.style.transform = "rotateY(180deg)";
//       console.log("unflipped");
//     } else {
//       showBack.style.transform = "rotateY(0deg)";
//       console.log("flipped");
//     }
//   }
}