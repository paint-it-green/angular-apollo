import { gql } from "apollo-angular";

export const GET_DATA = gql`
query getData {
    
    characters {
        info {
            count
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

    episodes {
        info {
            count
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


    locations {
        info {
            count
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