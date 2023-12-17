import { ModdedDex } from '../../../../sim/dex';
import { ModifyPokemon } from '../../../../tools/utils/modify';
export default function (dex: ModdedDex) {
	new ModifyPokemon('Venusaur', dex)
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
	new ModifyPokemon('Charizard', dex)
		.setBaseStats(
			b => b
				.setAtk(94)
				.setSpe(105)
		).changeLearnset(
			l => l
				.addMove('Fire Lash')
				.addMove('U Turn')
				.addMove('Burn Up')
		);
	new ModifyPokemon('charizardmegax', dex)
			.setBaseStats(
				b => b
					.setAtk(135)
					.setSpe(105)
			);
}