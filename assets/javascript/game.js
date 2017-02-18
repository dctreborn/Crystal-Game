var numGoal = 0;
var score = 0;
var wins = 0;
var losses = 0;
var crystals = [0,0,0,0]; 
var images = [];

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

	//build images array
	imageArray: function() {
		for (var i = 0; i < 12; i++) {
			images.push(i + ".gif");
		}
	},

	//initialize variables
	initialize: function() {
		score = 0;
		game.targetNum();
		game.crystalNum();
		game.crystalImage();
		game.updateDisplay();
	},

	//checks score vs numGoal
	check: function() {
		//increase wins if numGoal matches score
		if (numGoal == score) {
			wins++;
			game.initialize();
		}
		//increase losses if numGoal is less than score
		else if (numGoal < score) {
			losses++;
			game.initialize();
		}
	},

	//adds crystal value to score
	addValue: function(index) {
		var points = crystals[index - 1];
		score += points;
	},

	//display image to button
	crystalImage: function() {
		var img;
		var index;
		var array = [];

		for (var i = 0; i < crystals.length; i++) {
			img = $("<img>");
			index = images[Math.floor(Math.random() * 12)]

			//show unique image
			if (!array.includes(index)) {
				array.push(index);
				img.attr("src","assets/images/" + index);
				$("#crystal-" + (i + 1)).html(img);
			}

			else {
				i--;
			}
		}
	},

	updateDisplay: function() {

		$("#wins").html("Wins: " + wins + " ");
		$("#loss").html("Losses: " + losses);
		$("#goal").html("Taget Score: " + numGoal);
		$("#scores").html("Total: " + score);
	},

}

game.imageArray();
game.initialize();

$(".btn").on("click", function(){
	var value = $(this).attr("id");
	var num = value.charAt(value.length - 1);
	game.addValue(num)
	game.updateDisplay();
	game.check();
})
