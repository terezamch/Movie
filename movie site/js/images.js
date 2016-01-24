
var menuItem = document.getElementsByClassName("menuItem");
for (var i = 0; i < menuItem.length; i++){
	menuItem[i].addEventListener("mouseover", mouseOver);
	menuItem[i].addEventListener("mouseout", mouseOut);
}
	
function mouseOver() {
	this.style.background = "#ff3232";
}
function mouseOut() {
	this.style.background = "transparent";
}


					

