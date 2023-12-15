import { ModdedDex } from '../../sim/dex';
export class ModifyPokemon {
	private _name: string;
	private _dex: ModdedDex;
	constructor(name: string, dex: ModdedDex) {
		this._name = this.reformatName(name);
		this._dex = dex;
	}

	private reformatName(name: string) {
		return name.includes('-') 
			? name.replace('-', '').toLowerCase() 
			: name.includes(' ') 
				? name.replace(' ', '').toLowerCase() 
				: name.toLowerCase();
	}
	/**
	 * Sets the abilities for the pokemon.
	 * @param cb Callback function
	 * @returns 
	 */
	public setAbility(cb: (abilities: PokemonAbilityBuilder) => PokemonAbilityBuilder) {
		const abilities = cb(new PokemonAbilityBuilder());
		
		const pokemon = this._dex.modData('Pokedex', this._name);

		if (abilities.ability0) pokemon.abilities[0] = abilities.ability0;
		if (abilities.ability1) pokemon.abilities[1] = abilities.ability1;
		if (abilities.abilityH) pokemon.abilities["H"] = abilities.abilityH;

		return this;
	}
	/**
	 * Sets the base stats for the pokemon.
	 * @param cb Callback Function
	 * @returns 
	 */
	public setBaseStats(cb: (baseStats: PokemonBaseStatsBuilder) => PokemonBaseStatsBuilder) {
		const bs = cb(new PokemonBaseStatsBuilder());

		const pokemon = this._dex.modData('Pokedex', this._name);

		if (bs.hp) pokemon.baseStats.hp = bs.hp;
		if (bs.atk) pokemon.baseStats.atk = bs.atk;
		if (bs.def) pokemon.baseStats.def = bs.def;
		if (bs.spa) pokemon.baseStats.spa = bs.spa;
		if (bs.spd) pokemon.baseStats.spd = bs.spd;
		if (bs.spe) pokemon.baseStats.spe = bs.spe;

		return this;
	}
	/**
	 * Sets the type of the pokemon.
	 * @param cb Callback Function
	 * @returns 
	 */
	public setType(cb: (types: PokemonTypeBuilder) => PokemonTypeBuilder) {
		const ty = cb(new PokemonTypeBuilder());

		const pokemon = this._dex.modData('Pokedex', this._name);

		const types: string[] = [];

		if (ty.type1) types.push(ty.type1);
		if (ty.type2) types.push(ty.type2);

		if(types.length > 0) pokemon.types = types;

		return this;
	}
	/**
	 * Allows you to change the learnset of the pokemon.
	 * @param cb Callback function
	 * @returns 
	 */
	public changeLearnset(cb: (learnset: PokemonLearnsetBuilder) => PokemonLearnsetBuilder) {
		const ls = cb(new PokemonLearnsetBuilder());

		const pokemon = this._dex.modData('Learnsets', this._name);
		
		for(let move of ls.add) {
			if (this._dex.moves.get(move)) {
				pokemon.learnset[this._dex.moves.get(move).name] = ['9M'];
			}
		}
		for (let move of ls.remove) {
			if (this._dex.moves.get(move)) {
				delete pokemon.learnset[this._dex.moves.get(move).name];
			}
		}

		return this;
	}

	public modifyEvolutionLine(cb: (evo: PokemonEvolutionBuilder) => PokemonEvolutionBuilder) {
		const evo = cb(new PokemonEvolutionBuilder());
		
		const pokemon = this._dex.modData('Pokedex', this._name);

		if (evo.prevo) pokemon.prevo = evo.prevo;
		if (evo.evos) pokemon.evos = evo.evos;
		if (evo.evoType) pokemon.evoType = evo.evoType;
		if (evo.evoCondition) pokemon.evoCondition = evo.evoCondition;
		if (evo.evoItem) {
			const item = this._dex.items.get(evo.evoItem);
			if (item) {
				pokemon.evoItem = item.name;
			}
		}
		if (evo.evoMove) {
			const move = this._dex.moves.get(evo.evoMove);
			if (move) {
				pokemon.evoMove = move.name;
			}
		}
		if (evo.evoRegion) pokemon.evoRegion = evo.evoRegion;
		if (evo.evoLevel) pokemon.evoLevel = evo.evoLevel;
		
		return this;
	}
}

class PokemonAbilityBuilder {
	private _ability0?: string;
	private _ability1?: string;
	private _abilityH?: string;

	/**
	 * Sets the First ability of the pokemon.
	 * @param name The name of the ability
	 * @returns 
	 */
	public setAbility0(name: string) {
		this._ability0 = name;
		return this;
	}

	/**
	 * Sets the Second ability of the pokemon.
	 * @param name The name of the ability
	 * @returns 
	 */
	public setAbility1(name: string) {
		this._ability1 = name;
		return this;
	}

	/**
	 * Sets the Hidden ability of the pokemon.
	 * @param name The name of the ability
	 * @returns 
	 */
	public setAbilityH(name: string) {
		this._abilityH = name;
		return this;
	}

	public get ability0() { return this._ability0; }
	public get ability1() { return this._ability1; }
	public get abilityH() { return this._abilityH; }
}

class PokemonBaseStatsBuilder {
	private _hp?: number;
	private _atk?: number;
	private _def?: number;
	private _spa?: number;
	private _spd?: number;
	private _spe?: number;
	/**
	 * Sets the hp of the pokemon
	 * @param hp Health Point
	 * @returns 
	 */
	public setHp(hp: number) { 
		this._hp = hp;
		return this;
	}

	/**
	 * Sets the atk of the pokemon
	 * @param atk Attack
	 * @returns 
	 */
	public setAtk(atk: number) {
		this._atk = atk;
		return this;
	}

	/**
	 * Sets the def of the pokemon
	 * @param def Defense
	 * @returns 
	 */
	public setDef(def: number) {
		this._def = def;
		return this;
	}

	/**
	 * Sets the spa of the pokemon
	 * @param spa Special Attack
	 * @returns 
	 */
	public setSpa(spa: number) {
		this._spa = spa;
		return this;
	}

	/**
	 * Sets the spd of the pokemon
	 * @param spd Special Defense
	 * @returns 
	 */
	public setSpd(spd: number) {
		this._spd = spd;
		return this;
	}

	/**
	 * Sets the spe of the pokemon
	 * @param spe Speed
	 * @returns 
	 */
	public setSpe(spe: number) {
		this._spe = spe;
		return this;
	}

	public get hp () { return this._hp; }
	public get atk () { return this._atk; }
	public get def () { return this._def; }
	public get spa() { return this._spa; }
	public get spd() { return this._spd; }
	public get spe() { return this._spe; }
}

class PokemonTypeBuilder {
	private _type1?: string;
	private _type2?: string;

	/**
	 * Sets the First type of the pokemon
	 * @param type Type
	 * @returns 
	 */
	public setType1(type: string) {
		this._type1 = type;
		return this;
	}
	/**
	 * Sets the Second type of the pokemon
	 * @param type Type
	 * @returns 
	 */
	public setType2(type: string) {
		this._type2 = type;
		return this;
	}

	public get type1() { return this._type1; }
	public get type2() { return this._type2; }
}

class PokemonLearnsetBuilder {
	private _add: string[] = [];
	private _remove: string[] = [];

	/**
	 * Adds a move to the learnset
	 * @param name The name of the move
	 * @returns 
	 */
	public addMove(name: string) {
		this._add.push(name);
		return this;
	}
	/**
	 * Removes a move from the learnset
	 * @param name The name of the move
	 * @returns 
	 */
	public removeMove(name: string) {
		this._remove.push(name);
		return this;
	}

	public get add() { return this._add; }
	public get remove() { return this._remove; }
}

class PokemonEvolutionBuilder {
	private _prevo?: string;
	private _evos?: string[] = [];
	private _evoType?: 'trade' | 'useItem' | 'levelMove' | 'levelExtra' | 'levelFriendship' | 'levelHold' | 'other';
	private _evoCondition?: string;
	private _evoItem?: string;
	private _evoMove?: string;
	private _evoRegion?: 'Alola' | 'Galar';
	private _evoLevel?: number;

	/**
	 * Sets the Prevo of the pokemon
	 * @param name The name of the pokemon
	 * @return
	 */
	public setPrevo(name: string) {
		this._prevo = name;
		return this;
	}
	/**
	 * Adds a pokemon to it's evolution path.
	 * @param name The name of the pokemon.
	 * @returns 
	 */
	public addEvos(name: string) {
		this._evos?.push(name);
		return this;
	}

	/**
	 * Sets the pokemon's evolution type.
	 * @param type The evolution type
	 * @returns 
	 */
	public setEvoType(type: 'trade' | 'useItem' | 'levelMove' | 'levelExtra' | 'levelFriendship' | 'levelHold' | 'other') {
		this._evoType = type;
		return this;
	}

	/**
	 * Sets the pokemon's evolution condition
	 * @param condition Evolution Condition
	 * @returns 
	 */
	public setEvoCondition(condition: string) {
		this._evoCondition = condition;
		return this;
	}

	/**
	 * Sets the pokemon's evolution item
	 * @param name The name of the Item
	 * @returns 
	 */
	public setEvoItem(name: string) {
		this._evoItem = name;
		return this;
	}

	/**
	 * Sets the pokemon's evolution move
	 * @param name The name of the move
	 * @returns 
	 */
	public setEvoMove(name: string) {
		this._evoMove = name;
		return this;

	}

	/**
	 * Sets the pokemon's evolution region
	 * @param region The name of the region
	 * @returns 
	 */
	public setEvoRegion(region: 'Alola' | 'Galar') {
		this._evoRegion = region;
		return this;
	}

	/**
	 * Sets the evolution level
	 * @param level Level
	 * @returns 
	 */
	public setEvoLevel(level: number) {
		this._evoLevel = level;
		return this;
	}

	public get prevo() { return this._prevo; }
	public get evos() { return this._evos; }
	public get evoType() { return this._evoType; }
	public get evoCondition() { return this._evoCondition; }
	public get evoItem() { return this._evoItem; }
	public get evoMove() { return this._evoMove; }
	public get evoRegion() { return this._evoRegion; }
	public get evoLevel() { return this._evoLevel; }
}