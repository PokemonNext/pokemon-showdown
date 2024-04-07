export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	voltaumaton: {
		num: 10001,
		name: "Voltaumaton",
		types: ["Electric", "Steel"],
		abilities: {0: "Volt Absorb", 1: "Iron Fist", H: "Heavy Metal"},
		baseStats: {hp: 100, atk: 95, def: 125, spa: 78, spd: 80, spe: 70},
		weightkg: 20,
		heightm: 1.0,
		eggGroups: ["Undiscovered"],
		tags: ["Fakemon"],
	},
	penquill: {
		num: 10002,
		name: "Penquill",
		types: ["Ground", "Water"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 75, atk: 126, def: 73, spa: 40, spd: 79, spe: 127}, 
		abilities: {0: "Reckless", 1: "Quick Feet", H: " Infiltrator"}, 
		heightm: 0.8, 
		weightkg: 12, 
		color: "Black", 
		eggGroups: ["Field", "Water1"], 
	},
	plushadow: {
		num: 10003,
		name: "Plushadow",
		types: ["Ghost", "Normal"],
		abilities: {0: "Phantasm", H: "Cursed Body"},
		baseStats: {hp: 90, atk: 58, def: 117, spa: 97, spd: 80, spe: 50}, 
		heightm: 0.8, 
		weightkg: 12, 
		color: "Black", 
		eggGroups: ["Field", "Water1"], 
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
		evos: ["Detreki"],
		eggGroups: ["Water 1", "Dragon"],
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
		eggGroups: ["Fairy", "Human-Like"],
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
		eggGroups: ["Fairy", "Human-Like"],
	},
	reflight: {
  		num: 10012,
  		name: "Reflight",
  		types: ["Stellar", "Flying"],
  		genderRatio: {M: 0.5, F: 0.5},
  		baseStats: {hp: 100, atk: 70, def: 65, spa: 75, spd: 65, spe: 120},
  		abilities: {0: "Lightning Rod", 1: "Volt Absorb", H: "Terrastalate"},
  		heightm: 1.6,
  		weightkg: 42.3,
  		color: "Blue",
  		eggGroups: ["Mineral", "Flying"],
  		otherFormes: ["Reflight-F"],
  		formeOrder: ["Reflight", "Reflight-F"],
	},
	reflightfemale: {
		num: 10012,
		name: "Reflight-F",
		types: ["Stellar", "Flying"],
		genderRatio: {M: 0.5, F: 0.5},
		baseStats: {hp: 100, atk: 70, def: 65, spa: 75, spd: 65, spe: 120},
		abilities: {0: "Lightning Rod", 1: "Volt Absorb", H: "Terrastalate"},
		heightm: 1.6,
		weightkg: 42.3,
		color: "Blue",
		eggGroups: ["Mineral", "Flying"],
		otherFormes: ["Reflight"],
		formeOrder: ["Reflight", "Reflight-F"],
  },
}