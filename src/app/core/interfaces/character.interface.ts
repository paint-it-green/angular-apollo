import { GenericRecord, Info } from "./common.interface";
import { Episode } from "./episode.interface";
import { Location } from "./location.interface";

export interface Character extends GenericRecord {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: Array<Episode>;
}

export interface Characters {
    info: Info;
    results: Array<Character>;
}
