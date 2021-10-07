import { gql } from "apollo-angular";

export interface FilterEpisode {
    name: string;
    episode: string;
}

export const FILTER_KEYS = ['name', 'episode'];

export const GET_ALL_EPISODES = gql`
query getAllEpisodes($page: Int!, $filter: FilterEpisode!) {
    
    episodes(page: $page, filter: $filter) {
        info {
            count
            pages
            next
            prev
        }
        results {
            id
            name
            air_date
            episode
            characters {
                id
                image
            }
        }
    }
  }
`;

export const GET_EPISODE = gql`
query getEpisode($id: ID!) {
    
    episode(id: $id) {
        id
        name
        air_date
        episode
        characters {
            id
            name
            image
        }
    }
  }
`;