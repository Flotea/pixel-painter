function changeColorOnClick(idName){
	alert(idName);
	var originalElementColor = document.getElementById('selectedColorName'); 
	document.getElementById(idName).style.backgroundcolor = originalElementColor;

}
function getBackgroundColor(idName){
	var element = document .getElementById(idName);
	var style = window.getComputedStyle(element,null).getPropertyValue("background-color");
	document.getElementById('selectedColorName').style.backgroundcolor=style;
	

}
