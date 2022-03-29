import { useState } from "react";
import { Empty } from "../components/Empty";
import { DetailCard } from "../components/DetailCard";
import styled from "@emotion/styled";

export function MyPokemon() {
    const pokedex = localStorage.getItem("pokedex");
    const [temp, setTemp] = useState(pokedex ? JSON.parse(pokedex) : []);
    const [displayModal, setDisplayModal] = useState(false);
    const [release, setRelease] = useState("");
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
            <Cards>
            {
                temp.map(data => {
                    return(
                        <DetailCard data={data} buttonText={'Release'} handleButton={handleRelease} key={data.id}/>
                    )
                })
            }
            </Cards>
            <Modal id="confirm-release" >
                <ModalContent>
                    <p>Release {release.unique_name}?</p>
                    <Confirmation>
                        <Confirm onClick={confirmRelease}>
                            Release
                        </Confirm>
                        <Cancel onClick={()=>setDisplayModal(false)}>
                            Cancel
                        </Cancel>
                    </Confirmation>
                </ModalContent>
            </Modal>
        </PokemonListContainer>
    )
}

const PokemonListContainer = styled.div`
    height:100%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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

const Modal = styled.div` 
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: #red; /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

 const ModalContent = styled.div`
    background-color: #e3e5dd;
    margin: auto;
    padding: 10px 10px 30px;
    border: 2px solid black;
    width: 80%;
    max-width: 600px;
    max-height: 500px;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display:flex;
    flex-direction:column;
    align-items:center;
    p {
        text-align: center;
    }
    `

const Confirmation = styled.div`
    display:flex;
    flex-direction: row;
    width:75%;
    justify-content: space-between;

    confirm {
        border: 2px solid black;
        padding: 5px 10px;
        background-color: red;
        cursor:pointer;
        border-radius: 12px;
    }
`

const Confirm = styled.div`
    border: 2px solid black;
    border-radius: 12px;
    margin: 15px;
    padding: 10px;
    background-color: red;
    cursor:pointer;
`

const Cancel = styled.div`
    border: 2px solid black;
    border-radius: 12px;
    margin: 15px;
    padding: 10px;
    background-color: #4dad5b;
    cursor:pointer;
`
