import { useState } from "react";
import { validateDuplicate } from "../util";
import styled from "@emotion/styled";

export const PokemonNickName = ({pokemon, setUniqueName, setDisplayModal}) => {
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const modal2 = document.getElementById("myModal2");
        const pokedex = localStorage.getItem("pokedex")
        const temp = pokedex ? JSON.parse(pokedex) : []

        if(validateDuplicate(temp, name)) {
            setError("Name already taken")
        } else {
            setError("")
            const newPokemon = {
                ...pokemon,
                unique_name:name
            }
            temp.push(newPokemon)
            localStorage.setItem('pokedex', JSON.stringify(temp))
            setDisplayModal(false)
            modal2.style.display = "block"
            setUniqueName(name)
        }
    }

    return (
        <NickName>
            <div className="picture">
                <img src={pokemon.sprites.front_default} alt=""/>
            </div>
            <div>
                {pokemon.name} is caught!
            </div>
            <form onSubmit={handleSubmit}>
                <input id="input-name" type="text" value={name} placeholder="Set Pokemon Name"
                    onChange={(e)=>{
                    setName(e.target.value)
                    setError("")
                    }}
                />
                <input id="input-submit" type="submit" value="Save"/>
            </form>
            {error && (<Error>{error}</Error>)}
        </NickName>
    )
}

 const NickName = styled.div` 
    display:flex;
    width:70%;
    flex-direction:column;
    align-items:center;
    form {
        display:flex;
        flex-direction:column;
        align-items:center;
        input {
            margin:3px 0;
        }
    }
    div {
        margin:5px 0;
    }

    #input-name {
        border-radius: 25px;
        border: 2px solid;
        height: 20px;
        padding: 5px;
        text-align:center;
    }

    #input-submit {
        background: #4dad5b;
        border: 2px solid;
        border-radius: 25px;
        height: 30px;
        width:75%;
        cursor: pointer;
    }
`



 const Error = styled.div`
    color: red;
 `