var scenes = {
	start: {
		text: 'Choose your character.', 
		next: function() { return scenes.s1 },
		choices: [
			{text: 'Resident (male)', exec: function() { character = 'Wife' } },
			{text: 'Resident (female)', exec: function() { character = 'Husband' } },
		]
	},
	s1: {
		text: 'Dear, it’s been three hours, since a biological weapon has been exploited in Los Angeles! Everyone is panicking! Everything has been destroyed - the roads, houses, and utilities, all of it! Not to mention, there won’t be enough food to satisfy the demand of everyone until our houses are fixed and we get back to working! What should we do?',
		next: function() { return scenes.end },
		choices: [
			{text: 'First off, we need to quickly calculate how many days we can live off of our current saving and stock up food and emergency supplies.  We might as well hog as much of the commodities in the supermarket as possible. Sweetie, we are in a situation of life and death.', score: 0},
			{text: 'First off, we need to use Catastrophic Door Hanger that the Los Angeles City Emergency Management Department has distributed to everyone. Since we’re okay, we should hang it with the green side facing up.', score: 1},
		]
	},
	end: {
		exec: function(term) { fill_line(term); term.echo('You scored [[b;#76FF03;]' + uscore + '] out of [[b;#76FF03;]' + utotal + '].'); term.echo('Game has ended. Type "restart" to restart the game.'); fill_line(term); },
	},
};

var commands = {
	start: {
		help: 'Starts the game.',
		run: function(term) { if (current) { term.error('Game has already started! Type "restart" to restart the game.'); } else { current = scenes.start; start_scene(term); } },
	},
	restart: {
		help: 'Resets the game and purges all data.',
		run: function(term) { if (!current) { term.error('Game has not been started yet! Type "start" to start the game.'); } else { term.purge(); $('#terminal').remove(); create_terminal(); } },
	},
	credits: {
		help: 'Shows the credits.',
		run: function(term) { term.echo('&copy; 2015 Project Z\nAll source code licensed under the MIT license.'); },
	},
	help: {
		help: 'Displays this help message.',
		run: function(term) {
			var sorted = [];
			for (var command in commands) {
				sorted.push(command);
			}
			sorted.sort();
			for (var i = 0; i < sorted.length; i++) {
				term.echo('[[b;#76FF03;]' + sorted[i] + ':] ' + commands[sorted[i]].help);
			}
		},
	}
}

function fill_line(term) {
	term.echo(Array(twidth + 1).join("-"));
}

function start_scene(term) {
	if (current.hasOwnProperty('exec')) {
		current.exec(term);
	}
	if (current.hasOwnProperty('text')) {
		fill_line(term);
		if (character !== null) {
			term.echo('[[b;#76FF03;]' + character + ':] ' + current.text);
		} else {
			term.echo(current.text);
		}
		fill_line(term);
	}
	if (current.hasOwnProperty('choices')) {
		for (var i = 0; i < current.choices.length; i++) {
			term.echo('[[b;#76FF03;]' + String(i + 1) + ':] ' + current.choices[i].text);
		}
	}
}

function end_scene(choice) {
	if (current.choices[choice].hasOwnProperty('score')) {
		utotal += 1;
		uscore += current.choices[choice].score;
	}
	if (current.choices[choice].hasOwnProperty('exec')) {
		current.choices[choice].exec();
	}
	if (current.hasOwnProperty('next')) {
		current = current.next();
	}
}

var slide, uscore, utotal, current, character, twidth, theight;

function create_terminal() {
	slide = 0, uscore = 0, utotal = 0, current = null, character = null;

	$('<div id="terminal" class="terminal"></div>').prependTo('.terminal-wrapper');

	$('#terminal').terminal(function(command, term) {
		twidth = term.cols(); theight = term.rows();
		command = command.toLowerCase();
		
		try {
			if (commands.hasOwnProperty(command)) {
				commands[command].run(term);
			}
			else if (current !== null && current.hasOwnProperty('choices') && current.choices.length >= parseInt(command) && parseInt(command) > 0) {
				end_scene(parseInt(command) - 1);
				start_scene(term);
			}
			else if (current === null && command !== '') {
				term.error('Game has not been started! Enter "start" to begin the game or "help" to see the help text.');
			}
			else {
				term.error('Invalid selection/command "' + command + '".');
			}
		} catch (e) {
			term.error('Fatal Error. Please refresh the page.');
		}
		
		$('.terminal-wrapper').scrollTop($('.terminal-wrapper').prop("scrollHeight"));
	}, {
		greetings: 	'[[bgu;#76FF03;]Welcome to S.O.S. - Communcation Storyline]\n' +
					'Type "help" at anytime to show the help screen.\n' +
					'',
		name: 'S.O.S.',
		exit: false,
		clear: false,
		onBlur: function() { return false; },
		keydown: function() { $('.terminal-wrapper').scrollTop($('.terminal-wrapper').prop("scrollHeight")); },
		prompt: '> '});
}

$(document).ready(function() {
	create_terminal();
});