export const Items: {[k: string]: ModdedItemData} = {
	empoleonite: {
		name: "Empoleonite",
		spritenum: 575,
		megaStone: "Empoleon-Mega",
		megaEvolves: "Empoleon",
		itemUser: ["Empoleon"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1001,
		gen: 6,
		isNonstandard: "Past",
	},
	tyrantrumite: {
		name: "Tyrantrumite",
		spritenum: 575,
		megaStone: "Tyrantrum-Mega",
		megaEvolves: "Tyrantrum",
		itemUser: ["Tyrantrum"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -1002,
		gen: 6,
		isNonstandard: "Past",
	}
};