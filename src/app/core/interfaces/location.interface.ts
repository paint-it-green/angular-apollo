import { Character } from "./character.interface";
import { GenericRecord, Info } from "./common.interface";

export interface Location extends GenericRecord {
    name: string;
    type: string;
    dimension: string;
    residents: Array<Character>;
}

export interface Locations {
    info: Info;
    results: Array<Location>;
}
