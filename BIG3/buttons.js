app.controller('buttons', function($scope) {
	$scope.benchButton = true;
	$scope.squatButton = false;
	$scope.deadButton = false;

	$scope.myDataSource = {
	    chart: {
	        caption: "Stacks",
	        subCaption: "Weight Records",
	    },
	    data: [
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100}
	    ],
	};

	$scope.myDataSource2 = {
	    chart: {
	        caption: "Pumps",
	        subCaption: "Reps Records",
	    },
	    data: [
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100},
	    	{label: "Reps", value: 100}
	    ],
	};

	$scope.changeTotals = function(){
		$scope.xrecords = stats[0].records;
		$scope.xreps = stats[0].reps;
		$scope.xsets = stats[0].sets;
		$scope.xweight = stats[0].weight;
		$scope.xgains = stats[0].gains;
		$scope.xchallenges = stats[0].challenges;
		$scope.xlevel = levelInfo[level].name;
		$scope.xcurrent = levelInfo[level].current;
		$scope.xtotal = levelInfo[level].gains;
		$scope.progress = progress;
	}

	$scope.refresh = function(){
		if (exercise == "Bench"){
			$scope.changeBench();
		} else if (exercise == "Squat"){
			$scope.changeSquat();
		} else if (exercise == "Deadlift"){
			$scope.changeDead();
		}
	}

	$scope.changeBench = function(){
		$scope.benchButton = true;
		$scope.squatButton = false;
		$scope.deadButton = false;
		$scope.stack = stacksBench;
		$scope.pump = pumpsBench;
		$scope.challenge = benchChallenges;
		$scope.srecords = stats[1].records;
		$scope.sreps = stats[1].reps;
		$scope.ssets = stats[1].sets;
		$scope.sweight = stats[1].weight;
		$scope.sgains = stats[1].gains;
		$scope.schallenges = stats[1].challenges;
		$scope.hist = benchHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		for (i = 0, j=14; i<stacksBench.length; i++, j--){
	    	$scope.myDataSource.data[j].label = stacksBench[i].reps.toString();
	    	$scope.myDataSource.data[j].value = stacksBench[i].weight;
	    }
	    for (i = 0, j=10; i<pumpsBench.length; i++, j--){
	    	$scope.myDataSource2.data[j].label = pumpsBench[i].weight.toString();
	    	$scope.myDataSource2.data[j].value = pumpsBench[i].reps;
	    }
	}
	$scope.changeSquat = function(){
		$scope.squatButton = true;
		$scope.benchButton = false;
		$scope.deadButton = false;
		$scope.stack = stacksSquat;
		$scope.pump = pumpsSquat;
		$scope.challenge = squatChallenges;
		$scope.srecords = stats[2].records;
		$scope.sreps = stats[2].reps;
		$scope.ssets = stats[2].sets;
		$scope.sweight = stats[2].weight;
		$scope.sgains = stats[2].gains;
		$scope.schallenges = stats[2].challenges;
		$scope.hist = squatHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		for (i = 0, j=14; i<stacksSquat.length; i++, j--){
	    	$scope.myDataSource.data[j].label = stacksSquat[i].reps.toString();
	    	$scope.myDataSource.data[j].value = stacksSquat[i].weight;
	    }
	    for (i = 0, j=10; i<pumpsSquat.length; i++, j--){
	    	$scope.myDataSource2.data[j].label = pumpsSquat[i].weight.toString();
	    	$scope.myDataSource2.data[j].value = pumpsSquat[i].reps;
		}
	}
	$scope.changeDead = function(){
		$scope.deadButton = true;
		$scope.squatButton = false;
		$scope.benchButton = false;
		$scope.stack = stacksDead;
		$scope.pump = pumpsDead;
		$scope.challenge = deadChallenges;
		$scope.srecords = stats[3].records;
		$scope.sreps = stats[3].reps;
		$scope.ssets = stats[3].sets;
		$scope.sweight = stats[3].weight;
		$scope.sgains = stats[3].gains;
		$scope.schallenges = stats[3].challenges;
		$scope.hist = deadHist;
		$scope.orderByField = 'set';
		$scope.orderByField2 = 'reps';
		$scope.orderByField3 = 'weight';
		$scope.orderByField4 = 'num';
 		$scope.reverseSort = true;
 		$scope.reverseSort2 = false;
 		for (i = 0, j=14; i<stacksDead.length; i++, j--){
	    	$scope.myDataSource.data[j].label = stacksDead[i].reps.toString();
	    	$scope.myDataSource.data[j].value = stacksDead[i].weight;
	    }
	    for (i = 0, j=10; i<pumpsDead.length; i++, j--){
	    	$scope.myDataSource2.data[j].label = pumpsDead[i].weight.toString();
	    	$scope.myDataSource2.data[j].value = pumpsDead[i].reps;
	    }
	}
	$scope.changeBench();
	$scope.changeTotals();
});
