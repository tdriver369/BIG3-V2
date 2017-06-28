function addSet() {
	var d = new Date();
	var m = new Date();
	var date = m.getMonth() + 1 + "-" + d.getDate();
	var y = document.getElementById("weight").value;
	var z = document.getElementById("reps").value;
	var a = parseInt(y);
	var b = parseInt(z);
	var q = b - 1;
	var o = 0;

	if(a && b){
		
		//thisSetGains = thisSetGains + g;
		if (exercise == "Bench"){
			var num = benchHist.length;
			if (b < 11){
				o = benchCoef[q] * a;
			}else {
				o = a / (1.013-(0.0267123 * b));
			}
			var oneRM = Math.round(o);
			set = {set: num, date: date, weight: a, reps: b, oneRM: oneRM};
			benchHist.push(set);
			localStorage.setItem("bbb", JSON.stringify(benchHist));
			benchArrayReps.push(b);
			localStorage.setItem("benchArrayReps", JSON.stringify(benchArrayReps));
			if (oneRM > stats[1].oneRM){
				stats[1].oneRM = oneRM;
			}
			refreshBench();
		} else if (exercise == "Squat"){
			var num = squatHist.length;
			if (b < 11){
				o = squatCoef[q] * a;
			}else {
				o = a / (1.013-(0.0267123 * b));
			}
			var oneRM = Math.round(o);
			set = {set: num, date: date, weight: a, reps: b, oneRM: oneRM};
			squatHist.push(set);
			localStorage.setItem("sss", JSON.stringify(squatHist));
			squatArrayReps.push(b);
			localStorage.setItem("squatArrayReps", JSON.stringify(squatArrayReps));
			if (oneRM > stats[2].oneRM){
				stats[2].oneRM = oneRM;
			}
			refreshSquat();
		} else if (exercise == "Deadlift"){
			var num = deadHist.length;
			if (b < 11){
				o = deadCoef[q] * a;
			}else {
				o = a / (1.013-(0.0267123 * b));
			}
			var oneRM = Math.round(o);
			set = {set: num, date: date, weight: a, reps: b, oneRM: oneRM};
			deadHist.push(set);
			localStorage.setItem("ddd", JSON.stringify(deadHist));
			deadArrayReps.push(b);
			localStorage.setItem("deadArrayReps", JSON.stringify(deadArrayReps));
			if (oneRM > stats[3].oneRM){
				stats[3].oneRM = oneRM;
			}
			refreshDead();
		}
		localStorage.setItem("nnnStats", JSON.stringify(stats));
		
	} else {
		document.getElementById("response").innerHTML = "Please enter a number for weight and reps!";
	}
}