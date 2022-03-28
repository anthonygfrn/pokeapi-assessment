import { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from '../graphql';
import styled from "@emotion/styled";
import { PokemonListCard } from "../components/PokemonListCard";
import { Spin } from "antd";

export function PokemonList() {
const limit = 6;
const [pokemons, setPokemons] = useState([]);
const [offset, setOffset] = useState(0);
const [prevOffset, setPrevPage] = useState(0);
const [nextOffset, setNextPage] = useState(1);
const [currentPage, setCurrentPage] = useState(1);
const [totalPage, setTotalPage] = useState(1)

const { data, error, loading } = useQuery(GET_POKEMONS, {
    variables: { limit, offset },
});

useEffect(() => {
    if (data) {
        setPokemons(data.pokemons.results)
        setPrevPage(data.pokemons.prevOffset)
        setNextPage(data.pokemons.nextOffset)
        setCurrentPage(data.pokemons.nextOffset/limit)
        setTotalPage(Math.ceil(data.pokemons.count/limit))
    }
}, [data])

if (error) return `${error}, please try to refresh the page`;

    return (
        <PokemonListContainer>
            {loading ?
                (
                    <Spin/>
                )
                :
                (
                    <Cards>
                        {pokemons.map((pokemon) => (
                            <PokemonListCard pokemon={pokemon} key={`pokemon-${pokemon.id}`}/>
                        ))}
                    </Cards>  
                )
            }
            <Pagination>
                <button onClick={()=>setOffset(prevOffset)}><i class="fa-solid fa-arrow-left"></i></button>
                <page>{currentPage} / {totalPage} </page>
                <button onClick={()=>setOffset(nextOffset)}><i class="fa-solid fa-arrow-right"></i></button>
            </Pagination>
        </PokemonListContainer>
    )
}

const PokemonListContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    margin-top: 10px;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; 
    gap: 1.5rem;
    padding: 3.5rem;
    cursor:pointer;
    margin: 30px 200px 0 200px;
    border-color: white;
`;

const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    align-items: start;
    margin-bottom: 20px;

    button {
        background-color: white;
        border: 1px solid;
        padding: 5px 15px;
        border-radius: 25px;
        width: 50px;
        margin: 0 25px;
        height: 50px;
    }

    button:hover {
        background: #0bab64;
        cursor: pointer;
    }

    page {
        background-color: red;
        border-radius: 50%;
        padding: 5px 15px;
        color: black;
        margin: 0 15px;
        margin-top: 10px;
    }

    page:hover {
        background: #0bab64;
        cursor: pointer;
    }

    div {
        padding: 5px 15px;
        color: #ffffff;
        font-weight: 700;
    }
`