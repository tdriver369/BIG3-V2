function addRecord() {
	var y = document.getElementById("weight").value;
	var z = document.getElementById("reps").value;
	var a = parseInt(y);
	var b = parseInt(z);
	var p = b-1;
	var o = 0;
	document.getElementById("response3").innerHTML = "";

	if (exercise == "Bench") {
		if (b < 11){
			if (stacksBench[p].weight < a){
				stacksBench[p].weight = a;
				stacksBench[p].records++;
				o = deadCoef[p] * a;
				var oneRM = Math.round(o);
				stacksBench[p].oneRM = oneRM;
				stats[0].records++;
				stats[1].records++;
				thisSetGains = thisSetGains + 5000;
				localStorage.setItem("bbbStack", JSON.stringify(stacksBench));
				document.getElementById("response3").innerHTML = "New Record!";
			}
		}
		for (var i in pumpsBench) {
			if (pumpsBench[i].weight == a){
				var q = i;
				if (pumpsBench[q].reps < b){
					pumpsBench[q].reps = b;
					pumpsBench[q].records++;
					if (b < 11){
						o = benchCoef[p] * a;
					}else {
						o = a / (1.013-(0.0267123 * b));
					}
					var oneRM = Math.round(o);
					pumpsBench[q].oneRM = oneRM;
					stats[0].records++;
					stats[1].records++;
					thisSetGains = thisSetGains + 5000;
					localStorage.setItem("bbbPump", JSON.stringify(pumpsBench));
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
	if (exercise == "Squat"){
		if (b < 11){
			if (stacksSquat[p].weight < a){
				stacksSquat[p].weight = a;
				stacksSquat[p].records++;
				o = deadCoef[p] * a;
				var oneRM = Math.round(o);
				stacksSquat[p].oneRM = oneRM
				stats[0].records++;
				stats[2].records++;
				thisSetGains = thisSetGains + 5000;
				localStorage.setItem("sssStack", JSON.stringify(stacksSquat));
				document.getElementById("response3").innerHTML = "New Record!";
			}
		}
		for (var i in pumpsSquat) {
			if (pumpsSquat[i].weight == a){
				var q = i;
				if (pumpsSquat[q].reps < b){
					pumpsSquat[q].reps = b;
					pumpsSquat[q].records++;
					if (b < 11){
						o = squatCoef[p] * a;
					}else {
						o = a / (1.013-(0.0267123 * b));
					}
					var oneRM = Math.round(o);
					pumpsSquat[q].oneRM = oneRM
					stats[0].records++;
					stats[2].records++;
					thisSetGains = thisSetGains + 5000;
					localStorage.setItem("sssPump", JSON.stringify(pumpsSquat));
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
	if (exercise == "Deadlift"){
		if (b < 11){
			if (stacksDead[p].weight < a){
				stacksDead[p].weight = a;
				stacksDead[p].records++;
				o = deadCoef[p] * a;
				var oneRM = Math.round(o);
				stacksDead[p].oneRM = oneRM
				stats[0].records++;
				stats[3].records++;
				thisSetGains = thisSetGains + 5000;
				localStorage.setItem("dddStack", JSON.stringify(stacksDead));
				document.getElementById("response3").innerHTML = "New Record!";
			}
		}
		for (var i in pumpsDead) {
			if (pumpsDead[i].weight == a){
				var q = i;
				if (pumpsDead[q].reps < b){
					pumpsDead[q].reps = b;
					pumpsDead[q].records++;
					var o = deadCoef[p] * a;
					var oneRM = Math.round(o);
					pumpsDead[q].oneRM = oneRM
					stats[0].records++;
					stats[3].records++;
					thisSetGains = thisSetGains + 5000;
					localStorage.setItem("dddPump", JSON.stringify(pumpsDead));
					document.getElementById("response3").innerHTML = "New Record!";
				}
			}
		}
	}
	localStorage.setItem("newStats", JSON.stringify(stats));
}
