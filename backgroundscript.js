var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

body.style.background =	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
css.textContent = body.style.background;

function changecolor(){
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background;
}

color1.addEventListener("input", changecolor);

color2.addEventListener("input", changecolor);

button.addEventListener("click", function(){
	var node1 = document.createElement("h2");
	node1.appendChild(document.createTextNode("younghun"));
	var node2 = document.createElement("h2");
	node2.textContent = Math.random() * 255;
})

