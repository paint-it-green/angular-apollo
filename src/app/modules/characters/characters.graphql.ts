import { gql } from "apollo-angular";

export interface FilterCharacter {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

export const FILTER_KEYS = ['name', 'status', 'species', 'type', 'gender'];

export const GET_ALL_CHARACTERS = gql`
query getAllCharacters($page: Int!, $filter: FilterCharacter!) {
    
    characters(page: $page, filter: $filter) {
        info {
            count
            pages
            next
            prev
        }
        results {
            id
            name
            status
            species
            image
            location {
                id
                name
            }
            episode {
                id
                name
            }	
        }
    }
  }
`;

export const GET_CHARACTER = gql`
query getCharacter($id: ID!) {
    
    character(id: $id) {
        id
        name
        status
        species
        image
        gender
        type
        origin {
            id
            name
        }
        location {
            id
            name
        }
        episode {
            id
            name
        }	
    }
  }
`;