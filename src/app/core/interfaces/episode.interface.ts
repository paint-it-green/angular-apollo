import { Character } from "./character.interface";
import { GenericRecord, Info } from "./common.interface";

export interface Episode extends GenericRecord {
    name: string;
    air_date: string;
    episode: string;
    characters: Array<Character>;
}

export interface Episodes {
    info: Info;
    results: Array<Episode>;
}
