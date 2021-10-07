import { gql } from "apollo-angular";

export interface FilterLocation {
  name: string;
  type: string;
  dimension: string;
}

export const FILTER_KEYS = ['name', 'type', 'dimension'];

export const GET_ALL_LOCATIONS = gql`
query GetAllLocations($page: Int!, $filter: FilterLocation!) {
    locations(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
          image
        }
      }
    }
  }
`;

export const GET_LOCATION = gql`
query GetLocation($id: ID!) {
  
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;