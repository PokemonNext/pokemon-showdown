export const Abilities: {[k: string]: ModdedAbilityData} = {
	smoldering: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				this.debug('Smoldering boost');
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
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Fire-type attack.",
	},
	phantasm: {
		inherit:true,
		onStart(pokemon) {
			if (pokemon.volatiles['substitute']) {
				this.add('-fail', pokemon, 'ability: Phantasm');
				return this.NOT_FAIL;
			}
			if (pokemon.hp <= pokemon.maxhp / 2) {
				this.add('-fail', pokemon, 'ability: Phantasm', '[weak]');
				return this.NOT_FAIL;
			}
			this.directDamage(pokemon.maxhp / 2);
			pokemon.addVolatile('substitute')
		},
		name: "Phantasm",
		rating: 4,
		num: -6002,
		shortDesc: "Upon switch-in, loses 50% of max HP to create a substitute."
	},
	circuitbreaker: {
		inherit:true,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Electric'] = true;
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
				move.ignoreImmunity['Ground'] = true;
				move.ignoreImmunity['Poison'] = true;
				move.ignoreImmunity['Dragon'] = true;
				move.ignoreImmunity['Ghost'] = true;
				move.ignoreImmunity['Psychic'] = true;
			}
		},
		name: "Circuit Breaker",
		rating: 3,
		num: -6003,
		shortDesc: "This pokemon's moves ignore type immunities",
		desc: "This pokemon's moves ignore type immunities"
	},
	multishot: {
		inherit:true,
		onModifyMove(move){
			if (move.category == "Special" && move.basePower > 0)
				move.multihit = [2, 5];
		},
		onBasePower(basePower, source, target, move) {
			if (move.category == "Special" && move.basePower > 0) {
				return basePower * 0.3;
			}
		},
		name: "Multishot",
		rating: 4,
		num: -6004,
		desc: "Special moves change into multi-hit moves which can hit 2-5 times. The power of these moves is 30% of the original move. Moves need a base power in order to qualify for Multishot.",
		shortDesc: "This Pokemon's special moves become multihit with 0.3x power."
	},
	terrastalate: {
		inherit: true,
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Stellar';
				move.typeChangerBoosted = this.effect;
			}
		},
		name: "Terrastalate",
		rating: 4,
		num: -6005,
		shortDesc: "This Pokemon's Normal-type moves become Stellar type"
	}
};