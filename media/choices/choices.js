var scenes = {
	start: {
		text: 'Choose your character.', 
		choices: [
			{text: 'Resident (male)', exec: function() { character = 'Wife'; current = scenes.c1; } },
			{text: 'Resident (female)', exec: function() { character = 'Husband'; current = scenes.c1; } },
			{text: 'Distric Council Office (DCO)', exec: function() { character = 'DCO Member 2'; current = scenes.d1; } },
			{text: 'Infrastructure Committee Member (ICM)', exec: function() { character = 'Nurse'; current = scenes.i1; } },
		],
	},
	i1: {
		exec: function(term) { fill_line(term); term.echo("[[i;;]Many months after the bioterrorist attack. You are in the hospital.]"); },
		text: 'You have finally woken up. Thank goodness, we can’t afford to lose any more people after that bioterrorist attack, especially someone from the infrastructure committee.',
		next: function() { return scenes.i2 },
		choices: [
			{text: "Excuse me, can you fill me in what happened?", reply: "Of course. It was a tragic event where a bioterrorist attack has been launched at this city, Los Angeles. Since our city is internationally known, it was a vulnerable and easy target for the terrorists. Sadly, bombs were dropped down ... destroying much of the city’s infrastructure and a disease started spreading ... it was sad ... and to think this could all have been prevented if ...", score: 1},
		],
	},
	i2: {
		exec: function(term) { character = 'ISCM 2'; fill_line(term); term.echo("[[i;;]Infrastructure System Committee Member 2 (ISCM 2) knocks.]"); fill_line(term); term.echo("[[b;#76FF03;]ISCM 2:] I’m a visitor. I can explain from there. Thank you."); fill_line(term); term.echo("[[i;;]Nurse leaves.]"); },
		text: "It’s great to see you. There has a lot of things that happened. Let’s continue. Hundreds and thousands of lives were at stake. This city is already crowded with 3 million people, so of course a lot died. The nurse is right, this could have been prevented. Can you guess how it could have been prevented?",
		next: function() { return scenes.i3 },
		choices: [
			{text: "Umm ... better communication and infrastructure?", reply: "Right. Communication and infrastructure.", score: 1},
			{text: "I’m sorry, I don’t know. Can you tell me?", reply: "Communication and infrastructure.", score: 0.5},
		],
	},
	i3: {
		text: "If both were adequate and better operated, this could have prevented the casualties lost from this attack and epidemic. I said earlier that 3 million people alone reside in this city. Well that brings consequences. What consequences do you think a population of over 3 million can bring?",
		next: function() { return scenes.i4 },
		choices: [
			{text: "It leads to a complex and variety of networks for infrastructure, which increases the likelihood that one single system may be malfunctioned and disrupts all the other networks.", reply: "That is correct.", score: 1},
			{text: "It leads to unsanitary conditions, overpopulation, and lack of resources.", reply: "Not quite. It brings a complex network for infrastructure.", score: 0.5},
		],
	},
	i4: {
		text: "This network branches out where one snap can disconnect the network for a whole city or neighborhood. Indeed, everything has its ups and downs. Like 9/11, communication failures resulted in the loss of 300 firefighters. Not just in America, but in 1955 of Kobe, Japan, communication failures prevented outsiders from receiving timely information about the severity of damage. Think of all the people that had to stay homeless, while waiting for relief. First off you should be aware of the 3 primary causes for communication failure, what are they?",
		next: function() { return scenes.i5 },
		choices: [
			{text: "Physical destruction of network components, disruption in supporting network infrastructure, and network congestion.", reply: "Yes.", score: 1},
			{text: "Power outage, network congestion, and lack of communication between the government and residents.", reply: "No.", score: 0.5},
		],
	},
	i5: {
		text: "As you know, the destruction of network components dates back all the way to the destruction of the telegraph during the U.S. Civil War. Back to 9/11, there was a disconnection in lower Manhattan due to the damage of the telephone routing hub near the World Trading Center. Furthermore, the underground shooting for the Internet communications in 2001 led to a disruption in the New York railroad system. Thankfully, we did not have this problem occur again with this bioterrorism attack thanks to advanced technology. What do you think has improved in terms of networking that had prevented further physical damage to our networks?",
		next: function() { return scenes.i6 },
		choices: [
			{text: "We now have wireless networking, which reduces the vulnerability of wired network. Now, the television, radio, and cellular wireless networks only reduces service in a small area rather than a whole community, which was shown when McCaw Cellular lost only 2 of its 400 cell sites in the Northridge earthquake.", score: 1},
			{text: "We have the Internet, which has allowed residents to be alerted quicker through the media and communicate with authorities faster.", score: 0.5},
		],
	},
	i6: {
		text: "Now onto my second point, telecommunications also rely on its supporting local/regional technical systems. Can you name some systems?",
		next: function() { return scenes.i7 },
		choices: [
			{text: "Electrical systems is one.", reply: "Correct.", score: 1},
			{text: "Water systems is one.", reply: "No. Water is not a technical system. Electrical is.", score: 0.5},
		],
	},
	i7: {
		text: "Electrical systems are important. They should always have backup in case of an outage or when the community is in short of supply. Without electricity, it’ll be hard to utilize cellular services, since they’re dependent on the energy source. And before you ask, this was also not a major problem in this attack. We came prepared with backup. The Loma Prieta earthquake that erupted in Northern California had 154 central offices that failed, and 6 out of 154 back-up systems in 1989 did not work. However, you know what did work?",
		next: function() { return scenes.i8 },
		choices: [
			{text: "Let me guess, amateur radios? No way right?", reply: "You're actually correct. Amazing right?", score: 1},
			{text: "Let me guess, telephone booths? No way right?", reply: "No. The amateur radios worked. Amazing right?", score: 0.5},
		],
	},
	i8: {
		text: "That just proves how old technology can be utilized in the future as emergency tools. Congestion of the networks can also cause a disruption in communications. The bioterrorism attack did cause a lot of panic, which led to the clogging of networks. Sadly history repeated itself. In 1994 after the Northridge earthquake, Los Angeles had networks clogged and lots of equipment failures, which made it difficult to communicate. But, even with the advanced technology, history still repeats itself. What technology do you think advanced here?",
		next: function() { return scenes.i9 },
		choices: [
			{text: "There is an upgrade in cellular companies where they have improved their circuits for outbound calls where long-distance carriers were able to provide residents affected areas with the ability to notify loved ones of their whereabouts and status. These calls prevent additional congestion.", reply: "Yes.", score: 1},
			{text: "There have been more employees in the telecommunications industry, which allows more authorities to reach the complaints of people more.", reply: "Only partially.", score: 0.5},
		],
	},
	i9: {
		text: "With a widespread use of untested technologies and technology implemented at peak load levels well beneath the demands placed on them during disasters, congestion is a common cause. Since terrorists cause panic for congestion and physically attack these networks, it has become a problem in situations like the bioterrorist attack. However, we now established a priority access network for officials called the Government Emergency Telecommunications Service (GETS). However, what can all these 3 cause?",
		next: function() { return scenes.i10 },
		choices: [
			{text: "Paralyzing official responses, challenging containment, delaying mobilization of broader relief efforts, and asymmetry in information flowing into and out of the affected area.", score: 1},
			{text: "There’s more? I thought those were enough for consequences.", reply: "There were actually 3 more.", score: 0.5},
		],
	},
	i10: {
		text: "Despite that, we recover by clearing debris and the roadways so basic access can be conducted using messengers and face to face instruction. Furthermore, it will allow telecommunications with greater control, more accurate status reporting, and better cooperation and integration of the efforts of others. Plus, the new technology has allowed broken links to restore itself immediately. Now, you should know that basic transportation and telecommunications as well as WIFI should be restored as well in order to reduce the stress that threatens a person’s security in times of an emergency disaster. However, now wide ranges of point-to point wireless patches can be deployed to a central system and be used as a backup by authorities. After 9/11, many tried to establish a rooftop mesh of wireless links that would help others communicate as well. Now with all I said, other factors involving the federal government also lead to an unsuccessful operation of recovery. What are these factors?",
		next: function() { return scenes.i11 },
		choices: [
			{text: "They only address the emergency communications needs of official responders only. Furthermore, they focus only on the emergency response phase, and ignore communications needs during the rest of the long recovery process, while relying too heavily on new technologies that are untested in disasters and ignoring new technologies and practices that emerge from the ground-up during disasters. Plus, they don’t adequately anticipate extremely large, high-consequence disasters.", score: 1},
			{text: "They spend too much money on operations and items they do not need for recovery.", reply: "Not really.", score: 0.5},
		],
	},
	i11: {
		text: "Now to tie things together, what is a new plan for urban infrastructure and communications, which should be implemented for future generations?",
		next: function() { return scenes.i12 },
		choices: [
			{text: "Preparing the private sector and NGOs for disaster communications, improving the reliability of public networks, leveraging new communication technologies and practices risk management, telecommunications and urban decentralization, rethinking public warning systems, and modernizing the amateur radio service, while improving technology to prepare in emergency situations.", score: 1},
			{text: "Just improving technology so that it can act as a backup and prepare in emergencies better.", score: 0.5},
		],
	},
	i12: {
		text: "Well, despite our mistake on the clogging the network and causing congestion, we’ll learn. Are you ready to go back to your job and help fix this as an infrastructure committee member? It might take 1-2 weeks for complete reconstruction, but redevelopment might take a couple years.",
		next: function() { return scenes.end },
		choices: [
			{text: "Of course! Count me in!", score: 1},
			{text: "No, it’s too much responsibility. I’m going to head back into sleep!", score: 0},
		],
	},
	d1: {
		exec: function(term) { fill_line(term); term.echo("[[b;#76FF03;]Department of Homeland Security:] A bioterrorist attack has just been launched to the city of L.A.! Quickly alert this for national headlines! Contact Los Angeles’ District Council Office now! Contact health facilities and get on the report, there’s a huge risk to an epidemic coming due to the biological agents launched. There’s enough damage from just their bombs, but biological agents too!\n[[b;#76FF03;]DCO Member 1:] Department of Homeland Security has just reminded us about the attack. Everyone proceed with the recovery portion from the 5 core capabilities in order to successfully rebuild L.A's infrastructure!\n[[b;#76FF03;]DCO Member 2:] Sorry, I’m new at the office. What are the 5 core capabilities again?"); },
		next: function() { return scenes.d2 },
		choices: [
			{text: "The 5 core capabilities are prevention, protection, mitigation, response, and recovery. Now, let’s focus on housing, operational coordination, health and social services, natural and cultural resources, and infrastructure system.", reply: "Got it.", score: 1},
			{text: "The 0.5 core capabilities are preparedness, prevention, protection, response, and recovery. Now, let’s focus on housing, operational coordination, health and social services, natural and cultural resources, and infrastructure system.", reply: "Got it...", score: 1},
			{text: "I'm not too sure. However, you can find it in our database.", reply: "Okay. I'll look it up I guess.", score: 0.3},
			{text: "You didn't get enough training did you? Horrific how they send people like you here nowadays.", reply: "I guess not ...", score: 0.1},
		],
	},
	d2: {
		text: "For operational coordination, what must we do?",
		next: function() { return scenes.d3 },
		choices: [
			{text: "We must first establish and maintain a coordinated operational structure and process that appropriately integrates all critical stakeholders and supports the execution of the capabilities. We are also in charge of the building and planning initiatives for the communities.", score: 1},
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
			{text: "For health and social services, we’ll be working to restoring and improving networks to promote the resilience, independence, health, and wellbeing of the whole community. Our job is also to focus on providing social and health services in a crisis such as this.", score: 1},
			{text: "For health and social services, we’ll be working to promote the resilience, independence, health, and wellbeing of the specific area. It’s much easier to handle only a small portion of the community. The other areas will do fine.", score: 0.5},
			{text: "We shall do all but nothing.", reply: "I'll be sure to have you ousted immediately.", score: 0},
		],
	},
	d5: {
		text: "What about natural and cultural resources?",
		next: function() { return scenes.d6 },
		choices: [
			{text: "We’ll work to protect historic properties by going through the 5 core capabilities to preserve, conserve, rehabilitate, and restore them with post-disaster community priorities and effective practices. We also assist in the protection and restoration of natural and cultural resources impacted by a disaster.", score: 1},
			{text: "We’ll work to protect historic properties by going through effective practices and IDSR guidelines and standards.", score: 0.5},
			{text: "Protect my statue out front.", reply: "Haha, very funny.", score: 0},
		],
	},
	d6: {
		text: "Sorry to bother you again, but one last question. What we do for the infrastructure system?",
		next: function() { return scenes.d7 },
		choices: [
			{text: "That’s alright, there’s a lot to remember for this job. Our goal is to stabilize critical infrastructure functions, minimize health and safety threats, and efficiently restore and revitalize systems and services to support a viable, resilient community.", score: 1},
			{text: "That’s alright. Our only goal is to focus on repairing infrastructures.", score: 0.7},
			{text: "GET TRAINING.", reply: "LEARN SOME MANNERS.", score: 0},
		],
	},
	d7: {
		text: "Are there other priorities that I need to know?",
		next: function() { return scenes.d8 },
		choices: [
			{text: "Yes, a couple that you should keep in mind for now include: Stabilize tax base and revenues. Restore schools and the services involved in schools such as lunch programs. Restore the industries and sources for employment as soon as possible. Implement mitigation principles and practices to enhance resiliency. Restore the natural and cultural resources of the community.", score: 1},
			{text: "Yes, a couple that you should keep in mind for now include: keeping the families, especially yours safe and restore the natural and cultural resources of the community. Do not worry about schools or lunch programs. Only focus on the resources.", score: 0.6},
			{text: "None that I know of.", score: 0},
		],
	},
	d8: {
		text: "What can voluntary, nonprofit organizations, or any agency helps us with?",
		next: function() { return scenes.d9 },
		choices: [
			{text: "Organizations can help us by helping individuals and a community with its needs.  They should provide training and support, accessible construction (repair/rebuild) support and coordination, support the establishment of an Individual Needs Recovery Committee, and help remove debris from private property. Not only that, they should provide grant assistance, resource identification and fundraising support, crisis counseling or emotional and spiritual care, youth focused resilience programs, coordination of spontaneous volunteers, donations management support, and nutrition assistance. ", score: 1},
			{text: "The only thing they can help us is by only helping us restore construction and damaged areas of the city by rebuilding them.", score: 0.5},
			{text: "We don't need help. We are independent and autonomous.", score: 0},
		],
	},
	d9: {
		text: "Besides the professional agencies and nonprofit organizations, what are specific organizations that can help with some of the areas for the recovery section that I mentioned earlier (housing, operational coordination, etc.)?",
		next: function() { return scenes.d10 },
		choices: [
			{text: "The community planning and capacity building organizations include State Department of Community and Development, State Emergency Management Agency. Economic deals with the recovery and enhancement of businesses and other economic assets in communities impacted by a disaster. Some organizations for them include Economic Development Agency and Department of Tourism, State Agriculture Department. Health & Social Services have organizations such as State Department of Health. Housing has organizations like State Department of Housing and State Affordable Housing Advisory Board. The infrastructure system supports localities in the redevelopment of critical infrastructure damaged or destroyed during a disaster, and they have organizations that include State Department of Public Utilities and State Department of Transportation. Lastly, the natural and cultural systems have organizations such as State Department of Environmental Protection, State Historic Preservation Office, Tribal Historic Preservation Offices, and Tribal Natural and Environmental Office.", score: 1},
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
		text: "Dear, it’s been three hours, since a biological weapon has been exploited in Los Angeles! Everyone is panicking! Everything has been destroyed-the roads, houses, and utilities, all of it! There appears to be rumors of an epidemic spreading. Not to mention, there won’t be enough food to satisfy the demand of everyone until our houses are fixed and we get back to working! What should we do?",
		next: function() { return scenes.c2 },
		choices: [
			{text: "First off, we need to quickly calculate how many days we can live off of our current saving and stock up food and emergency supplies.  We might as well hog as much of the commodities in the supermarket as possible. Sweetie, we are in a situation of life and death.", score: 0.4},
			{text: "We should probably just wait until things settle down. Shut all the windows and help me get this cabinet to blockade the front door.", score: 0.3},
			{text: "Join the mob! Let's go raid all the stores! My dreams of being in an apocalyptic movie have been fulfilled!", reply: "Are you out of your mind?", score: 0},
			{text: "First off, we need to use Catastrophic Door Hanger that the Los Angeles City Emergency Management Department has distributed to everyone. Since we're okay, we should hang it with the green side facing up.", reply: "That's a great idea!", score: 1},
		],
	},
	c2: {
		text: "Everyone in our neighborhood is confused and wondering what they should do next. Would there be more benefits to helping out our community?",
		next: function() { return scenes.c3 },
		choices: [
			{text: "Yes, there are more benefits to helping our community. Cooperation with 25-40 households will make the process of rebuilding our neighborhood faster! We should set up a disaster and emergency management committee.", reply: "I agree.", score: 1},
			{text: "No, we need to focus on our family first before we can aid others. It’s every man for himself! After calculating the amount of days we can live off of our savings, we must devise an emergency plan now and map out the hazards in our area.", reply: "I think we need to contribute to the community.", score: 0},
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
			{text: "Not to worry. We will leave those blocks to manage on their own. They’ll figure out something.", reply: "You're full of horrible ideas today.", score: 0},
			{text: "Not to worry. We will set up sign-up sheets for any volunteers that would like to be the 'block captain' of their block. That way we do not have to knock on each door. These leaders will be put in our committee and we will manage meetings from there.", reply: "Great idea!", score: 1},
			{text: "We can just go around and see if people want to join.", reply: "That might not be the best idea.", score: 0.2},
		],
	},
	c6: {
		text: "Besides residents that volunteer, we should have experts and people with training to help us out. Who would have expertise in these situations?",
		next: function() { return scenes.c7 },
		choices: [
			{text: "The local block residents are enough. In fact, just having me is enough to fix this situation.", reply: "...", score: 0},
			{text: "Police, fire department, military, translators, health care personnel, neighborhood watch, neighborhood councils, human services, clergy members, business leaders, Community Emergency Response Teams (CERT),and anyone who has experience with caring for disabilities. Just to clarify, we should organize who is the incident commander, operations coordinator, logistics coordinator, and planning and intelligence coordinator. The incident commander is the leader responsible for what has to be done. Operation coordinators are in charge of carrying out these actions. Logistics coordinators are in charge of resources. The planning and intelligence coordinators monitor this information and plans for future activities. Oh! Make sure to have a materials, transportation, communications, neighbor information, and rescue progress team.", reply: "That's a lot, but it's definitely a good start", score: 1},
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