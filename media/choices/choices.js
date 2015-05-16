var scenes = {
	start: {
		text: 'Choose your character.', 
		next: function() { return scenes.s1 },
		choices: [
			{text: 'Choice 1', score: 1},
			{text: 'Choice 2', score: 0},
		]
	},
	s1: {
		text: 'Dear, it’s been three hours, since a biological weapon has been exploited in Los Angeles! Everyone is panicking! Everything has been destroyed-the roads, houses, and utilities, all of it! Not to mention, there won’t be enough food to satisfy the demand of everyone until our houses are fixed and we get back to working! What should we do?',
		next: function() { return scenes.end },
		choices: [
			{text: 'First off, we need to quickly calculate how many days we can live off of our current saving and stock up food and emergency supplies.  We might as well hog as much of the commodities in the supermarket as possible. Sweetie, we are in a situation of life and death.', score: 0},
			{text: 'First off, we need to use Catastrophic Door Hanger that the Los Angeles City Emergency Management Department has distributed to everyone. Since we’re okay, we should hang it with the green side facing up.', score: 1},
		]
	},
	end: {
		exec: function(term) { term.echo('You scored ' + uscore + ' out of ' + utotal + '.'); },
	},
};

var commands = {
	start: {
		help: 'Starts the game.',
		run: function(term) { if (current) { term.error('Game has already started!'); } else { current = scenes.start; start_scene(term); } },
	},
	restart: {
		help: 'Resets the game.',
		run: function(term) { if (!current) { term.error('Game has not been started yet!'); } else { current = null; term.purge(); $('#terminal').remove(); create_terminal(); } },
	},
	help: {
		help: 'Displays this message.',
		run: function(term) { term.echo('This is where help will be!'); },
	}
}

function start_scene(term) {
	if (current.hasOwnProperty('exec')) {
		current.exec(term);
	}
	term.echo(current.text);
	for (var i = 0; i < current.choices.length; i++) {
		term.echo('[[b;#76FF03;]' + String(i + 1) + ':] ' + current.choices[i].text);
	}
}

function end_scene(choice) {
	utotal += 1;
	uscore += current.choices[choice].score;
	current = current.next();
}

var slide = 0;
var uscore = 0;
var utotal = 0;
var current = null;

function create_terminal() {
	$('<div id="terminal" class="terminal" style="width: 90%;"></div>').prependTo('body');

	$('#terminal').terminal(function(command, term) {
		if (commands.hasOwnProperty(command)) {
			commands[command].run(term);
		}
		else if (current !== null && current.choices.length >= parseInt(command) && parseInt(command) > 0) {
			end_scene(parseInt(command) - 1);
			start_scene(term);
		}
		else if (current === null && command !== '') {
			term.error('Game has not been started! Enter `start` to being the game.');
		}
		else {
			term.error('Invalid selection/command `' + command + '`.');
		}
	}, {
		greetings: 	'[[bgu;#76FF03;]Welcome to S.O.S. - Communcation Storyline]\n' +
					'Type "help" at anytime to show the help screen.\n' +
					'',
		name: 'S.O.S.',
		height: 600,
		prompt: '> '});
}

$(document).ready(function() {
	create_terminal();
});