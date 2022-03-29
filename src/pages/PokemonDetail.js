import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON } from '../graphql/index';
import { useParams } from "react-router-dom";
import { DetailCard } from '../components/DetailCard';
import { Spin } from "antd";
import { useState } from 'react';
import { CatchModal } from "../components/CatchModal"
import styled from "@emotion/styled";

export function PokemonDetail() {
    let {name} = useParams()
    const [success, setSuccess] = useState(false)
    const [loadingText, setLoadingText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [displayModal, setDisplayModal] = useState(false)

    const { loading, error, data } = useQuery(GET_POKEMON, {
        variables: { name },
    });

    const handleThrowPokeball = () => {
      setDisplayModal(true)
      setIsLoading(true)
      setLoadingText('Catching Pokemon... Please Wait');
      setTimeout(() => {
          if (handleCatch()) {
              setSuccess(true)
              setLoadingText(`Gotcha!` )
          } else {
              setSuccess(false)
              setLoadingText("You missed it, try again?")
          }
          setIsLoading(false)
      }, 2000);
    }

    const handleCatch = () => {
      const chance = Math.random()
      return chance >= 0.5
    } 

    if (loading) return <Spin/>;

    if (error) return `${error}, please try to refresh the page`;

    return (
        <DetailPageStyle>
            {data.pokemon.id ? 
            (
                <DetailCard data={data.pokemon} buttonText={'Throw Pokeball!'} handleButton={handleThrowPokeball}/>
            )
            : 
            (
                "Pokemon Not Found"
            ) 
            }
             <CatchModal 
                displayModal={displayModal} 
                setDisplayModal={setDisplayModal}
                loadingText={loadingText}
                success={success}
                handleCatchPokemon={handleThrowPokeball}
                isLoading={isLoading}
                pokemon={data.pokemon}
            />
        </DetailPageStyle>
    )
}

const DetailPageStyle = styled.div`
    height:100%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
