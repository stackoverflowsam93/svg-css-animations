window.onload = function() {	

 	var x = document.getElementsByClassName("NavBar");
 	for(count = 0; count < x.length; count++){
 		console.log(x[count]);
 		x[count].onmouseover = function() {
 			this.className = "NavBar LessTransparent";
 		}
 	
 		x[count].onmouseout = function() {
 			this.className = "NavBar MoreTransparent";
 		}
 	}
	
}
