var datesSelected = [];

function DaysUntil(dates) {
	var daysUntilDate = [];
	var today =  new Date();
	for (var i = 0; i < dates.length; i++) {
		var futureDate = new Date(dates[i].substring(6,10),dates[i].substring(0,2),dates[i].substring(3,5));
		daysUntilDate[i] = parseInt((futureDate.valueOf() - today.valueOf()) / 86400000);
		console.log(daysUntilDate[i] + " days until "+ futureDate.toDateString()); 
		//Display(daysUntil[i],futureDate);

	};
	return daysUntilDate;
}

function AddDate(date){
	datesSelected.push(date);
}

function Display(daysUntil,futureDate) {
	var text = "There are " + daysUntil.toString() + " days until" + futureDate.toDateString();
	var node = document.createTextNode(text);
	var p = document.getElementById("output");
	p.appendChild(node);
}