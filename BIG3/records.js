function addRecord() {
	var y = document.getElementById("weight").value;
	var z = document.getElementById("reps").value;
	var a = parseInt(y);
	var b = parseInt(z);
	var p = 14;
	if (b < 16){
		p = b-1;
	}
	document.getElementById("response3").innerHTML = "";

	if (exercise == "Bench") {
		if (stacksBench[p].weight < a){
			stacksBench[p].weight = a;
			stacksBench[p].records++;
			stats[0].records++;
			stats[1].records++;
			thisSetGains = thisSetGains + 5000;
			localStorage.setItem("benchStack", JSON.stringify(stacksBench));
			document.getElementById("response3").innerHTML = "New Record!";
		}
		for (var i in pumpsBench) {
			if (pumpsBench[i].weight == a){
				var q = i;
				if (pumpsBench[q].reps < b){
					pumpsBench[q].reps = b;
					pumpsBench[q].records++;
					stats[0].records++;
					stats[1].records++;
					thisSetGains = thisSetGains + 5000;
					localStorage.setItem("benchPump", JSON.stringify(pumpsBench));
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
	if (exercise == "Squat"){
		if (stacksSquat[p].weight < a){
			stacksSquat[p].weight = a;
			stacksSquat[p].records++;
			stats[0].records++;
			stats[2].records++;
			thisSetGains = thisSetGains + 5000;
			localStorage.setItem("squatStack", JSON.stringify(stacksSquat));
			document.getElementById("response3").innerHTML = "New Record!";
			}
	
		for (var i in pumpsSquat) {
			if (pumpsSquat[i].weight == a){
				var q = i;
				if (pumpsSquat[q].reps < b){
					pumpsSquat[q].reps = b;
					pumpsSquat[q].records++;
					stats[0].records++;
					stats[2].records++;
					thisSetGains = thisSetGains + 5000;
					localStorage.setItem("squatPump", JSON.stringify(pumpsSquat));
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
	if (exercise == "Deadlift"){
		if (stacksDead[p].weight < a){
			stacksDead[p].weight = a;
			stacksDead[p].records++;
			stats[0].records++;
			stats[3].records++;
			thisSetGains = thisSetGains + 5000;
			localStorage.setItem("deadStack", JSON.stringify(stacksDead));
			document.getElementById("response3").innerHTML = "New Record!";
			}
	
		for (var i in pumpsDead) {
			if (pumpsDead[i].weight == a){
				var q = i;
				if (pumpsDead[q].reps < b){
					pumpsDead[q].reps = b;
					pumpsDead[q].records++;
					stats[0].records++;
					stats[3].records++;
					thisSetGains = thisSetGains + 5000;
					localStorage.setItem("deadPump", JSON.stringify(pumpsDead));
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
	localStorage.setItem("newStats", JSON.stringify(stats));
}
