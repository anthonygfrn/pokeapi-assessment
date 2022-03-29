import { useState } from "react";
import { PokemonNickName } from "./PokemonNickName";
import styled from "@emotion/styled";

export const CatchModal = ({displayModal, setDisplayModal, loadingText, success, handleCatchPokemon, isLoading, pokemon}) => {
    const [uniqueName, setUniqueName] = useState("")
    const modal = document.getElementById("myModal");
    const modal2 = document.getElementById("myModal2");

    if (modal) {
        modal.style.display = displayModal ? "block" : "none"
    }
    
    const closeModal = () => {
        setDisplayModal(false)
        modal2.style.display = "none"
    }

    return (
        <div>
            <Modal id="myModal">
                <ModalContent>
                    <ModalClose onClick={closeModal}>&times;</ModalClose>
                    <p>{loadingText}</p>
                    {!isLoading &&
                        (
                            <>
                                {success ? 
                                    (<PokemonNickName pokemon={pokemon} setUniqueName={setUniqueName} setDisplayModal={setDisplayModal}/>)
                                    :
                                    (
                                        <ThrowBall onClick={handleCatchPokemon}>
                                            Try again
                                        </ThrowBall>
                                    )
                                }
                            </>
                        )
                    }
                </ModalContent>
            </Modal>
            <Modal id="myModal2">
                <ModalContent>
                    <ModalClose onClick={closeModal}>&times;</ModalClose>
                    <p>Saved {uniqueName} ({pokemon.name}) to Pokedex!</p>
                </ModalContent>
            </Modal>
        </div>
    )
}

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

const ModalClose = styled.div`
        color: #4dad5b;
        align-self:flex-end;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
`

const ThrowBall = styled.div`
    border: 2px solid black;
    border-radius: 12px;
    margin: 15px;
    padding: 10px;
    background-color: #4dad5b;
    cursor:pointer;
`