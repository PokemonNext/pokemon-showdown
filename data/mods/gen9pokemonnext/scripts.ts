import { FormatsData } from "./../../formats-data";
export const PNDex: {[k: string]: number} = {
// "syclar": 5001,
	// "syclant": 5002,
	// "revenankh": 5003,
	// "embirch": 5004,
	// "flarelm": 5005,
	// "pyroak": 5006,
	// "breezi": 5007,
	// "fidgit": 5008,
	// "rebble": 5009,
	// "tactite": 5010,
	// "stratagem": 5011,
	// "privatyke": 5012,
	// "arghonaut": 5013,
	// "nohface": 5014,
	// "kitsunoh": 5015,
	// "monohm": 5016,
	// "duohm": 5017,
	// "cyclohm": 5018,
	// "dorsoil": 5019,
	// "colossoil": 5020,
	// "protowatt": 5021,
	// "krilowatt": 5022,
	// "voodoll": 5023,
	// "voodoom": 5024,
	// "scratchet": 5025,
	// "tomohawk": 5026,
	// "necturine": 5027,
	// "necturna": 5028,
	// "mollux": 5029,
	// "cupra": 5030,
	// "argalis": 5031,
	// "aurumoth": 5032,
	// "brattler": 5033,
	// "malaconda": 5034,
	// "cawdet": 5035,
	// "cawmodore": 5036,
	// "volkritter": 5037,
	// "volkraken": 5038,
	// "snugglow": 5039,
	// "plasmanta": 5040,
	// "floatoy": 5041,
	// "caimanoe": 5042,
	// "naviathan": 5043,
	// "crucibelle": 5044,
	// "crucibellemega": 5045,
	// "pluffle": 5046,
	// "kerfluffle": 5047,
	// "pajantom": 5048,
	// "mumbao": 5049,
	// "jumbao": 5050,
	// "fawnifer": 5051,
	// "electrelk": 5052,
	// "caribolt": 5053,
	// "smogecko": 50554,
	// "smoguana": 5055,
	// "smokomodo": 5056,
	// "swirlpool": 5057,
	// "coribalis": 5058,
	// "snaelstrom": 5059,
	// "justyke": 5060,
	// "equilibra": 5061,
	// "solotl": 5062,
	// "astrolotl": 5063,
	// "miasmite": 5064,
	// "miasmaw": 5065,
	// "chromera": 5066,
	// "venomicon": 5067,
	// "venomiconepilogue": 5068,
	// "saharascal": 5069,
	// "saharaja": 5070,
	// "ababo": 5071,
	// "scattervein": 5072,
	// "hemogoblin": 5073,
	// "cresceidon": 5074,
	voltaumaton: 10001,
	penquill: 10002,
	plushadow: 10003,
	marshmall: 10005,
	marshmang: 10006,
	marshmagon: 10007,
	detreki: 10008,
	divana: 10009,
	eyespy: 10010,
	icyall: 10011,
	reflight: 10012,
	reflightfemale: 10013,
};
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	init() {
		const dataKeys = Object.keys(FormatsData);

		for (let dataKey of dataKeys) {
			console.log(dataKeys);
			if (FormatsData[dataKey].tier)
				if (FormatsData[dataKey].tier = "Illegal")
					this.modData('FormatsData', dataKey).tier = "OU";
				else this.modData('FormatsData', dataKey).tier = FormatsData[dataKey].tier;
			else this.modData('FormatsData', dataKey).tier = "OU";
			if (FormatsData[dataKey].natDexTier)
				this.modData('FormatsData', dataKey).natDexTier = FormatsData[dataKey].natDexTier;
			if (FormatsData[dataKey].isNonstandard)
				this.modData('FormatsData', dataKey).isNonstandard = FormatsData[dataKey].isNonstandard;
			if (FormatsData[dataKey].doublesTier)
				this.modData('FormatsData', dataKey).doublesTier = FormatsData[dataKey].doublesTier;
			console.log(this.modData('FormatsData', dataKey));
		}
		for (const i in this.data.Pokedex) {
			if (i in PNDex) {
				this.data.Pokedex[i].num = PNDex[i];
				delete this.data.Pokedex[i].isNonstandard;
			} else {
				if (this.data.Pokedex[i].num > 0) this.data.Pokedex[i].num *= -1;
				this.data.Pokedex[i].isNonstandard = "Unobtainable";
			}
		}
		for (const i in this.data.Moves) {
			if (this.data.Moves[i].isNonstandard === 'Past' || this.data.Moves[i].isNonstandard === "Unobtainable") {
				delete this.data.Moves[i].isNonstandard;
			}
		}
	},
}