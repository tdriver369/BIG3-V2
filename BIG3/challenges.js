function addChallenges() {
	//document.getElementById("response4").innerHTML = "Hey";

	if (exercise == "Bench"){
		checkChallenge(benchChallenges);
	}else if (exercise == "Squat"){
		checkChallenge(squatChallenges);
	}else if (exercise == "Deadlift"){
		checkChallenge(deadChallenges);
	}
	

}

function checkChallenge (x) {
	var x = x;
	var one = {num: 0, val: [20,20]};
	var two = {num: 1, val: [18, 18]};
	var three = {num: 2, val: [15, 15, 15]};
	var four = {num: 3, val: [12, 12, 12]};
	var five = {num: 4, val: [10, 10, 10, 10]};
	var six = {num: 5, val: [8, 8, 8, 8]};
	var seven = {num: 6, val: [5, 5, 5, 5, 5]};
	var eight = {num: 7, val: [3, 3, 3, 3, 3]};
	var nine = {num: 8, val: [6, 8, 10]};
	var ten = {num: 9, val: [10, 8, 6]};

	if (x[0].challenge == "Incomplete"){
		challengeCompleted(one);
	}
	if (x[1].challenge == "Incomplete"){
		challengeCompleted(two);
	}
	if (x[2].challenge == "Incomplete"){
		challengeCompleted(three);
	}
	if (x[3].challenge == "Incomplete"){
		challengeCompleted(four);
	}
	if (x[4].challenge == "Incomplete"){
		challengeCompleted(five);
	}
	if (x[5].challenge == "Incomplete"){
		challengeCompleted(six);
	}
	if (x[6].challenge == "Incomplete"){
		challengeCompleted(seven);
	}
	if (x[7].challenge == "Incomplete"){
		challengeCompleted(eight);
	}
	if (x[8].challenge == "Incomplete"){
		challengeCompleted(nine);
	}
	if (x[9].challenge == "Incomplete"){
		challengeCompleted(ten);
	}
}

function challengeCompleted(chal){
	var chal = chal;
	var z = chal.num
	var x = chal.val
	var y = x.length;
	
	if (exercise == "Bench"){
		var arr = benchArrayReps.slice(-y);
		if (actuallyCompleted(arr, x)){
			document.getElementById("response4").innerHTML = "Challenge Completed!";
			benchChallenges[z].challenge = "Complete!!"
			thisSetGains = thisSetGains + 5000;
			stats[0].challenges++;
			stats[1].challenges++;
			localStorage.setItem("bbChallenges", JSON.stringify(benchChallenges));
		}
		
	}else if (exercise == "Squat"){
		var arr = squatArrayReps.slice(-y);
		if (actuallyCompleted(arr, x)){
			document.getElementById("response4").innerHTML = "Challenge Completed!";
			squatChallenges[z].challenge = "Complete!!"
			thisSetGains = thisSetGains + 5000;
			stats[0].challenges++;
			stats[2].challenges++;
			localStorage.setItem("ssChallenges", JSON.stringify(squatChallenges));
		}
	}else if (exercise == "Deadlift"){
		var arr = deadArrayReps.slice(-y);
		if (actuallyCompleted(arr, x)){
			document.getElementById("response4").innerHTML = "Challenge Completed!";
			deadChallenges[z].challenge = "Complete!!"
			thisSetGains = thisSetGains + 5000;
			stats[0].challenges++;
			stats[3].challenges++;
			localStorage.setItem("ddChallenges", JSON.stringify(deadChallenges));
		}
	}
	localStorage.setItem("nnnStats", JSON.stringify(stats));
}

function actuallyCompleted(arr, x) {
	var arr = arr;
	var x = x;

	if (arr.length !== x.length) return false;
	for (var i in arr){
		if (arr[i] !== x[i]){
			return false;
		}
	}
	return true
}