import { useState } from "react";
import { PokemonNickName } from "./PokemonNickName";

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
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>{loadingText}</p>
                    {!isLoading &&
                        (
                            <>
                                {success ? 
                                    (<PokemonNickName pokemon={pokemon} setUniqueName={setUniqueName} setDisplayModal={setDisplayModal}/>)
                                    :
                                    (
                                        <div className="throw-ball" onClick={handleCatchPokemon}>
                                            Try again
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </div>
            <div id="myModal2" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>Saved {uniqueName} ({pokemon.name}) to Pokedex!</p>
                </div>
            </div>
        </div>
    )
}