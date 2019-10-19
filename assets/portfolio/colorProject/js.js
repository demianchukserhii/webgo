var nums = 6;
var colors = generateRandomColors (nums);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector ("#reset");
var easy = document.querySelector ("#easy");
var hard = document.querySelector ("#hard");
var but = document.querySelector ("#stripe");


easy.addEventListener ("click", function () {
	easy.classList.add ("selected");
	hard.classList.remove ("selected");
	nums = 3;
	colors = generateRandomColors (nums);
	pickedColor = pickColor ();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i <squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "blue";
	
	
})

hard.addEventListener ("click", function () {
	hard.classList.add ("selected");
	easy.classList.remove ("selected");
	nums = 6;
	colors = generateRandomColors (nums);
	pickedColor = pickColor ();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i <squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}
	h1.style.backgroundColor = "blue";
	but.style.color = "white";
})

reset.addEventListener ("click", function () {
	colors = generateRandomColors (nums);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	reset.textContent = "New Colors"
	h1.style.backgroundColor = "blue";
	messageDisplay.textContent = "";
})
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		console.log (clickedColor, pickedColor);
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
			changeColor (clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play again?"
		} else {
            this.style.backgroundColor = "#5c5a5a";
            messageDisplay.textContent = "Try Again!";
		}
		
		
	});
}

function changeColor (color) {
	for (var i = 0; i <squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor () {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors (num){
	var arr = [];
	for ( var i =0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor () {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	"rgb (r, g, b)"
	return "rgb(" + r +", " + g +", " + b +")";
}

