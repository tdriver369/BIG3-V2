function addSet() {
	var d = new Date();
	var m = new Date();
	var date = m.getMonth() + 1 + "-" + d.getDate();
	var y = document.getElementById("weight").value;
	var z = document.getElementById("reps").value;
	var a = parseInt(y);
	var b = parseInt(z);

	if(a && b){
		document.getElementById("response").innerHTML = exercise + " " + a + " x " + b;
		
		//thisSetGains = thisSetGains + g;
		if (exercise == "Bench"){
			var num = benchHist.length;
			set = {set: num, date: date, weight: a, reps: b};
			benchHist.push(set);
			localStorage.setItem("bb", JSON.stringify(benchHist));
			benchArrayReps.push(b);
			localStorage.setItem("benchArrayReps", JSON.stringify(benchArrayReps));
			refreshBench();
		} else if (exercise == "Squat"){
			var num = squatHist.length;
			set = {set: num, date: date, weight: a, reps: b};
			squatHist.push(set);
			localStorage.setItem("ss", JSON.stringify(squatHist));
			squatArrayReps.push(b);
			localStorage.setItem("squatArrayReps", JSON.stringify(squatArrayReps));
			refreshSquat();
		} else if (exercise == "Deadlift"){
			var num = deadHist.length;
			set = {set: num, date: date, weight: a, reps: b};
			deadHist.push(set);
			localStorage.setItem("dd", JSON.stringify(deadHist));
			deadArrayReps.push(b);
			localStorage.setItem("deadArrayReps", JSON.stringify(deadArrayReps));
			refreshDead();
		}
		
	} else {
		document.getElementById("response").innerHTML = "Please enter a number for weight and reps!";
	}
}