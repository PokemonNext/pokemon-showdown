// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	// Pokemon Next Format
	///////////////////////////////////////////////////////////////////
	{
		section: "Pokemon Next",
	},
	{
		name: "[Gen 9] Pokemon Next Singles",
		mod: 'gen9pokemonnext',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Pokemon Next Doubles",
		mod: 'gen9pokemonnext',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Shadow Tag'],
	},
	// S/V Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Singles",
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712619/">Random Battle Suggestions</a>`,
		],

		mod: 'gen9',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Unrated Random Battle",

		mod: 'gen9',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Free-For-All Random Battle",

		mod: 'gen9',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Random Battle (Blitz)",

		mod: 'gen9',
		team: 'random',
		ruleset: ['[Gen 9] Random Battle', 'Blitz'],
	},
	{
		name: "[Gen 9] Multi Random Battle",

		mod: 'gen9',
		team: 'random',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod',
		],
	},
	{
		name: "[Gen 9] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3732644/">SV OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712513/">SV OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3732813/">SV OU Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3732719/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3724082/">Ubers Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard'],
		banlist: ['AG', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3728797/">UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729854/">UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3720278/">UU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 9] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725482/">RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729823/">RU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717072/">RU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] UU'],
		banlist: ['UU', 'RUBL', 'Light Clay'],
	},
	{
		name: "[Gen 9] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715408/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729943/">NU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730216/">NU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] RU'],
		banlist: ['RU', 'NUBL', 'Quick Claw'],
	},
	{
		name: "[Gen 9] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729623/">PU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719989/">PU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] NU'],
		banlist: ['NU', 'PUBL', 'Damp Rock'],
	},
	{
		name: "[Gen 9] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710868/">Little Cup Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712989/">Little Cup Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712664/">Little Cup Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Cutiefly', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Flittle', 'Gastly', 'Girafarig', 'Gligar',
			'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Snivy', 'Stantler', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3727849/">Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3727976/">Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3729937/">Monotype Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Blaziken', 'Deoxys-Base', 'Deoxys-Attack',
			'Dialga', 'Dialga-Origin', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Base',
			'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Booster Energy', 'Damp Rock', 'Focus Band',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Acupressure', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712857/">SV CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3718107/">SV CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714023/">SV CAP Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 9] BSS Reg G",

		mod: 'gen9',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Custom Game",

		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Doubles",
	},
	{
		name: "[Gen 9] Random Doubles Battle",

		mod: 'gen9',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710876/">Doubles OU Sample Teams</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Shadow Tag'],
	},
	{
		name: "[Gen 9] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712864/">Doubles Ubers</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 9] Doubles UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712825/">Doubles UU</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Doubles OU', 'Evasion Abilities Clause'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 9] Doubles LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710957/">Doubles LC</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup', 'Sleep Clause Mod'],
		banlist: ['Basculin-White-Striped', 'Dunsparce', 'Duraludon', 'Gligar', 'Murkrow', 'Qwilfish-Hisui', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Vulpix', 'Vulpix-Alola', 'Yanma'],
	},
	{
		name: "[Gen 9] VGC 2023 Reg D",

		mod: 'gen9predlc',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets'],
		banlist: ['Walking Wake', 'Iron Leaves'],
	},
	{
		name: "[Gen 9] VGC 2024 Reg F",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets'],
		banlist: [],
	},
	{
		name: "[Gen 9] VGC 2024 Reg F (Bo3)",

		mod: 'gen9',
		gameType: 'doubles',
		challengeShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3'],
		banlist: [],
	},
	{
		name: "[Gen 9] VGC 2024 Reg G",

		mod: 'gen9',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] VGC 2024 Reg G (Bo3)",

		mod: 'gen9',
		gameType: 'doubles',
		challengeShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Unofficial Metagames",
	},
	{
		name: "[Gen 9] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710864/">1v1 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712375/">1v1 Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Terastal Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause', '!Sleep Clause Mod',
		],
		banlist: [
			'Arceus', 'Archaludon', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Cinderace', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed',
			'Dialga', 'Dialga-Origin', 'Dragonite', 'Eternatus', 'Flutter Mane', 'Gholdengo', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Meloetta', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Cornerstone', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Scream Tail', 'Shaymin-Sky',
			'Snorlax', 'Solgaleo', 'Terapagos', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Focus Band', 'Focus Sash',
			'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Acupressure', 'Perish Song',
		],
	},
	{
		name: "[Gen 9] 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710849/">2v2 Doubles</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: [
			'Picked Team Size = 2', 'Max Team Size = 4',
			'Standard Doubles', 'Accuracy Moves Clause', 'Terastal Clause', 'Sleep Clause Mod', 'Evasion Items Clause',
		],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Iron Hands', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu', 'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Commander', 'Moody', 'Focus Sash', 'King\'s Rock', 'Razor Fang', 'Ally Switch', 'Final Gambit',
			'Perish Song', 'Swagger',
		],
	},
	{
		name: "[Gen 9] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3722196/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3724219/">AG Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3727176/">AG Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['Min Source Gen = 9', 'Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 9] Ubers UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3731761/">Ubers UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3731754/">Ubers UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3731755/">Ubers UU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] Ubers'],
		banlist: [
			// Ubers OU
			'Arceus-Base', 'Arceus-Fairy', 'Arceus-Ground', 'Calyrex-Ice', 'Clodsire', 'Deoxys-Attack', 'Eternatus', 'Flutter Mane',
			'Giratina-Origin', 'Glimmora', 'Gliscor', 'Grimmsnarl', 'Groudon', 'Hatterene', 'Ho-Oh', 'Iron Bundle', 'Kingambit',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Miraidon', 'Necrozma-Dusk-Mane', 'Rayquaza', 'Ribombee', 'Skeledirge', 'Ting-Lu',
			'Zacian-Crowned',
			// Ubers UUBL
			'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Water', 'Lunala', 'Shaymin-Sky', 'Zekrom',
		],
	},
	{
		name: "[Gen 9] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719022/">ZU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 9] Free-For-All",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711724/">Free-For-All</a>`,
		],

		mod: 'gen9',
		gameType: 'freeforall',
		rated: false,
		tournamentShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod', '!Evasion Items Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin',
			'Dondozo', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Koraidon', 'Kyogre',
			'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame',
			'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu',
			'Urshifu-Rapid-Strike', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Toxic Chain', 'Toxic Debris', 'Acupressure', 'Aromatic Mist',
			'Baton Pass', 'Coaching', 'Court Change', 'Decorate', 'Dragon Cheer', 'Final Gambit', 'Flatter', 'Floral Healing', 'Follow Me', 'Heal Pulse',
			'Last Respects', 'Malignant Chain', 'Poison Fang', 'Rage Powder', 'Spicy Extract', 'Swagger', 'Toxic', 'Toxic Spikes',
		],
	},
	{
		name: "[Gen 9] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711750/">LC UU Metagame Discussion</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] LC'],
		banlist: [
			'Chinchou', 'Diglett-Alola', 'Elekid', 'Foongus', 'Glimmet', 'Gothita', 'Grimer-Alola', 'Grookey', 'Growlithe-Hisui', 'Impidimp',
			'Koffing', 'Magby', 'Mareanie', 'Mienfoo', 'Minccino', 'Mudbray', 'Pawniard', 'Sandshrew-Alola', 'Shellder', 'Shellos', 'Snubbull',
			'Stunky', 'Timburr', 'Tinkatink', 'Toedscool', 'Trapinch', 'Voltorb-Hisui', 'Vullaby',
		],
	},
	{
		name: "[Gen 9] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710638/">NFE</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712567/">NFE Resources</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard OMs', 'Not Fully Evolved', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Basculin-White-Striped', 'Bisharp', 'Chansey', 'Dipplin', 'Duraludon', 'Gurdurr', 'Haunter', 'Magmar', 'Magneton', 'Porygon2', 'Primeape',
			'Qwilfish-Hisui', 'Rhydon', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Ursaring', 'Vulpix-Base', 'Arena Trap', 'Magnet Pull', 'Shadow Tag',
			'Baton Pass',
		],
	},

	// Pet Mods
	///////////////////////////////////////////////////////////////////

	{
		section: "Pet Mods",
	},
	{
		name: "[Gen 9] Do Not Use",
		desc: `A National Dex solomod where only Pok&eacute;mon with 280 BST or less are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3734326/">Do Not Use</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Terastal Clause', 'Z-Move Clause'],
		banlist: ['Dewpider', 'Diglett-Alola', 'Flittle', 'Nidoran-M', 'Smeargle', 'Wingull', 'Wishiwashi', 'Zigzagoon-Base', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Baton Pass'],
		onBegin() {
			this.add('-message', `Welcome to Do Not Use!`);
			this.add('-message', `This is a National Dex metagame where only Pokemon with less than 280 BST are allowed, plus a select few others!`);
			this.add('-message', `You can find our thread and metagame resources here:`);
			this.add('-message', `https://www.smogon.com/forums/threads/3734326/`);
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.bst > 280 && !['Luvdisc', 'Unown', 'Capsakid', 'Snorunt'].includes(species.baseSpecies)) {
				return [`Only Pok\u00e9mon with a BST of 280 or lower are allowed.`, `(${species.name}'s BST is ${species.bst}.)`];
			}
		},
	},
	{
		name: "[Gen 2] Modern Gen 2",
		desc: `A Gen 2 solomod where all Pok&eacute;mon and moves from future generations are legal.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725808/">Modern Gen 2</a>`,
		],

		mod: 'moderngen2',
		ruleset: ['Standard', 'Useless Items Clause', 'Useless Moves Clause', 'MG2 Mod', 'Sleep Moves Clause', '+No Ability', '-All Abilities'],
		banlist: ['AG', 'Uber', 'Fake Out', 'Shell Smash', 'Last Respects', 'Baton Pass', 'Alakazite', 'Soul Dew'],
	},

	// Draft League
	///////////////////////////////////////////////////////////////////

	{
		section: "Draft",
		column: 1,
	},
	{
		name: "[Gen 9] Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard Draft', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] Tera Preview Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] 6v6 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Draft', '!Sleep Clause Mod', '!Evasion Clause', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] 4v4 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Standard Draft', 'Item Clause', 'VGC Timer', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Clause', 'Adjust Level = 50', 'Picked Team Size = 4', 'Min Source Gen = 9'],
	},
	{
		name: "[Gen 9] NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard Draft', '+Unobtainable', '+Past'],
	},
	{
		name: "[Gen 9] Tera Preview NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] NatDex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] NatDex 6v6 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 9] 6v6 Doubles Draft', '+Unobtainable', '+Past', '!! Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex LC Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] NatDex Draft', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] Galar Dex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Draft', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] NatDex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Draft', 'Dynamax Clause', '+Past'],
	},
	{
		name: "[Gen 8] NatDex 4v4 Doubles Draft",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Draft', 'Item Clause', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Moves Clause', 'Adjust Level = 50', 'Picked Team Size = 4', '+Past'],
	},
	{
		name: "[Gen 7] Draft",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard Draft', '+LGPE'],
	},
	{
		name: "[Gen 6] Draft",

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard Draft', 'Moody Clause', 'Swagger Clause'],
		banlist: ['Soul Dew'],
	},

	// OM of the Month
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},
	{
		name: "[Gen 9] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and moves from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710953/">Cross Evolution</a>`,
		],

		mod: 'gen9',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Basculin-White-Striped', 'Duraludon', 'Kyogre', 'Miraidon', 'Scyther', 'Sneasel', 'Sneasel-Hisui', 'Ursaring', 'Arena Trap',
			'Huge Power', 'Pure Power', 'Shadow Tag', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Shed Tail',
		],
		restricted: ['Espathra', 'Frosmoth', 'Gallade', 'Lilligant-Hisui', 'Lunala', 'Solgaleo'],
		onValidateTeam(team) {
			const nums = new Set<number>();
			for (const set of team) {
				const name = set.name;
				const species = this.dex.species.get(name);
				if (nums.has(species.num)) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named after a form of '${species.name}')`,
					];
				}
				if (species.exists && species.name !== set.species) nums.add(species.num);
			}
			if (!nums.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp?.exists || !set.crossSpecies?.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkCanLearn(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (this.checkCanLearn(move, set.crossSpecies)) return problem;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.species.get(set.name);
			let problems = this.dex.formats.get('Obtainable Misc').onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossNonstandard = (!this.ruleTable.has('standardnatdex') && crossSpecies.isNonstandard === 'Past') ||
				crossSpecies.isNonstandard === 'Future';
			const crossIsCap = !this.ruleTable.has('+pokemontag:cap') && crossSpecies.isNonstandard === 'CAP';
			if (!crossSpecies.exists || crossNonstandard || crossIsCap) return this.validateSet(set, teamHas);
			const species = this.dex.species.get(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			const nonstandard = !this.ruleTable.has('standardnatdex') && species.isNonstandard === 'Past';
			const isCap = !this.ruleTable.has('+pokemontag:cap') && species.isNonstandard === 'CAP';
			if (!species.exists || nonstandard || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const item = this.dex.items.get(set.item);
			if (item.itemUser?.length) {
				if (!item.itemUser.includes(crossSpecies.name) || crossSpecies.name !== species.name) {
					return [`${species.name} cannot use ${item.name} because it is cross evolved into ${crossSpecies.name}.`];
				}
			}
			const ability = this.dex.abilities.get(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.species.get(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable" &&
				!this.ruleTable.has('+unobtainable'));
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatID;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 9] Type Split",
		desc: `The Physical/Special split is reverted; All non-Status moves are Physical or Special depending on their type, no exceptions.`,
		threads: [
			`<b>Physical types:</b> <psicon type="Bug" /> <psicon type="Fighting" /> <psicon type="Flying" /> <psicon type="Ghost" /> <psicon type="Ground" /> <psicon type="Normal" /> <psicon type="Poison" /> <psicon type="Rock" /> <psicon type="Steel" />`,
			`<b>Special types:</b> <psicon type="Dark" /> <psicon type="Dragon" /> <psicon type="Electric" /> <psicon type="Fairy" /> <psicon type="Fire" /> <psicon type="Grass" /> <psicon type="Ice" /> <psicon type="Psychic" /> <psicon type="Water" />`,
			`<b>Dependent on the user's higher attacking stat:</b> <psicon type="Stellar" /><hr />&bullet; <a href="https://www.smogon.com/forums/threads/3740787/">Type Split</a>`,
		],

		mod: 'gen9',
		// searchShow: false,
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archaludon', 'Calyrex-Shadow', 'Chi-Yu', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Landorus-Base',
			'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Regieleki',
			'Reshiram', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Terapagos', 'Volcarona', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Arena Trap', 'Moody', 'Shadow Tag',
			'Bright Powder', 'Damp Rock', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		onModifyMovePriority: -1000,
		onModifyMove(move, pokemon, target) {
			if (move.category === 'Status') return;
			const specialTypes = ['Dark', 'Dragon', 'Electric', 'Fairy', 'Fire', 'Grass', 'Ice', 'Psychic', 'Water'];
			if (specialTypes.includes(move.type)) {
				move.category = 'Special';
			} else if (move.type === 'Stellar') {
				move.category = pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true) ? 'Physical' : 'Special';
			} else {
				move.category = 'Physical';
			}
		},
	},
	{
		name: "[Gen 9] Partners in Crime",
		desc: `Doubles-based metagame where both active ally Pok&eacute;mon share abilities and moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710997/">Partners in Crime</a>`,
		],

		mod: 'partnersincrime',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Cresselia', 'Darkrai', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Flutter Mane',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Smeargle', 'Solgaleo', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Contrary', 'Dancer', 'Huge Power', 'Moody', 'Pure Power', 'Serene Grace', 'Shadow Tag',
			'Bright Powder', 'King\'s Rock', 'Razor Fang', 'Ally Switch', 'Dragon Cheer', 'Last Respects', 'Revival Blessing', 'Swagger',
		],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.trackPP = new Map<string, number>();
			}
		},
		onBeforeSwitchIn(pokemon) {
			pokemon.m.curMoves = this.dex.deepClone(pokemon.moves);
			let ngas = false;
			for (const poke of this.getAllActive()) {
				if (this.toID(poke.ability) === ('neutralizinggas' as ID)) {
					ngas = true;
					break;
				}
			}
			const BAD_ABILITIES = ['trace', 'imposter', 'neutralizinggas', 'illusion', 'wanderingspirit'];
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.ability !== pokemon.ability) {
				if (!pokemon.m.innate && !BAD_ABILITIES.includes(this.toID(ally.ability))) {
					pokemon.m.innate = 'ability:' + ally.ability;
					if (!ngas || ally.getAbility().flags['cantsuppress'] || pokemon.hasItem('Ability Shield')) {
						pokemon.volatiles[pokemon.m.innate] = {id: pokemon.m.innate, target: pokemon};
						pokemon.m.startVolatile = true;
					}
				}
				if (!ally.m.innate && !BAD_ABILITIES.includes(this.toID(pokemon.ability))) {
					ally.m.innate = 'ability:' + pokemon.ability;
					if (!ngas || pokemon.getAbility().flags['cantsuppress'] || ally.hasItem('Ability Shield')) {
						ally.volatiles[ally.m.innate] = {id: ally.m.innate, target: ally};
						ally.m.startVolatile = true;
					}
				}
			}
		},
		// Starting innate abilities in scripts#actions
		onSwitchOut(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
		onFaint(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710568/">Almost Any Ability</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710571/">AAA Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragapult',
			'Enamorus-Base', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Iron Valiant',
			'Keldeo', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Noivern', 'Palkia', 'Palkia-Origin', 'Raging Bolt', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Slaking', 'Sneasler',
			'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Arena Trap', 'Comatose', 'Contrary',
			'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Toxic Debris',
			'Triage', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Revival Blessing', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710859/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712766/">BH Resources</a>`,
		],

		mod: 'gen9',
		ruleset: [
			'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause',
			'Endless Battle Clause', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Terastal Clause',
		],
		banlist: [
			'Calyrex-Shadow', 'Deoxys-Attack', 'Diancie-Mega', 'Gengar-Mega', 'Groudon-Primal', 'Kartana', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Rayquaza-Mega',
			'Regigigas', 'Shedinja', 'Slaking', 'Arena Trap', 'Comatose', 'Contrary', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Illusion', 'Innards Out',
			'Libero', 'Liquid Ooze', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Protean', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Baton Pass', 'Belly Drum', 'Ceaseless Edge', 'Dire Claw', 'Electro Shot', 'Fillet Away',
			'Imprison', 'Last Respects', 'Lumina Crash', 'Photon Geyser', 'Quiver Dance', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Substitute', 'Shell Smash',
			'Tail Glow',
		],
	},
	{
		name: "[Gen 9] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Restricted Pok&eacute;mon) depending on its position in the team. If there is no restricted Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710734/">Godly Gift</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3718065/">Godly Gift Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Sleep Moves Clause', 'Godly Gift Mod'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Koraidon', 'Miraidon', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag',
			'Swift Swim', 'Bright Powder', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Chi-Yu', 'Crawdaunt', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Espathra', 'Eternatus',
			'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gliscor', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Iron Bundle', 'Kingambit', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin',
			'Rayquaza', 'Regieleki', 'Reshiram', 'Shaymin-Sky', 'Smeargle', 'Solgaleo', 'Terapagos', 'Toxapex', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Volcarona', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
		],
	},
	{
		name: "[Gen 9] Inheritance",
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712296/">Inheritance</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Cresselia', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dondozo', 'Dragapult',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hoopa-Unbound', 'Ho-Oh', 'Iron Bundle', 'Iron Valiant', 'Koraidon', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin',
			'Pecharunt', 'Rayquaza', 'Regieleki', 'Regigigas', 'Reshiram', 'Sableye', 'Samurott-Hisui', 'Scream Tail', 'Shaymin-Sky', 'Slaking', 'Smeargle', 'Solgaleo',
			'Spectrier', 'Urshifu-Base', 'Ursaluna-Base', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Arena Trap', 'Drizzle',
			'Drought', 'Good as Gold', 'Huge Power', 'Imposter', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Speed Boost',
			'Stakeout', 'Water Bubble', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Fillet Away', 'Last Respects', 'Rage Fist', 'Shed Tail', 'Shell Smash',
		],
		getEvoFamily(speciesid) {
			let species = Dex.species.get(speciesid);
			while (species.prevo) {
				const prevoSpecies = Dex.species.get(species.prevo);
				if (prevoSpecies.evos.length > 1) break;
				species = prevoSpecies;
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const pokemon of Dex.species.all()) {
					if (pokemon.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(pokemon.isNonstandard)}`)) continue;
					if (pokemon.battleOnly) continue;
					if (this.ruleTable.isBannedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](pokemon.id);
						} else {
							teamHas.abilityMap[abilityId] = [pokemon.id];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.species.get(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.abilities.get(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${ability.name} is not available on a legal Pok\u00e9mon.`];

			(this.format as any).debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).
			const hpType = set.hpType;

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.species.get(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				const annoyingPokemon = ["Iron Leaves", "Walking Wake", "Iron Boulder", "Gouging Fire", "Iron Crown", "Raging Bolt"];
				if (annoyingPokemon.includes(donorSpecies.name) || annoyingPokemon.includes(species.name)) {
					set.hpType = "Dark";
				}
				const problems = this.validateSet(set, teamHas);
				if (!problems?.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			(this.format as any).debug = false;

			set.name = name;
			set.species = species.name;
			set.hpType = hpType;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.species.get(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `pokeball` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.pokeball = `${set.pokeball}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			if (this.ruleTable.has('abilityclause')) {
				const abilityTable = new Map<string, number>();
				const base: {[k: string]: string} = {
					airlock: 'cloudnine',
					armortail: 'queenlymajesty',
					battlearmor: 'shellarmor',
					clearbody: 'whitesmoke',
					dazzling: 'queenlymajesty',
					emergencyexit: 'wimpout',
					filter: 'solidrock',
					gooey: 'tanglinghair',
					insomnia: 'vitalspirit',
					ironbarbs: 'roughskin',
					keeneye: 'illuminate',
					libero: 'protean',
					minus: 'plus',
					moxie: 'chillingneigh',
					powerofalchemy: 'receiver',
					propellertail: 'stalwart',
					teravolt: 'moldbreaker',
					turboblaze: 'moldbreaker',
				};
				const num = parseInt(this.ruleTable.valueRules.get('abilityclause')!);
				for (const set of team) {
					let ability = this.toID(set.ability.split('0')[0]);
					if (!ability) continue;
					if (ability in base) ability = base[ability] as ID;
					if ((abilityTable.get(ability) || 0) >= num) {
						return [
							`You are limited to ${num} of each ability by ${num} Ability Clause.`,
							`(You have more than ${num} ${this.dex.abilities.get(ability).name} variants)`,
						];
					}
					abilityTable.set(ability, (abilityTable.get(ability) || 0) + 1);
				}
			}

			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen9inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) {
					requiredFamilies[familyId] = 1;
				} else {
					requiredFamilies[familyId]++;
				}
				if (requiredFamilies[familyId] > 1) {
					return [
						`You are limited to up to one inheritance from each evolution family by the Donor Clause.`,
						`(You inherit more than once from ${this.dex.species.get(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.pokeball.includes('0')) {
					const donor = pokemon.pokeball.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					// @ts-ignore
					pokemon.pokeball = this.toID(pokemon.pokeball.split('0')[0]);
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.species.get(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},
	{
		name: "[Gen 9] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Primal orbs, Origin orbs, and Rusted items with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710921/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716385/">Mix and Mega Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Standard OMs', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Calyrex-Shadow', 'Koraidon', 'Kyogre', 'Miraidon', 'Moody', 'Rusted Sword', 'Shadow Tag', 'Beedrillite', 'Blazikenite', 'Gengarite',
			'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Baton Pass', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Basculegion-Base', 'Calyrex-Ice', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dragapult', 'Enamorus-Base', 'Eternatus',
			'Flutter Mane', 'Gengar', 'Gholdengo', 'Giratina', 'Groudon', 'Ho-Oh', 'Iron Bundle', 'Jolteon', 'Kilowattrel', 'Kyurem-Black',
			'Kyurem-White', 'Lunala', 'Manaphy', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Regigigas',
			'Reshiram', 'Slaking', 'Sneasler', 'Ursaluna-Bloodmoon', 'Urshifu-Base', 'Zacian', 'Zekrom',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.megaStone && !item.onPrimal && !item.forcedForme?.endsWith('Origin') &&
					!item.name.startsWith('Rusted') && !item.name.endsWith('Mask')) continue;
				const natdex = this.ruleTable.has('standardnatdex');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+pokemontag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if ((item.itemUser?.includes(species.name) && !item.megaStone && !item.onPrimal) ||
					(natdex && species.name.startsWith('Necrozma-') && item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each mega stone/orb/rusted item/sinnoh item/mask.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const originalFormeSecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (originalFormeSecies.exists && pokemon.m.originalSpecies !== originalFormeSecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalFormeSecies.requiredItem || originalFormeSecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalSpecies);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710577/">STABmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714664/">STABmons Resources</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Basculegion', 'Basculegion-F', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Base',
			'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite', 'Enamorus-Base', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Iron Bundle', 'Komala', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna',
			'Manaphy', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Pecharunt', 'Porygon-Z', 'Rayquaza',
			'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu-Base', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Zoroark-Hisui', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass',
			'Shed Tail',
		],
		restricted: [
			'Acupressure', 'Belly Drum', 'Clangorous Soul', 'Dire Claw', 'Extreme Speed', 'Fillet Away', 'Gigaton Hammer', 'Last Respects', 'No Retreat',
			'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Triple Arrows', 'V-create', 'Victory Dance', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 7] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3734057/">USUM Pure Hackmons</a>`,
		],

		mod: 'gen7',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex",
	},
	{
		name: "[Gen 9] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714511/">National Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714863/">National Dex Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712168/">National Dex Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712170/">National Dex Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712169/">National Dex Ubers Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause'],
		banlist: ['ND AG', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711752/">National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719079/">National Dex UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725988/">National Dex UU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex', 'Terastal Clause'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay'],
	},
	{
		name: "[Gen 9] National Dex RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713801/">National Dex RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3721776/">National Dex RU Resources</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL', 'Slowbro-Base + Slowbronite', 'Heat Rock'],
	},
	{
		name: "[Gen 9] National Dex Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710738/">National Dex Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3716842/">National Dex Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715785/">National Dex Monotype Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause', 'Species Clause', 'OHKO Clause', 'Evasion Clause', 'Sleep Clause Mod'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao',
			'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Kingambit',
			'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega',
			'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu-Base', 'Xerneas',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete', 'Moody', 'Shadow Tag',
			'Power Construct', 'Booster Energy', 'Damp Rock', 'Focus Band', 'Icy Rock', 'King\'s Rock', 'Leppa Berry', 'Quick Claw', 'Razor Fang', 'Smooth Rock',
			'Terrain Extender', 'Acupressure', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3720802/">National Dex Doubles Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3726341/">National Dex Doubles Resources</a>`,
		],

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Species Clause', 'Gravity Sleep Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Xerneas',
			'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Commander', 'Power Construct', 'Assist', 'Coaching', 'Dark Void', 'Swagger',
		],
	},
	{
		name: "[Gen 9] National Dex Ubers UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3742166/">National Dex Ubers UU</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex Ubers'],
		banlist: [
			'Arceus-Base', 'Arceus-Dark', 'Arceus-Ground', 'Calyrex-Ice', 'Deoxys-Attack', 'Deoxys-Speed', 'Ditto', 'Eternatus', 'Giratina-Origin', 'Glimmora',
			'Groudon-Primal', 'Hatterene', 'Ho-Oh', 'Kyogre-Primal', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo-Mega-Y', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
			'Rayquaza', 'Salamence-Mega', 'Yveltal', 'Zacian-Crowned', 'Zygarde-Base',
			// UUBL
			'Arceus-Fairy', 'Arceus-Ghost', 'Chi-Yu', 'Flutter Mane', 'Kyurem-Black', 'Shaymin-Sky', 'Zacian', 'Power Construct', 'Light Clay', 'Ultranecrozium Z', 'Last Respects',
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 9] National Dex BH",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711099/">National Dex BH</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Standard NatDex', 'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', 'Terastal Clause', '!Obtainable'],
		banlist: [
			'Cramorant-Gorging', 'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja', 'Arena Trap',
			'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Berserk Gene', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Double Iron Bash',
			'Electrify', 'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Comatose + Sleep Talk', 'Imprison + Transform',
		],
		restricted: ['Arceus'],
		onValidateTeam(team, format) {
			// baseSpecies:count
			const restrictedPokemonCount = new Map<string, number>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.set(species.baseSpecies, (restrictedPokemonCount.get(species.baseSpecies) || 0) + 1);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
					];
				}
			}
		},
	},
	{
		name: "[Gen 8] National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">SS National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">SS National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">SS National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: ['ND Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass'],
	},
	{
		name: "[Gen 8] National Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">SS National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">SS National Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">SS National Dex UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay', 'Slowbronite'],
	},
	{
		name: "[Gen 8] National Dex Monotype",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3715484/">SS National Dex Monotype</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish',
			'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja-Bond', 'Greninja-Ash', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound',
			'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega',
			'Metagross-Mega', 'Mewtwo', 'Moltres-Galar', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega',
			'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Zygarde-Complete', 'Battle Bond', 'Power Construct', 'Moody', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock',
			'Terrain Extender', 'Baton Pass',
		],
	},

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 4,
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710887/">SS OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710892/">SS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3717979/">SS OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685980/">USM OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3695427/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719305/">ORAS OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3694551/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 5] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666724/">BW2 OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3686880/">BW2 OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3668699/">BW2 OU Viability Rankings</a>`,
		],

		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Swagger Clause', 'Gems Clause', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Acupressure', 'Assist'],
	},
	{
		name: "[Gen 4] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685887/">DPP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687351/">DPP OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3683332/">DPP OU Viability Rankings</a>`,
		],

		mod: 'gen4',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Stat Trap Clause', 'Freeze Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Quick Claw', 'Soul Dew', 'Swagger'],
	},
	{
		name: "[Gen 3] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687814/">ADV OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687813/">ADV OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Rankings</a>`,
		],

		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Freeze Clause Mod'],
		banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger'],
	},
	{
		name: "[Gen 2] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688141/">GSC OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3688523/">GSC OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3633233/">GSC OU Viability Rankings</a>`,
		],

		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 1] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685846/">RBY OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689726/">RBY OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3685861/">RBY OU Viability Rankings</a>`,
		],

		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
];