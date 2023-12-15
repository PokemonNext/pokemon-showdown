import { ModifyPokemon } from '../../../tools/utils/modify';
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	init() {
		new ModifyPokemon('Venusaur', this)
			.setBaseStats(
				b => b
					.setHp(90)
					.setAtk(77)
					.setDef(90)
					.setSpa(95)
					.setSpd(105)
			)
			.changeLearnset(
				l => l
					.addMove('Sludge Wave')
					.addMove('Acid Spray')
					.addMove('Gastro Acid')
			);
	},
};