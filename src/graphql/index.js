import { gql } from "graphql-tag";

export const GET_POKEMONS = gql`
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        nextOffset
        prevOffset
        status
        message
        results {
            url
            name
            image
            id
        }
    }
}
`;

export const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            abilities {
              ability {
                name
              }
            }
            abilities {
              ability {
                name
              }
            }
            moves {
              move {
                name
              }
            }
            types {
              type {
                name
              }
            }
            sprites {
                front_default
            }
            height
            weight
        }
    }
`