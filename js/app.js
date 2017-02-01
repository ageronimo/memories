var cardIsFlipped = false;

function flipCard(idName) {
	//flips card to back
	var showBack = document.getElementById(idName);
	showBack.style.transform = "rotateY(180deg)";

	if (showBack.style.transform === "rotateY(180deg)") {
		cardIsFlipped = true;
		console.log("it's flipped!");
	} 
	if (cardIsFlipped === true) {
		
	}
}