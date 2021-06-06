function init(){
	let infoItem = document.createElement("li");
	infoItem.innerHTML = "This is an additional item";
	var orli = document.getElementsByTagName("ol");
	var urli = document.getElementsByTagName("ul");
	for (let c=0; c<orli.length; c++){
		orli[c].appendChild(infoItem);
	}
	for(let d=0; d<urli.length; d++){
		urli[d].appendChild(infoItem);
	}
}