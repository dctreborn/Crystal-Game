var numGoal;
var score;
var wins;
var losses;
var crystals = [0,0,0,0];

$("#crystal-1").on("click", function(){game.addValue(crystals[0])});
$("#crystal-2").on("click", function(){game.addValue(crystals[1])});
$("#crystal-3").on("click", function(){game.addValue(crystals[2])});
$("#crystal-4").on("click", function(){game.addValue(crystals[3])});

var game = {
	//pick random number from 19-120
	targetNum: function() {
		numGoal = Math.floor(Math.random() * (120 - 19 + 1) + 19);
	},

	//set crystal array to different numbers from 1-12
	crystalNum: function () {
		for (var i = 0; i < 4; i++) {
			crystals[i] = Math.floor(Math.random() * 12 + 1);
		}
	},

	//initialize variables
	initialize: function() {
		game.targetNum();
		game.crystalNum();
		wins = 0;
		losses = 0;
		score = 0;
		console.log(numGoal);
		console.log(crystals);
	},

	//checks score vs numGoal
	check: function() {
		//increase wins if numGoal matches score
		if (numGoal == score) {
			wins++;
		}
		//increase losses if numGoal is less than score
		else if (numGoal < score) {
			losses++;
		}
	},

	//adds crystal value to score
	addValue: function(points) {
		score += points;
		console.log(score);
	}

}