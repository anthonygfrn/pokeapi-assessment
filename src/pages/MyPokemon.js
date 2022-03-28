/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Empty } from "../components/Empty";
import { DetailCard } from "../components/DetailCard"
import styled from "@emotion/styled";
import { MyPokemonPageStyle } from "../styles/pages/MyPokemonsStyle";

export function MyPokemon() {
    const pokedex = localStorage.getItem("pokedex")
    const [temp, setTemp] = useState(pokedex ? JSON.parse(pokedex) : [])
    const [displayModal, setDisplayModal] = useState(false)
    const [release, setRelease] = useState("")
    const modal = document.getElementById("confirm-release");

    if (modal) {
        modal.style.display = displayModal ? "block" : "none"
    }

    const handleRelease = (data) => {
        setDisplayModal(true)
        setRelease(data)
    }
    
    const confirmRelease = () => {
        const newPokedex = temp.filter(element => element !== release)
        localStorage.setItem("pokedex", JSON.stringify(newPokedex))
        setTemp(newPokedex)
        setDisplayModal(false)
    }

    if (!temp.length) {
        return (
            <Empty/>
        )
    }
    return (
        <PokemonListContainer>
            <div css={MyPokemonPageStyle}>
            <Cards>
            {
                temp.map(data => {
                    return(
                        <DetailCard data={data} buttonText={'Release'} handleButton={handleRelease} key={data.id}/>
                    )
                })
            }
            </Cards>
            <div id="confirm-release" className="modal">
                <div className="modal-content">
                    <p>Release {release.unique_name}?</p>
                    <div className="confirmation">
                        <div className="confirm" onClick={confirmRelease}>
                            Release
                        </div>
                        <div className="cancel" onClick={()=>setDisplayModal(false)}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
            </div>
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
