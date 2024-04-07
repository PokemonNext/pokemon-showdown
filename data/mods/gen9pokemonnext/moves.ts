export const Moves: {[k: string]: ModdedMoveData} = {
	quillrush: {
		num: -2001,
		name: 'Quillrush',
		basePower: 120,
		accuracy: 100,
		pp: 10,
		priority: 0,
		type: "Ground",
		category: "Physical",
		flags: {contact: 1, protect: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		contestType: "Cool",
		shortDesc: "Has 33% recoil.",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
	},
	serpentinestrike: {
		num: -2002,
		name: "Serpentine Strike",
		basePower: 90,
		accuracy: 100,
		pp: 10,
		priority: 0,
		type: "Dragon",
		category: "Physical",
		flags: {contact: 1, protect: 1},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		contestType: "Cool",
		shortDesc: "30% chance to poison the target.",
		desc: "Has a 30% chance to poison the target.",
	},
	idolatry: {
		num: 671,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Idolatry",
		pp: 15,
		priority: 3,
		flags: {protect: 1, reflectable: 1, allyanim: 1, noassist: 1, failcopycat: 1},
		volatileStatus: 'idolatry',
		onTryHit(target) {
			if (this.activePerHalf === 1) return false;
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Idolatry');
			},
			onFoeRedirectTargetPriority: 2,
			onFoeRedirectTarget(target, source, source2, move) {
				if (this.validTarget(this.effectState.target, source, move.target)) {
					this.debug("Idolatry redirected target of move");
					return this.effectState.target;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
		contestType: "Cute",
	},
};