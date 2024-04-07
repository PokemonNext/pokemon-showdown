export const Abilities: {[k: string]: ModdedAbilityData} = {
	smoldering: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Smoldering boost');
				return this.chainModify(1.5);
			}
		},
		name: "Smoldering",
		rating: 3.5,
		num: -6001,
	}
};