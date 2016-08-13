window.onload = function() {
	/*Making the dropdown come under the menu, getBoundingClientRect().left is so that the dropdown aligns,
	 200 is random so that it comes approxiamately to center */
	document.getElementById('ddM1').style.paddingLeft = document.getElementById('m1').getBoundingClientRect().left - 200 + "px"; 
	document.getElementById('ddM3').style.paddingLeft = document.getElementById('m3').getBoundingClientRect().left - 200 + "px"; 
	/* For Menu 3 */
}