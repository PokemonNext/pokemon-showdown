import { ModifyPokemon } from '../../../tools/utils/modify';

// Gens
import gen1 from './gens/gen1';

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	init() {
		gen1(this);
	},
};