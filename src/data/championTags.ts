export enum ChampionTag {
    Physical = 'physical',
    Magic = 'magic',
}

export function getChampionTagColor(tag: ChampionTag): string {
    switch (tag) {
        case ChampionTag.Physical:
            return 'orange';
        case ChampionTag.Magic:
            return 'violet';
        default:
            return 'white';
    }
}

export const championTags: { [id: string]: ChampionTag[] } = {
    Aatrox: [ChampionTag.Physical],
    Ahri: [ChampionTag.Magic],
    Akali: [ChampionTag.Magic],
    Akshan: [ChampionTag.Physical],
    Alistar: [],
    Amumu: [],
    Anivia: [ChampionTag.Magic],
    Annie: [ChampionTag.Magic],
    Aphelios: [ChampionTag.Physical],
    Ashe: [ChampionTag.Physical],
    'Aurelion Sol': [ChampionTag.Magic],
    Azir: [ChampionTag.Magic],
    Bard: [],
    "Bel'Veth": [ChampionTag.Physical],
    Blitzcrank: [],
    Brand: [ChampionTag.Magic],
    Braum: [],
    Caitlyn: [ChampionTag.Physical],
    Camille: [ChampionTag.Physical],
    Cassiopeia: [ChampionTag.Magic],
    "Cho'Gath": [],
    Corki: [ChampionTag.Magic],
    Darius: [ChampionTag.Physical],
    Diana: [ChampionTag.Magic],
    'Dr. Mundo': [],
    Draven: [ChampionTag.Physical],
    Ekko: [ChampionTag.Magic],
    Elise: [ChampionTag.Magic],
    Evelynn: [ChampionTag.Magic],
    Ezreal: [ChampionTag.Physical, ChampionTag.Magic],
    Fiddlesticks: [ChampionTag.Magic],
    Fiora: [ChampionTag.Physical],
    Fizz: [ChampionTag.Magic],
    Galio: [],
    Gangplank: [ChampionTag.Physical],
    Garen: [ChampionTag.Physical],
    Gnar: [ChampionTag.Physical],
    Gragas: [ChampionTag.Magic],
    Graves: [ChampionTag.Physical],
    Gwen: [ChampionTag.Magic],
    Hecarim: [ChampionTag.Physical],
    Heimerdinger: [ChampionTag.Magic],
    Illaoi: [ChampionTag.Physical],
    Irelia: [ChampionTag.Physical],
    Ivern: [],
    Janna: [],
    'Jarvan IV': [ChampionTag.Physical],
    Jax: [ChampionTag.Physical],
    Jayce: [ChampionTag.Physical],
    Jhin: [ChampionTag.Physical],
    Jinx: [ChampionTag.Physical],
    "Kai'Sa": [ChampionTag.Physical],
    Kalista: [ChampionTag.Physical],
    Karma: [ChampionTag.Magic],
    Karthus: [ChampionTag.Magic],
    Kassadin: [ChampionTag.Magic],
    Katarina: [ChampionTag.Magic],
    Kayle: [ChampionTag.Magic, ChampionTag.Physical],
    Kayn: [ChampionTag.Physical],
    Kennen: [ChampionTag.Magic],
    "Kha'Zix": [ChampionTag.Physical],
    Kindred: [ChampionTag.Physical],
    Kled: [ChampionTag.Physical],
    "Kog'Maw": [ChampionTag.Physical, ChampionTag.Magic],
    LeBlanc: [ChampionTag.Magic],
    'Lee Sin': [ChampionTag.Physical],
    Leona: [],
    Lillia: [ChampionTag.Magic],
    Lissandra: [ChampionTag.Magic],
    Lucian: [ChampionTag.Physical],
    Lulu: [],
    Lux: [ChampionTag.Magic],
    Malphite: [],
    Malzahar: [ChampionTag.Magic],
    Maokai: [],
    'Master Yi': [ChampionTag.Physical],
    'Miss Fortune': [ChampionTag.Physical],
    Mordekaiser: [ChampionTag.Magic],
    Morgana: [],
    Nami: [],
    Nasus: [ChampionTag.Magic],
    Nautilus: [],
    Neeko: [ChampionTag.Magic],
    Nidalee: [ChampionTag.Magic],
    Nilah: [ChampionTag.Physical],
    Nocturne: [ChampionTag.Physical],
    'Nunu & Willump': [],
    Olaf: [ChampionTag.Physical],
    Orianna: [ChampionTag.Magic],
    Ornn: [],
    Pantheon: [ChampionTag.Physical],
    Poppy: [],
    Pyke: [],
    Qiyana: [ChampionTag.Physical],
    Quinn: [ChampionTag.Physical],
    Rakan: [],
    Rammus: [],
    "Rek'Sai": [ChampionTag.Physical],
    Rell: [],
    'Renata Glasc': [],
    Renekton: [ChampionTag.Physical],
    Rengar: [ChampionTag.Physical],
    Riven: [ChampionTag.Physical],
    Rumble: [ChampionTag.Magic],
    Ryze: [ChampionTag.Magic],
    Samira: [ChampionTag.Physical],
    Sejuani: [],
    Senna: [ChampionTag.Physical],
    Seraphine: [ChampionTag.Magic],
    Sett: [ChampionTag.Physical],
    Shaco: [ChampionTag.Physical],
    Shen: [],
    Shyvana: [ChampionTag.Magic, ChampionTag.Physical],
    Singed: [],
    Sion: [],
    Sivir: [ChampionTag.Physical],
    Skarner: [],
    Sona: [],
    Soraka: [],
    Swain: [ChampionTag.Magic],
    Sylas: [ChampionTag.Magic],
    Syndra: [ChampionTag.Magic],
    'Tahm Kench': [],
    Taliyah: [ChampionTag.Magic],
    Talon: [ChampionTag.Physical],
    Taric: [],
    Teemo: [ChampionTag.Magic],
    Thresh: [],
    Tristana: [ChampionTag.Physical],
    Trundle: [ChampionTag.Physical],
    Tryndamere: [ChampionTag.Physical],
    'Twisted Fate': [ChampionTag.Magic],
    Twitch: [ChampionTag.Physical],
    Udyr: [ChampionTag.Physical],
    Urgot: [ChampionTag.Physical],
    Varus: [ChampionTag.Physical],
    Vayne: [ChampionTag.Physical],
    Veigar: [ChampionTag.Magic],
    "Vel'Koz": [ChampionTag.Magic],
    Vex: [ChampionTag.Magic],
    Vi: [ChampionTag.Physical],
    Viego: [ChampionTag.Physical],
    Viktor: [ChampionTag.Magic],
    Vladimir: [ChampionTag.Magic],
    Volibear: [ChampionTag.Physical],
    Warwick: [ChampionTag.Physical],
    Wukong: [ChampionTag.Physical],
    Xayah: [ChampionTag.Physical],
    Xerath: [ChampionTag.Magic],
    'Xin Zhao': [ChampionTag.Physical],
    Yasuo: [ChampionTag.Physical],
    Yone: [ChampionTag.Physical],
    Yorick: [ChampionTag.Magic],
    Yuumi: [],
    Zac: [],
    Zed: [ChampionTag.Physical],
    Zeri: [ChampionTag.Physical],
    Ziggs: [ChampionTag.Magic],
    Zilean: [],
    Zoe: [ChampionTag.Magic],
    Zyra: [ChampionTag.Magic],
};
