var scenes = {
	start: {
		text: 'Choose your character.', 
		choices: [
			{text: 'Resident (male)', exec: function() { character = 'Wife'; current = scenes.c1; } },
			{text: 'Resident (female)', exec: function() { character = 'Husband'; current = scenes.c1; } },
		],
	},
	c1: {
		text: "Dear, it's been three hours, since a biological weapon has been exploited in Los Angeles! Everyone is panicking! Everything has been destroyed - the roads, houses, and utilities, all of it! Not to mention, there won't be enough food to satisfy the demand of everyone until our houses are fixed and we get back to working! What should we do?",
		next: function() { return scenes.c2 },
		choices: [
			{text: "First off, we need to quickly calculate how many days we can live off of our current saving and stock up food and emergency supplies.  We might as well hog as much of the commodities in the supermarket as possible. Sweetie, we are in a situation of life and death.", score: 0},
			{text: "First off, we need to use Catastrophic Door Hanger that the Los Angeles City Emergency Management Department has distributed to everyone. Since we're okay, we should hang it with the green side facing up.", score: 1},
		],
	},
	c2: {
		text: "That's a great idea! However, everyone in our neighborhood is confused and wondering what they should do next. Would there be more benefits to helping out our community?",
		next: function() { return scenes.c3 },
		choices: [
			{text: "Yes, there are more benefits to helping our community. Cooperation with 25-40 households will make the process of rebuilding our neighborhood faster! We should set up a disaster and emergency management committee.", score: 1},
			{text: "No, we need to focus on our family first before we can aid others. It's every man for himself! After calculating the amount of days we can live off of our savings, we must devise an emergency plan now and map out the hazards in our area.", score: 0},
		],
	},
	c3: {
		text: "I understand, but whether or not we focus on the community, I think we all should go on ahead and contribute to the community. There are those that are less fortunate than us.",
		next: function() { return scenes.c4 },
		choices: [
			{text: "So ... what was the point of asking me in the first place? Continuing on. We should start by establishing an emergency preparedness and management committee and define the area we live in.", score: 1},
			{text: "So ... what was the point of asking me in the first place? Continuing on. We should start by establishing an emergency preparedness and management committee and recruit leaders right away.", score: 0},
		],
	},
	c4: {
		text: "Shouldn't we define our area first? L.A. is so large and diverse, where do we even start?",
		next: function() { return scenes.c5 },
		choices: [
			{text: "We should immediately set up tents and help our neighbors by collecting essential supplies and resources they need.", score: 0},
			{text: "We should immediately determine whether everyone can speak English or not and identify who needs help. However, we must receive the consent of the people in our neighborhood before helping them. ", score: 1},
		],
	},
	c5: {
		text: "We live in L.A. This will take forever. We have over 40 households in this city. What should we do?",
		next: function() { return scenes.c6 },
		choices: [
			{text: "Not to worry. We will leave those blocks to manage on their own. They'll figure out something.", score: 0},
			{text: "Not to worry. We will set up sign-up sheets for any volunteers that would like to be the “block captain” of their block. That way we do not have to knock on each door. These leaders will be put in our committee and we will manage meetings from there.", score: 1},
		],
	},
	c6: {
		text: "Besides residents that volunteer, we should have experts and people with training to help us out. Who would have expertise in these situations?",
		next: function() { return scenes.c7 },
		choices: [
			{text: "The local block residents are enough. In fact, just having me is enough to fix this situation.", score: 0},
			{text: "Police, fire department, military, translators, health care personnel, neighborhood watch, neighborhood councils, human services, clergy members, business leaders, Community Emergency Response Teams (CERT),and anyone who has experience with caring for disabilities. Just to clarify, we should organize who is the incident commander, operations coordinator, logistics coordinator, and planning and intelligence coordinator. The incident commander is the leader responsible for what has to be done. Operation coordinators are in charge of carrying out these actions. Logistics coordinators are in charge of resources. The planning and intelligence coordinators monitor this information and plans for future activities. Oh! Make sure to have a materials, transportation, communications, neighbor information, and rescue progress team.", score: 1},
		],
	},
	c7: {
		exec: function(term) { term.echo('1 day late after setting up sign-up sheets ...'); },
		text: "Wow, we had so many sign up for each block in L.A.! They left their name and block that they want to manage. With this amount, each block will have 3-7 people to lead them. We should contact them later. Talk about cooperation! Now, the only problem is how we cooperative will and keep contact with them?",
		next: function() { return scenes.c8 },
		choices: [
			{text: "Pray and hope they have telepathy to connect with us and follow the right protocols.", score: 0},
			{text: "Talk with them in person and update them as much as possible in person. We should do this in a daily basis. If the internet works still, social media will definitely be useful in connecting with everyone.", score: 1},
		],
	},
	c8: {
		text: "Now, what should we have them take note of in their block first?",
		next: function() { return scenes.c9 },
		choices: [
			{text: "Each block unit should take note of their food supply, savings, and search for any endangered victims. Chap chap, we don't have any time to waste!", score: 0},
			{text: "Each block unit should take note of the number of homes, businesses, schools, churches, buildings, roads, exits, entrances, hills, waterways, people in the area, and liquefaction zones that may cause hazard.", score: 1},
		],
	},
	c9: {
		exec: function(term) { term.echo('Day 1 of Emergency Preparedness and Management Committee Meeting ...'); character = 'Block Captain 1'; },
		text: "So I got your message that we must scout the area. How do we exactly do that?",
		next: function() { return scenes.c10 },
		choices: [
			{text: "Oh, am I supposed to answer that? Is that what a management leader is supposed to do? I don't know, figure that out yourself.", score: 0},
			{text: "I'm new at this, but last time I checked the the L.A. protocols, we are supposed to identify threats, rate the risk, assess the risk, determine the likelihood of occurrence and level of impact. Then, inspect on any specific hazards in the area like fires earthquakes, landslides, flooding, tsunamis, electricity, water, and telephone services, chemical emergencies, disease outbreak, extreme heat and cold, terrorist attack, severe weather, and local hazards. Dang, I have a good memory.", score: 1},
		],
	},
	c10: {
		exec: function(term) { character = 'Communication Team & Neighbor Information Team' },
		text: "Okay ... then. How about the neighborhood assets? Should we set up a chart for it? What should we keep in mind when investigating the blocks?",
		next: function() { return scenes.c11 },
		choices: [
			{text: "You know what, that sounds like a good idea. Attention everyone, I suggest that we set up charts to organize information. Ah, I'm such a genius for coming up with that.", score: 0},
			{text: "Keep track of the buildings, organizations, radio clubs, neighborhood emergency supplies, disability service providers, hospitable buildings, carpentry services, plumbing services, crisis counselling, first aid and rescue teams, and businesses with emergency supplies. Keep an eye on any equipment that can be used for clearing any obstacle or evacuation resources like vehicles. List the contact information of these locations. Not only that, make a list of what block would most likely need what.", score: 1},
		],
	},
	c11: {
		exec: function(term) { character = 'Neighbor Information Team & Search and Rescue Team' },
		text: "Anything else needed before we start investigating our blocks?",
		next: function() { return scenes.c12 },
		choices: [
			{text: "If you see Rick Grimes from [[u;;]The Walking Dead], make sure to recruit him. Did you see him in [[u;;]The Walking Dead]? His survival skills are OP. We could use a guy like him.", score: 0},
			{text: "Map your block. Sketch the streets, blocks, houses barriers, lots, and entrances and exit routes that are accessible by foot, wheelchair, or car. If there's internet and electricity available in your area, print out the map instead.  Include a meeting place that you may like any of us to gather around. Check any neighbors that need extra help and include the location of the Neighborhood Care Center. That information will come in handy.", score: 1},
		],
	},
	c12: {
		exec: function(term) { character = 'Communication Team' },
		text: "Question about the gathering place. There are so many places we can gather, how can we narrow it to just one?",
		next: function() { return scenes.c13 },
		choices: [
			{text: "The location will depend on you. As long as it's not crowded, I'm good. I'm agoraphobic.", score: 0},
			{text: "Choose a location that is huge, conspicuous, convenient, safe from obstacles, near facilities, well-lit, and accessible to a variety of people. Same goes for selecting a triage area, which is where we can treat people.", score: 1},
		],
	},
	c13: {
		exec: function(term) { character = 'Operations Coordinators' },
		text: "I have a question before we all finish this meeting. Now that we have a set plan of what we're searching for, what are some useful organizations that we should notify people on in case of any further dangers?",
		next: function() { return scenes.end },
		choices: [
			{text: "Just to name a few, the American Red Cross Prepare SoCal, City of Los Angeles Department on Disability, City of Los Angeles Emergency Door Hanger, Emergency Survival Program, Los Angeles Fire Department, Los Angeles Police Department, CERT, Salvation Army, FEMA, General Government Assistance, and U.S Department of Housing and Urban Development! Quite the list there! Now, ready to initiate? I challenge each one of you to complete this task efficiently, since I know you all had guts to take these positions. Let's start! ", score: 0},
			{text: "Forget about organizations. How about we visit Disneyland or something? That'll save our residents from the danger of boredom. Anyway, let's just wrap this meeting up and start! Before we start, let's pray that we don't get harmed or injured during the process... Now, let's go!", score: 1},
		],
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

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
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
		current.choices = shuffle(current.choices);
		
		for (var i = 0; i < current.choices.length; i++) {
			term.echo('[[b;#76FF03;]' + String(i + 1) + ':] ' + current.choices[i].text);
		}
	}
}

function end_scene(choice) {
	var change = current;
	
	if (current.hasOwnProperty('choices') &&current.choices[choice].hasOwnProperty('score')) {
		utotal += 1;
		uscore += current.choices[choice].score;
	}
	if (current.hasOwnProperty('choices') && current.choices[choice].hasOwnProperty('exec')) {
		current.choices[choice].exec();
	}
	if (change === current && current.hasOwnProperty('next')) {
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
				term.error('Invalid selection/command "' + command + '". Type "help" to show the help screen.');
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