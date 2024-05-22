import { inherits } from "util";

export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	voltaumaton: {
		num: 10001,
		name: "Voltaumaton",
		types: ["Electric", "Steel"],
		abilities: {0: "Iron Fist", 1: "Circuit Breaker", H: "Heavy Metal"},
		baseStats: {hp: 100, atk: 95, def: 125, spa: 78, spd: 80, spe: 70},
		weightkg: 178,
		heightm: 2.26,
		eggGroups: ["Undiscovered"],
		tags: ["Fakemon"],
	},
	penquill: {
		num: 10002,
		name: "Penquill",
		types: ["Ground", "Water"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 85, atk: 125, def: 85, spa: 35, spd: 85, spe: 115}, 
		abilities: {0: "Reckless", 1: "Quick Feet", H: " Infiltrator"}, 
		heightm: 0.8, 
		weightkg: 12, 
		color: "Black", 
		eggGroups: ["Field", "Water1"], 
		tags: ["Fakemon"],
	},
	plushadow: {
		num: 10003,
		name: "Plushadow",
		types: ["Ghost", "Normal"],
		abilities: {0: "Phantasm", H: "Cursed Body"},
		baseStats: {hp: 90, atk: 58, def: 117, spa: 97, spd: 80, spe: 50}, 
		heightm: 0.2, 
		weightkg: 0.9, 
		color: "Green", 
		eggGroups: ["Amorphous"], 
		tags: ["Fakemon"],
	},
	//mareascudo: { (no sprite)
		//num: 10004,
		//name: "Mareascudo",
		//types: ["Water", "Rock"],
		//abilities: {0: "Torrent", 1:"Solid Rock", H: "Soothsayer"},
		//baseStats: {hp: 80, atk: 70, def: 105, spa: 100, spd: 80, spe: 110},
	//},
	marshmall: {
		num: 10005,
		name: "Marshmall",
		types: ["Fairy"],
		genderRatio: {M: 0.5, F: 0.5},
		abilities: {0: "Sticky Hold", 1:"Sweet Veil", H: "Overcoat"},
		baseStats: {hp: 55, atk: 23, def: 25, spa: 67, spd: 42, spe: 18},
		heightm: 0.3, 
		weightkg: 0.09, 
		color: "Black", 
		evos: ["Marshmang"],
		eggGroups: ["Fairy", "Amorphous"],
		tags: ["Fakemon"],
	},
	marshmang: {
		num: 10006,
		name: "Marshmang",
		types: ["Fairy"],
		genderRatio: {M: 0.5, F: 0.5},
		abilities: {0: "Sticky Hold", 1:"Sweet Veil", H: "Overcoat"},
		baseStats: {hp: 70, atk: 53, def: 55, spa: 77, spd: 62, spe: 33},
		heightm: 0.9, 
		weightkg: 9.07, 
		color: "Black", 
		prevo: "Marshmall",
		evoLevel: 25,
		evos: ["Marshmagon"],
		eggGroups: ["Fairy", "Amorphous"],
		tags: ["Fakemon"],
	},
	marshmagon: {
		num: 10007,
		name: "Marshmagon",
		types: ["Fairy", "Dragon"],
		genderRatio: {M: 0.5, F: 0.5},
		abilities: {0: "Sticky Hold", 1:"Sweet Veil", H: "Smoldering"},
		baseStats: {hp: 80, atk: 63, def: 80, spa: 127, spd: 82, spe: 98},
		heightm: 3.4, 
		weightkg: 35, 
		color: "Black", 
		prevo: "Marshmang",
		evoLevel: 45,
		eggGroups: ["Fairy", "Amorphous"],
		tags: ["Fakemon"],
	},
	dratiniolul: {
		num: 147,
		name: "Dratini-Olul",
		baseSpecies: "Dratini",
		forme: "Olul",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50},
		abilities: {0: "Corrosion", 1:"Swift Swim", H: "Drizzle"},
		heightm: 1.8,
		weightkg: 3.3,
		color: "Purple",
		evos: ["Dragonair-Olul"],
		eggGroups: ["Water 1", "Dragon"],
		tags: ["Fakemon"],
	},
	dragonairolul: {
		num: 148,
		name: "Dragonair-Olul",
		baseSpecies: "Dratini",
		forme: "Olul",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Corrosion", 1:"Swift Swim", H: "Drizzle"},
		heightm: 4,
		weightkg: 16.5,
		color: "Purple",
		prevo: "Dratini-Olul",
		evoLevel: 30,
		evos: ["Detreki"],
		eggGroups: ["Water 1", "Dragon"],
		tags: ["Fakemon"],
	},
	detreki: {
		num: 10008,
		name: "Detreki",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 105, atk: 135, def: 90, spa: 115, spd: 90, spe: 65},
		abilities: {0: "Corrosion", 1:"Swift Swim", H: "Drizzle"},
		heightm: 15,
		weightkg: 432,
		color: "Purple",
		prevo: "Dragonair-Olul",
		evoLevel: 55,
		eggGroups: ["Water 1", "Dragon"],
		tags: ["Fakemon"],
	},
	divana: {
		num: 10009,
		name: "Divana",
		types: ["Ice" , "Psychic"],
		gender: "F",
		baseStats: {hp: 90, atk: 60, def: 45, spa: 130, spd: 100, spe: 115},
		abilities: {0: "Oblivious", 1: "Dancer", H: "Dry Skin"},
		heightm: 1.5,
		weightkg: 41,
		color: "Red",
		prevo: "Jynx",
		evoType: "levelMove",
		evoMove: "Idolatry",
		eggGroups: ["Human-Like"],
		tags: ["Fakemon"],
	},
	eyespy: {
		num: 10010,
		name: "Eyespy",
		types: ["Psychic"],
		baseStats: {hp: 40, atk: 20, def: 20, spa: 40, spd: 20, spe: 40},
		abilities: {0: "Keen Eye", H: "Levitate"},
		heightm: 0.2,
		weightkg: 4.5,
		color: "Red",
		evos: ["Icyall"],
		eggGroups: ["Fairy", "Human-Like"],
		tags: ["Fakemon"],
	},
	icyall: {
		num: 10011,
		name: "Icyall",
		types: ["Psychic"],
		baseStats: {hp: 100, atk: 80, def: 60, spa: 140, spd: 30, spe: 80},
		abilities: {0: "Multishot", H: "Compound Eyes"},
		heightm: 1.27,
		weightkg: 22.68,
		color: "Red",
		prevo: "Eyespy",
		evoLevel: 45,
		eggGroups: ["Fairy", "Human-Like"],
		tags: ["Fakemon"],
	},
	reflight: {
  		num: 10012,
  		name: "Reflight",
  		types: ["Stellar", "Flying"],
  		genderRatio: {M: 0.5, F: 0.5},
  		baseStats: {hp: 100, atk: 70, def: 65, spa: 70, spd: 65, spe: 120},
  		abilities: {0: "Lightning Rod", 1: "Volt Absorb", H: "Terrastalate"},
  		heightm: 1.6,
  		weightkg: 42.3,
  		color: "Blue",
  		eggGroups: ["Mineral", "Flying"],
		tags: ["Fakemon"],
  		cosmeticFormes: ["Reflight-F"],
  		formeOrder: ["Reflight", "Reflight-F"],
	},
// 	reflightfemale: {
// 		num: 10012,
// 		name: "Reflight-F",
// 		types: ["Stellar", "Flying"],
// 		genderRatio: {M: 0.5, F: 0.5},
// 		baseStats: {hp: 100, atk: 70, def: 65, spa: 75, spd: 65, spe: 120},
// 		abilities: {0: "Lightning Rod", 1: "Volt Absorb", H: "Terrastalate"},
// 		heightm: 1.6,
// 		weightkg: 42.3,
// 		color: "Blue",
// 		eggGroups: ["Mineral", "Flying"],
// 		tags: ["Fakemon"],
// 		otherFormes: ["Reflight"],
// 		formeOrder: ["Reflight", "Reflight-F"],
//   },
	jynx: {
		inherit:true,
		evos: ["Divina"]
	},
	empoleon:{
		inherit: true,
		otherFormes: ["Empoleon-Mega"],
		formeOrder: ["Empoleon", "Empoleon-Mega"],
	},
	empoleonmega:{
		num: 10013,
		name: "Empoleon-Mega",
		types: ["Water", "Steel"],
		baseSpecies: "Empoleon",
		forme: "Mega",
		baseStats: {hp: 84, atk: 90, def: 100, spa: 141, spd: 121, spe: 94},
		abilities: {0: "Emperors Command"},
		heightm: 2.4,
		weightkg: 88,
		color: "Blue",
		tags: ["Fakemon"],
		eggGroups: ["Water 1", "Field"],
		requiredItem: "Empoleonite"
	},
	tyrantrummega:{
		num: 10014,
		name: "Tyrantrum-Mega",
		types: ["Rock", "Dragon"],
		baseSpecies: "Tyrantrum",
		forme: "Mega",
		baseStats: {hp: 82, atk: 146, def: 129, spa: 104, spd: 79, spe: 81},
		abilities: {0: "Dracilate"},
		heightm: 2.5,
		weightkg: 270,
		color: "Red",
		tags: ["Fakemon"],
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Tyrantrumite"
	},
	soaringfin:{
		num: 10015,
		name: "Soaring Fin",
		types: ["Water", "Flying"],
		gender: "N",
		baseStats: {hp: 107, atk: 121, def: 85, spa: 75, spd: 75, spe: 107},
		abilities: {0: "Protosynthesis"},
		heightm: 2.3,
		weightkg: 134.6,
		color: "Blue",
		tags: ["Paradox", "Fakemon"],
		eggGroups: ["Undiscovered"]
	},
	heatransupra: {
		num: 10016,
		name: "Heatran-Supra",
		baseSpecies: "Heatran",
		forme: "Supra",
		types: ["Fire", "Grass"],
		baseStats: {hp: 91, atk: 90, def: 106, spa: 130, spd: 106, spe: 77},
		abilities: {0: "Dancer", H: "Chlorophyll"},
		heightm: 1.7,
		weightkg: 430,
		color: "Brown",
		tags: ["Sub-Legendary"],
		eggGroups: ["Undiscovered", "Fakemon"],
	},
	snorlaxfrost: {
		num: 10017,
		name: "Snorlax-Frost",
		baseSpecies: "Snorlax",
		forme: "Frost",
		types: ["Ground", "Ice"],
		baseStats: {hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30},
		abilities: {0: "Thick Fat", 1: "Cursed Body", H: "Refrigerate"},
		heightm: 2.1,
		weightkg: 460,
		color: "Brown",
		tags: ["Fakemon"],
		eggGroups: ["Monster"],
	},
	snorlaxfrostmega:{
		num: 10018,
		name: "Snorlax-Frost-Mega",
		types: ["Ground", "Ice"],
		baseSpecies: "Snorlax-Frost",
		forme: "Mega",
		baseStats: {hp: 160, atk: 147, def: 80, spa: 90, spd: 123, spe: 40},
		abilities: {0: "Sheer Force"},
		heightm: 2.5,
		weightkg: 520,
		color: "Brown",
		tags: ["Fakemon"],
		eggGroups: ["Monster"],
		requiredItem: "Frosty Snorlaxite"
	},
	youcan: {
		num: 10019,
		name: "You Can",
		types: ["Normal", "Fighting"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95},
		abilities: {0: "Protosynthesis"},
		heightm: 0.7,
		weightkg: 19,
		color: "Gray",
		tags: ["Paradox", "Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	abyssalstorm: {
		num: 10020,
		name: "Abyssal Storm",
		types: ["Fairy", "Water"],
		gender: "N",
		baseStats: {hp: 101, atk: 125, def: 85, spa: 81, spd: 99, spe: 99}, 
		abilities: {0: "Protosynthesis"},
		heightm: 6.8, 
		weightkg: 109.9, 
		color: "Blue",
		tags: ["Paradox", "Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	kingjaw: {
		num: 10021,
		name: "King Jaw",
		types: ["Fire", "Ground"],
		gender: "N",
		baseStats: {hp: 107, atk: 133, def: 101, spa: 81, spd: 51, spe: 117},
		abilities: {0: "Protosynthesis"},
		heightm: 3.81, 
		weightkg: 181.44, 
		color: "Black",
		tags: ["Paradox", "Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	lickitunghisui: {
		num: 10022,
		name: "Lickitung-Hisui",
		types: ["Dragon"],
		baseStats: {hp: 70, atk: 70, def: 65, spa: 45, spd: 65, spe: 70}, 
		abilities: {0: "Intimidate", 1: "Thick Fat", H: "Moxie"},
		heightm: 1.19,
		weightkg: 51.71,
		color: "Red",
		tags: ["Fakemon"],
		eggGroups: ["Monster"],

	},
	lickitale: {
		num: 10023,
		name: "Lickitale",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 80, atk: 127, def: 75, spa: 55, spd: 75, spe: 103}, 
		abilities: {0: "Intimidate", 1: "Thick Fat", H: "Moxie"},
		heightm: 1.7,
		weightkg: 134.26,
		color: "Red",
		tags: ["Fakemon"],
		eggGroups: ["Monster"],
	},
	ironjoy: {
		num: 10024,
		name: "Iron Joy",
		types: ["Ice", "Electric"],
		baseStats: {hp: 132, atk: 56, def: 102, spa: 126, spd: 94, spe: 60}, 
		abilities: {0: "Quark Drive"},
		heightm: 3.6,
		weightkg: 555.6,
		color: "White",
		tags: ["Paradox", "Fakemon"],
		eggGroups: ["Undiscovered"]
	},
	grandmirage: {
		num: 10025,
		name: "Grand Mirage",
		types: ["Dark", "Fighting"],
		baseStats: {hp: 83, atk: 123, def: 107, spa: 91, spd: 65, spe: 121}, 
		abilities: {0: "Protosynthesis"},
		heightm: 2, 
		weightkg: 120, 
		color: "Red",
		tags: ["Paradox", "Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	canyou: {
		num: 10026,
		name: "Can You",
		types: ["Normal", "Steel"],
		gender: "N",
		baseStats: {hp: 118, atk: 60, def: 102, spa: 60, spd: 100, spe: 130},
		abilities: {0: "Quark Drive"},
		heightm: 0.7,
		weightkg: 19,
		color: "Gray",
		tags: ["Paradox", "Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	arcaneguin: {
		num: 10027,
		name: "Arcaneguin",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 87, atk: 87, def: 70, spa: 127, spd: 77, spe: 70},
		abilities: {0: "Flash Fire", 1: "Friend Guard", H: "Speed Boost"},
		heightm: 1.62,
		weightkg: 19,
		color: "Black",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	billadium: {
		num: 10028,
		name: "Billadium",
		types: ["Steel", "psychic"],
		baseStats: {hp: 77, atk: 78, def: 103, spa: 105, spd: 85, spe: 77},
		abilities: {0: "Technician", 1: "Filter", H: "Analytic"},
		heightm: 1.6,
		weightkg: 65,
		color: "Black",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	deustorm: {
		num: 10029,
		name: "Duestorm",
		types: ["Fairy", "Ground"],
		baseStats: {hp: 77, atk: 45, def: 83, spa: 121, spd: 88, spe: 126},
		abilities: {0: "Wonder Guard"},
		heightm: 2.9,
		weightkg: 65,
		color: "Black",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	leaflutter: {
		num: 10030,
		name: "Leaflutter",
		types: ["Grass", "Flying"],
		baseStats: {hp: 55, atk: 102, def: 70, spa: 85, spd: 60, spe: 112},
		abilities: {0: "Drift", H: "Infiltrator"},
		heightm: 0.01,
		weightkg: 0.001,
		color: "Orange",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	sprion: {
		num: 10031,
		name: "Sprion",
		types: ["Electric"],
		baseStats: {hp: 58, atk: 53, def: 55, spa: 127, spd: 68, spe: 99},
		abilities: {0: "Sturdy", 1: "Aftermath", H: "Galvanize"},
		heightm: 0,
		weightkg: 0,
		color: "Yellow",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	okaperil: {
		num: 10032,
		name: "Okaperil",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 90, atk: 105, def: 105, spa: 55, spd: 75, spe: 90},
		abilities: {0: "Defiant", 1: "Moxie", H: "Reckless"},
		heightm: 2.9,
		weightkg: 120,
		color: "White",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"],
	},
	virulurk: {
		num: 10033,
		name: "Virulurk",
		types: ["Poison", "Dark"],
		baseStats: {hp: 100, atk: 95, def: 100, spa: 125, spd: 95, spe: 85},
		abilities: {0: "Shed Skin", 1: "Poison Touch", H: "Dry Skin"},
		heightm: 2,
		weightkg: 120,
		color: "White",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"], 
	},
	lorisurge: {
		num: 10034,
		name: "Lorisurge",
		types: ["Electric", "Fire"],
		baseStats: {hp: 70, atk: 110, def: 70, spa: 100, spd: 75, spe: 100},
		abilities: {0: "Volt Absorb", 1: "Flash Fire", H: "Electric Surge"},
		heightm: 1.54,
		weightkg: 43,
		color: "Red",
		tags: ["Fakemon"],
		eggGroups: ["Undiscovered"], 
	},
}