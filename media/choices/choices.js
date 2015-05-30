var scenes = {
	start: {
		text: 'Choose your character.', 
		choices: [
			{text: 'Resident (male)', exec: function() { character = 'Wife'; current = scenes.c1; } },
			{text: 'Resident (female)', exec: function() { character = 'Husband'; current = scenes.c1; } },
			{text: 'Distric Council Member (DCO)', exec: function() { character = 'DCO Member 2'; current = scenes.d1; } },
		],
	},
	d1: {
		exec: function(term) { fill_line(term); term.echo("[[b;#76FF03;]Department of Homeland Security:] A bioterrorist attack has just been launched to the city of L.A.! Quickly alert this for national headlines! Contact Los Angeles' District Council Office now!\n[[b;#76FF03;]DCO Member 1:] Department of Homeland Security has just reminded us about the attack. Everyone proceed with the recovery portion from the 5 core capabilities in order to successfully rebuild L.A's infrastructure!\n[[b;#76FF03;]DCO Member 2:] Sorry, I’m new at the office. What are the 5 core capabilities again?"); },
		next: function() { return scenes.d2 },
		choices: [
			{text: "The 5 core capabilities are prevention, protection, mitigation, response, and recovery. Now, let’s focus on housing, operational coordination, health and social services, natural and cultural resources, and infrastructure system.", reply: "Got it.", score: 1},
			{text: "I'm not too sure. However, you can find it in our database.", reply: "Okay. I'll look it up I guess.", score: 0.3},
			{text: "You didn't get enough training did you? Horrific how they send people like you here nowadays.", reply: "I guess not ...", score: 0.1},
		],
	},
	d2: {
		text: "For operational coordination, what must we do?",
		next: function() { return scenes.d3 },
		choices: [
			{text: "We must first establish and maintain a unified and coordinated operational structure and process that appropriately integrates all critical stakeholders and supports the execution of core capabilities. They are also in charge of supporting the capacity building and planning initiatives for communities and regions within the state.", score: 1},
			{text: "We must first establish and maintain a unified operational structure and process that supports the Integrated Disease Surveillance and Response (IDSR) framework.", score: 0.8},
			{text: "We must remain operational obviously.", reply: "When did you become so sarcastic?", score: 0.1},
		],
	},
	d3: {
		exec: function() { character = 'DCO Member 1' },
		text: "How about housing?",
		next: function() { return scenes.d4 },
		choices: [
			{text: "For housing, it’s necessary to implement housing solutions that effectively support the needs of a specific area in the community and contribute to its sustainability and resilience only for that specific area. The other areas can count on themselves.", score: 0.5},
			{text: "For housing, simply tell everyone to find a home.", reply: "Your leadership is an utter disappointment", score: 0},
			{text: "For housing, it’s necessary to implement housing solutions that effectively support the needs of the whole community and contribute to its sustainability and resilience. They support the development or redevelopment of housing including affordable and accessible housing in communities impacted by a disaster.", score: 1},
		],
	},
	d4: {
		text: "What shall do about health and social services?",
		next: function() { return scenes.d5 },
		choices: [
			{text: "For health and social services, we’ll be working to restoring and improving H&SS networks to promote the resilience, independence, health, and well-being of the whole community. They generally assists in the restoration of health and social service needs of communities impacted by a disaster.", score: 1},
			{text: "For health and social services, we’ll be working to promote the resilience, independence, health, and wellbeing of the specific area. It’s much easier to handle only a small portion of the community. The other areas will do fine.", score: 0.5},
			{text: "We shall do all but nothing.", reply: "I'll be sure to have you ousted immediately.", score: 0},
		],
	},
	d5: {
		text: "What about natural and cultural resources?",
		next: function() { return scenes.d6 },
		choices: [
			{text: "We’ll work to protect NCR and historic properties by going through the 5 core capabilities. They also assist in the protection and restoration of natural and cultural resources impacted by a disaster and subsequent recovery efforts, including environmentally sensitive areas and historically significant places.", score: 1},
			{text: "We’ll work to protect historic properties by going through effective practices and IDSR guidelines and standards.", score: 0.5},
			{text: "Protect my statue out front.", reply: "Haha, very funny.", score: 0},
		],
	},
	d6: {
		text: "Sorry to bother you again, but one last question. What we do for the infrastructure system?",
		next: function() { return scenes.d7 },
		choices: [
			{text: "That’s alright, there’s a lot to remember for this job. Our goal is to stabilize critical infrastructure functions, minimize health and safety threats, and efficiently restore and revitalize systems and services to support a viable, resilient community.", score: 1},
			{text: "That’s alright, there’s a lot to remember for this job. Our goal is to repair infrastructures, alert residents about the situation, and revitalize those critical damages in order to support the specific portion of that area.", score: 0.7},
			{text: "GET TRAINING.", reply: "LEARN SOME MANNERS.", score: 0},
		],
	},
	d7: {
		text: "Are there other priorities that I need to know?",
		next: function() { return scenes.d8 },
		choices: [
			{text: "Yes, a couple that you should keep in mind for now include: Restore the tax base and revenues to stable levels.  Restore schools, including Head Start schools, health services provided in schools and school lunch programs before the upcoming school year.  Reopen key industries and key sources of employment as soon as possible.  Implement mitigation principles and practices to enhance resiliency. Preserve and restore the natural and cultural resources of the community. Retain population and character of community.", score: 1},
			{text: "Yes, a couple that you should keep in mind for now include: keeping the families, especially yours safe, implementing mitigation principles and practices to enhance resilience, and restore the natural and cultural resources of the community. Do not worry about schools or lunch programs. Only focus on the resource.", score: 0.6},
			{text: "None that I know of.", score: 0},
		],
	},
	d8: {
		text: "What can voluntary, nonprofit organizations, or any agency helps us with?",
		next: function() { return scenes.d9 },
		choices: [
			{text: "Organizations can help us by helping individual and community needs assessments, inclusive case management training and support, accessible construction (repair/rebuild) support and coordination, support the establishment of an Individual Needs Recovery Committee, debris removal from private property,  grant assistance, resource identification and fundraising support, crisis counseling and/or emotional and spiritual care, youth focused resilience programs, support for faith leaders in impacted areas, coordination of spontaneous volunteers, donations management support, inclusive information and referral support; and nutrition assistance.", score: 1},
			{text: "The only thing they can help us is by only helping us restore construction and damaged areas of the city by rebuilding them.", score: 0.5},
			{text: "We don't need help. We are independent and autonomous.", score: 0},
		],
	},
	d9: {
		text: "Besides the professional agencies and nonprofit organizations, what are specific organizations that can help with some of the areas for the recovery section that I mentioned earlier (housing, operational coordination, etc.)?",
		next: function() { return scenes.d10 },
		choices: [
			{text: "The community planning and capacity building organizations include State Department of Community and Development, State Emergency Management Agency, etc. The whole list and their jobs are in our database.", score: 1},
			{text: "There aren’t many organizations. We mostly depend on Red Cross and volunteering organizations to help us get by.", score: 0.2},
			{text: "Like I said earlier, we don't need assistance.", reply: "Your horrible behavior will be reported.", score: 0},
		],
	},
	d10: {
		text: "Ah I see. I guess we have no time to waste. Time to start.",
		next: function() { return scenes.end },
		choices: [
			{text: "Of course, we should be proceeding with it now! Get on with your roles everyone!", score: 1},
			{text: "We have time to spare. Let’s get coffee.", score: 0.3},
			{text: "Time to not.", score: 0},
		],
	},
	c1: {
		text: "Dear, it's been three hours since a biological weapon has been exploited in Los Angeles! Everyone is panicking! The chaos and rioting have destroyed nearly everything - the roads, houses, and utilities, all of it! Not to mention, there won't be enough food for us until things settle down! What should we do?",
		next: function() { return scenes.c2 },
		choices: [
			{text: "We need to quickly calculate how many days we can live off of our current saving and stock up food and emergency supplies. We might as well hog as much of the commodities in the supermarket as possible. Sweetie, we are in a situation of life and death.", score: 0.4},
			{text: "We should probably just wait until things settle down. Shut all the windows and help me get this cabinet to blockade the front door.", score: 0.3},
			{text: "Join the mob! Let's go raid all the stores! My dreams of being in an apocalyptic movie have been fulfilled!", reply: "Are you out of your mind?", score: 0},
			{text: "First off, we need to use Catastrophic Door Hanger that the Los Angeles City Emergency Management Department has distributed to everyone. Since we're okay, we should hang it with the green side facing up.", reply: "That's a great idea!", score: 1},
		],
	},
	c2: {
		text: "Everyone in our neighborhood is confused and wondering what they should do next. Would there be more benefits to helping out our community?",
		next: function() { return scenes.c3 },
		choices: [
			{text: "Yes, there are more benefits to helping our community. Cooperation with 25-40 households will make the process of rebuilding our neighborhood faster!", reply: "I agree.", score: 1},
			{text: "No, we need to focus on our family first before we can aid others. It's every man for himself! After calculating the amount of days we can live off of our savings, we must devise an emergency plan now and map out the hazards in our area.", reply: "No. That's selfish. We must help. There are those who are less fortunate than us.", score: 0},
			{text: "Maybe, but I'm not taking initiative on this. Who knows what our crazy neighbor will do?", reply: "No. We need to take initiative.", score: 0.2},
		],
	},
	c3: {
		text: "How should we begin?",
		next: function() { return scenes.c4 },
		choices: [
			{text: "We should start by setting up a Disaster and Emergency Management Committee and defining the area we live in.", reply: "That sounds good.", score: 1},
			{text: "We should start by setting up a Search and Rescue Committee.", reply: "It's too early for that. We need a Disaster and Emergency Management Committee.", score: 0.3},
			{text: "We should start by setting up a Disaster and Emergency Management Committee and recruiting leaders right away.", reply: "Shouldn't we define our area first?", score: 0.5},
			{text: "We should start by throwing a party!", reply: "I don't appreciate your sassy attitude. We need to set up a Disaster and Emergency Management Committee.", score: 0},
		],
	},
	c4: {
		text: "But L.A. is so large and diverse, where do we even start?",
		next: function() { return scenes.c5 },
		choices: [
			{text: "We should immediately set up tents and help our neighbors by collecting essential supplies and resources they need.", reply: "Don't forget about consent!", score: 0.6},
			{text: "We should first determine whether everyone can speak English or not and identify who needs help. However, we must receive the consent of the people in our neighborhood before helping them.", score: 1},
			{text: "Right now, we should go around the neighborhood and gather people for the committee.", score: 0.7},
		],
	},
	c5: {
		text: "We live in L.A. This will take forever. We have over 100 households in this city. What should we do?",
		next: function() { return scenes.c6 },
		choices: [
			{text: "Fear not. We will leave those blocks to manage on their own. They'll figure out something. People always do.", reply: "You're full of horrible ideas today.", score: 0},
			{text: "Not to worry. We will set up sign-up sheets for any volunteers that would like to be the 'block captain' of their block. That way we do not have to knock on each door. These leaders will be put in our committee and we will manage meetings from there.", reply: "Great idea!", score: 1},
			{text: "We can just go around and see if people want to join.", reply: "That might not be the best idea.", score: 0.2},
		],
	},
	c6: {
		text: "Besides residents that volunteer, we should have experts and people with training to help us out. Who would have expertise in these situations?",
		next: function() { return scenes.c7 },
		choices: [
			{text: "The local block residents are enough. In fact, just having me is enough to fix this situation.", reply: "...", score: 0},
			{text: "We'll need the help of the police, fire department, translators, health care personnel, etcetera. Just to clarify, we should organize who is the incident commander, operations coordinator, logistics coordinator, and planning and intelligence coordinator. The incident commander is the leader responsible for what has to be done. Operation coordinators are in charge of carrying out these actions. Logistics coordinators are in charge of resources. The planning and intelligence coordinators monitor this information and plans for future activities. Oh! Make sure to have a materials, transportation, communications, neighbor information, and rescue progress team.", reply: "That's a lot, but it's definitely a good start", score: 1},
		],
	},
	c7: {
		exec: function(term) { fill_line(term); term.echo('1 day late after setting up sign-up sheets ...'); },
		text: "Wow, we had so many sign ups from each block in L.A.! They left their name and block that they want to manage. With this amount, each block will have 3-7 people to lead them. We should contact them later. Talk about cooperation! Now, the only problem is how we will cooperate and keep contact with them.",
		next: function() { return scenes.c8 },
		choices: [
			{text: "Pray and hope they have telepathy to connect with us and follow the right protocols.", reply: "There is no time to joke in this situation!", score: 0},
			{text: "We can have an in person meeting soon. They should have enough control of their respective blocks", reply: "We need a way to maintain constant contact.", score: 0.3},
			{text: "Talk with them in person and update them as much as possible in person. We should do this in a daily basis. If the internet works still, social media will definitely be useful in connecting with everyone.", score: 1},
		],
	},
	c8: {
		text: "Now, what should we have them take note of in their block first?",
		next: function() { return scenes.c9 },
		choices: [
			{text: "Each block unit should take note of their competence to survive in emergency situations.", reply: "I'm not sure the committee would appreciate your leadership.", score: 0.4},
			{text: "Each block unit should take note of their food supply, savings, and search for any endangered victims. Chap chap, we don't have any time to waste!", reply: "Don't be mean to me.", score: 0.4},
			{text: "Each block unit should take note of the number of homes, businesses, schools, churches, buildings, roads, exits, entrances, hills, waterways, people in the area, and liquefaction zones that may cause hazard.", score: 1},
		],
	},
	c9: {
		exec: function(term) { fill_line(term); term.echo('Day 1 of Emergency Preparedness and Management Committee Meeting ...'); character = 'Block Captain 1'; },
		text: "So I got your message that we must scout the area. How do we exactly do that?",
		next: function() { return scenes.c10 },
		choices: [
			{text: "Oh, am I supposed to answer that? Is that what a management leader is supposed to do? I don't know, figure that out yourself.", reply: "I think we need to have you impeached or something.", score: 0},
			{text: "Go around and assess the damage. Also, try to scavenge anything useful.", reply: "Shouldn't we follow L.A. protocols?", score: 0.2},
			{text: "I'm new at this, but last time I checked the the L.A. protocols, we are supposed to identify threats, rate the risk, assess the risk, determine the likelihood of occurrence and level of impact. Then, inspect on any specific hazards in the area like fires earthquakes, landslides, flooding, tsunamis, electricity, water, and telephone services, chemical emergencies, disease outbreak, extreme heat and cold, terrorist attack, severe weather, and local hazards. Dang, I have a good memory.", reply: "Got it.", score: 1},
		],
	},
	c10: {
		exec: function(term) { character = 'Communication Team & Neighbor Information Team' },
		text: "How about the neighborhood assets? Should we set up a chart for it? What should we keep in mind when investigating the blocks?",
		next: function() { return scenes.c11 },
		choices: [
			{text: "You know what, that sounds like a good idea. Attention everyone, I suggest that we set up charts to organize information. Ah, I'm such a genius for coming up with that.", reply: "Has anyone told you that you're really bad at leading?", score: 0},
			{text: "You don't have to worry too much. Do what you feel is the best.", reply: "I guess we'll come back if we need any clarification.", score: 0.1},
			{text: "Keep track of the buildings, organizations, radio clubs, neighborhood emergency supplies, disability service providers, hospitable buildings, carpentry services, plumbing services, crisis counseling, first aid and rescue teams, and businesses with emergency supplies. Keep an eye on any equipment that can be used for clearing any obstacle or evacuation resources like vehicles. List the contact information of these locations. Not only that, make a list of what block would most likely need what.", score: 1},
		],
	},
	c11: {
		exec: function(term) { character = 'Neighbor Information Team & Search and Rescue Team' },
		text: "Anything else needed before we start investigating our blocks?",
		next: function() { return scenes.c12 },
		choices: [
			{text: "If you see Rick Grimes from [[u;;]The Walking Dead], make sure to recruit him. Did you see him in [[u;;]The Walking Dead]? His survival skills are OP. We could use a guy like him.", reply: "We'll be leaving now.", score: 0},
			{text: "Your teams will probably need some supplies if you guys are travelling far.", reply: "Okay.", score: 0.2},
			{text: "Map your block. Sketch the streets, blocks, houses barriers, lots, and entrances and exit routes that are accessible by foot, wheelchair, or car. If there's internet and electricity available in your area, print out the map instead.  Include a meeting place that you may like any of us to gather around. Check any neighbors that need extra help and include the location of the Neighborhood Care Center. That information will come in handy.", reply: "That's a lot to remember. It's good that our leader knows this.", score: 1},
		],
	},
	c12: {
		exec: function(term) { character = 'Communication Team' },
		text: "Question about the gathering place. There are so many places we can gather, how can we narrow it to just one?",
		next: function() { return scenes.c13 },
		choices: [
			{text: "Intuition is the answer to all.", reply: "No... We'll go find a safe and convenient area - with intention and not intuition.", score: 0},
			{text: "The location will depend on you. As long as it's not crowded, I'm good. I'm agoraphobic.", reply: "It would probably help if you could be more specific next time.", score: 0.3},
			{text: "Choose a location that is huge, conspicuous, convenient, safe from obstacles, near facilities, well-lit, and accessible to a variety of people. Same goes for selecting a triage area, which is where we can treat people.", score: 1},
		],
	},
	c13: {
		exec: function(term) { character = 'Operations Coordinators' },
		text: "I have a question before we all finish this meeting. Now that we have a set plan of what we're searching for, what are some useful organizations that we should notify people on in case of any further dangers?",
		next: function() { return scenes.end },
		choices: [
			{text: "Just to name a few, the American Red Cross Prepare SoCal, City of Los Angeles Department on Disability, City of Los Angeles Emergency Door Hanger, Emergency Survival Program, Los Angeles Fire Department, Los Angeles Police Department, CERT, Salvation Army, FEMA, General Government Assistance, and U.S Department of Housing and Urban Development! Quite the list there! Now, ready to initiate? I challenge each one of you to complete this task efficiently, since I know you all had guts to take these positions. Let's start! ", score: 1},
			{text: "Forget about organizations. How about we visit Disneyland or something? That'll save our residents from the danger of boredom. Anyway, let's just wrap this meeting up and start! Before we start, let's pray that we don't get harmed or injured during the process... Now, let's go!", score: 0},
		],
	},
	end: {
		exec: function(term) { fill_line(term); term.echo('You scored [[b;#76FF03;]' + uscore.toFixed(2) + '] out of [[b;#76FF03;]' + utotal + '].'); term.echo('Game has ended. Type "restart" to restart the game.'); fill_line(term); },
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
		run: function(term) { term.echo('&copy; 2015 Project Z\nMade using JQuery Terminal Emulator (under GNU LGPL3)\nAll other source code licensed under the MIT license.'); },
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

function char_prefix(text) {
	var builder = '';
	if (character) {
		builder += '[[b;#76FF03;]' + character + ':] ';
	}
	return builder + text;
}

function start_scene(term) {
	if (current.hasOwnProperty('exec')) {
		current.exec(term);
	}
	if (current.hasOwnProperty('text')) {
		fill_line(term);
		term.echo(char_prefix(current.text));
	}
	if (current.hasOwnProperty('choices')) {
		current.choices = shuffle(current.choices);
		
		for (var i = 0; i < current.choices.length; i++) {
			term.echo('[[b;#76FF03;]' + String(i + 1) + ':] ' + current.choices[i].text);
		}
	}
}

function end_scene(choice, term) {
	var change = current;
	
	if (change.hasOwnProperty('choices')) {
		if (change.choices[choice].hasOwnProperty('score')) {
			utotal += 1;
			uscore += change.choices[choice].score;
		}
		if (change.choices[choice].hasOwnProperty('exec')) {
			change.choices[choice].exec();
		}
		if (change.choices[choice].hasOwnProperty('reply')) {
			term.echo(char_prefix(change.choices[choice].reply));
		}
	}
	
	if (change === current && current.hasOwnProperty('next')) {
		current = current.next();
	}
}

var slide, uscore, utotal, current, character, twidth;

function create_terminal() {
	slide = 0, uscore = 0, utotal = 0, current = null, character = null;

	$('<div id="terminal" class="terminal"></div>').prependTo('.terminal-wrapper');

	$('#terminal').terminal(function(command, term) {
		twidth = term.cols();
		command = command.toLowerCase();
		
		try {
			if (commands.hasOwnProperty(command)) {
				commands[command].run(term);
			}
			else if (current && current.hasOwnProperty('choices') && current.choices.length >= parseInt(command) && parseInt(command) > 0) {
				end_scene(parseInt(command) - 1, term);
				start_scene(term);
			}
			else if (!current && command) {
				term.error('Game has not been started! Enter "start" to begin the game or "help" to see the help text.');
			}
			else {
				term.error('Invalid selection/command "' + command + '". Type "help" to show the help screen.');
			}
		} catch (e) {
			console.log(e);
			term.error('Fatal Error. Please refresh the page.');
		}
		
		$('.terminal-wrapper').scrollTop($('.terminal-wrapper').prop("scrollHeight"));
	}, {
		greetings: 	'[[bgu;#76FF03;]Welcome to S.O.S.]\n' +
					'This is a game of decisions. Choose the best response if one exists.\n' +
					'Type "start" to start the game and "help" at anytime to show the help screen.\n' +
					'',
		name: 'S.O.S.',
		exit: false,
		clear: false,
		onBlur: function() { return false; },
		onInit: function(term) { term.resize(); },
		keydown: function() { $('.terminal-wrapper').scrollTop($('.terminal-wrapper').prop("scrollHeight")); },
		prompt: '> '});
}

$(document).ready(function() {
	create_terminal();
});