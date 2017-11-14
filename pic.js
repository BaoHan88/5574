
window.onload = function() {
    var table = document.getElementById("Calender");
	var img = document.getElementById("image");


	var arr = [
		["gopher","FraserHall","BH445","Home"],
		["gopher","keller","HHH85","BH455"],
		["gopher","FraserHall","BH410","hhh80"],
		["gopher","keller","humphrey","rec center"],
		["gopher","Home","meeting","humphrey"]
	];
	
	
	if (table != null) {
		console.log("done");
		for (var i = 0; i < table.rows.length; i++) {
			for (var j = 0; j < table.rows[i].cells.length; j++){
				table.rows[i].cells[j].onclick = function () {
					i = this.parentNode.rowIndex;
					j = this.cellIndex;
					//console.log(this);
					//console.log(i);
					//console.log(j);
					img.setAttribute("src",arr[i][j]+".jpg");
				}
				
			}
			
		}
	}
	console.log("done");
}


