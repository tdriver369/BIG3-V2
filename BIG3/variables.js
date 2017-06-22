var exercise = "Bench";
var benchHist = JSON.parse(localStorage.getItem("nBenchHistory")) || [
	{date: "1-1", weight: 100, reps: 10,}];
var squatHist = JSON.parse(localStorage.getItem("newSquatHistory")) || [
	{date: "1-1", weight: 100, reps: 10,}];
var deadHist = JSON.parse(localStorage.getItem("newDeadHistory"))  || [
	{date: "1-1", weight: 100, reps: 10,}];

var app = angular.module('myApp', []);

var stacksBench = JSON.parse(localStorage.getItem("benchStack")) || [
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0}];

var pumpsBench = JSON.parse(localStorage.getItem("benchPump")) || [
	{weight: 45, reps: 0, records: 0},
	{weight: 95, reps: 0, records: 0},
	{weight: 135, reps: 0, records: 0},
	{weight: 185, reps: 0, records: 0},
	{weight: 225, reps: 0, records: 0},
	{weight: 275, reps: 0, records: 0},
	{weight: 315, reps: 0, records: 0},
	{weight: 365, reps: 0, records: 0},
	{weight: 405, reps: 0, records: 0},
	{weight: 455, reps: 0, records: 0},
	{weight: 495, reps: 0, records: 0}];

var stacksDead = JSON.parse(localStorage.getItem("deadStack")) || [
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0}];

var pumpsDead = JSON.parse(localStorage.getItem("deadPump")) || [
	{weight: 45, reps: 0, records: 0},
	{weight: 95, reps: 0, records: 0},
	{weight: 135, reps: 0, records: 0},
	{weight: 185, reps: 0, records: 0},
	{weight: 225, reps: 0, records: 0},
	{weight: 275, reps: 0, records: 0},
	{weight: 315, reps: 0, records: 0},
	{weight: 365, reps: 0, records: 0},
	{weight: 405, reps: 0, records: 0},
	{weight: 455, reps: 0, records: 0},
	{weight: 495, reps: 0, records: 0}];

var stacksSquat = JSON.parse(localStorage.getItem("squatStack")) || [
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0},
	{weight: 0, records: 0}];

var pumpsSquat = JSON.parse(localStorage.getItem("squatPump")) || [
	{weight: 45, reps: 0, records: 0},
	{weight: 95, reps: 0, records: 0},
	{weight: 135, reps: 0, records: 0},
	{weight: 185, reps: 0, records: 0},
	{weight: 225, reps: 0, records: 0},
	{weight: 275, reps: 0, records: 0},
	{weight: 315, reps: 0, records: 0},
	{weight: 365, reps: 0, records: 0},
	{weight: 405, reps: 0, records: 0},
	{weight: 455, reps: 0, records: 0},
	{weight: 495, reps: 0, records: 0}];

var benchChallenges = JSON.parse(localStorage.getItem("benchChallenges")) || [
	{title: "2 sets of 20 reps", challenge: "Incomplete"},
	{title: "2 sets of 18 reps", challenge: "Incomplete"},
	{title: "3 sets of 15 reps", challenge: "Incomplete"},
	{title: "3 sets of 12 reps", challenge: "Incomplete"},
	{title: "4 sets of 10 reps", challenge: "Incomplete"},
	{title: "4 sets of 8 reps", challenge: "Incomplete"},
	{title: "5 sets of 5 reps", challenge: "Incomplete"},
	{title: "5 sets of 3 reps", challenge: "Incomplete"},
	{title: "6, 8, then 10 reps", challenge: "Incomplete"},
	{title: "10, 8, then 6 reps", challenge: "Incomplete"}];

var squatChallenges = JSON.parse(localStorage.getItem("squatChallenges")) || [
	{title: "2 sets of 20 reps", challenge: "Incomplete"},
	{title: "2 sets of 18 reps", challenge: "Incomplete"},
	{title: "3 sets of 15 reps", challenge: "Incomplete"},
	{title: "3 sets of 12 reps", challenge: "Incomplete"},
	{title: "4 sets of 10 reps", challenge: "Incomplete"},
	{title: "4 sets of 8 reps", challenge: "Incomplete"},
	{title: "5 sets of 5 reps", challenge: "Incomplete"},
	{title: "5 sets of 3 reps", challenge: "Incomplete"},
	{title: "6, 8, then 10 reps", challenge: "Incomplete"},
	{title: "10, 8, then 6 reps", challenge: "Incomplete"}];

var deadChallenges = JSON.parse(localStorage.getItem("deadChallenges")) || [
	{title: "2 sets of 20 reps", challenge: "Incomplete"},
	{title: "2 sets of 18 reps", challenge: "Incomplete"},
	{title: "3 sets of 15 reps", challenge: "Incomplete"},
	{title: "3 sets of 12 reps", challenge: "Incomplete"},
	{title: "4 sets of 10 reps", challenge: "Incomplete"},
	{title: "4 sets of 8 reps", challenge: "Incomplete"},
	{title: "5 sets of 5 reps", challenge: "Incomplete"},
	{title: "5 sets of 3 reps", challenge: "Incomplete"},
	{title: "6, 8, then 10 reps", challenge: "Incomplete"},
	{title: "10, 8, then 6 reps", challenge: "Incomplete"}];

var benchArrayReps = JSON.parse(localStorage.getItem("benchArrayReps")) || [];
var squatArrayReps = JSON.parse(localStorage.getItem("squatArrayReps")) || [];
var deadArrayReps = JSON.parse(localStorage.getItem("deadArrayReps")) || [];

var stats = JSON.parse(localStorage.getItem("newStats")) || [
	{name: "Total", gains: 0, sets: 0, reps: 0, weight: 0, records: 0, challenges: 0},
	{name: "Bench", gains: 0, sets: 0, reps: 0, weight: 0, records: 0, challenges: 0},
	{name: "Squat", gains: 0, sets: 0, reps: 0, weight: 0, records: 0, challenges: 0},
	{name: "Dead", gains: 0, sets: 0, reps: 0, weight: 0, records: 0, challenges: 0}];

var thisSetGains = 0;

var levelInfo = JSON.parse(localStorage.getItem("levelInfo")) || [
	{name: 1, gains: 10000, total: 10000, current: 0},
	{name: 2, gains: 20000, total: 30000, current: 0},
	{name: 3, gains: 20000, total: 50000, current: 0},
	{name: 4, gains: 25000, total: 75000, current: 0},
	{name: 5, gains: 25000, total: 100000, current: 0},
	{name: 6, gains: 50000, total: 150000, current: 0},
	{name: 7, gains: 50000, total: 200000, current: 0},
	{name: 8, gains: 50000, total: 250000, current: 0},
	{name: 9, gains: 50000, total: 300000, current: 0},
	{name: 10, gains: 50000, total: 350000, current: 0},
	{name: 11, gains: 50000, total: 400000, current: 0},
	{name: 12, gains: 50000, total: 500000, current: 0},
	{name: 13, gains: 100000, total: 600000, current: 0},
	{name: 14, gains: 100000, total: 700000, current: 0},
	{name: 15, gains: 100000, total: 800000, current: 0},
	{name: 16, gains: 200000, total: 1000000, current: 0},
	{name: 17, gains: 500000, total: 1500000, current: 0},
	{name: 18, gains: 500000, total: 2000000, current: 0},
	{name: 19, gains: 1000000, total: 3000000, current: 0},
	{name: 20, gains: 2000000, total: 5000000, current: 0},];

var level = JSON.parse(localStorage.getItem("level")) || 0;