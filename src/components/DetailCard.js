/** @jsxImportSource @emotion/react */

import { useState } from "react"
import { Dropdown } from "./Dropdown"
import { CardStyle } from "../styles/components/CardStyle"

export const DetailCard = ({data, handleButton, buttonText}) => {
    const [displayTypes, setDisplayTypes] = useState(false)
    const [displayMoves, setDisplayMoves] = useState(false)

    return(
        <div css={CardStyle}>
            <div className="name">
                {data.unique_name ? 
                (<strong>{data.unique_name} ({data.name})</strong>) 
                : 
                (<strong>{data.name}</strong>)
                }
            </div>

            <div className="picture">
                <img src={data.sprites.front_default} alt=""/>
            </div>

            <div className="type" onClick={()=>setDisplayTypes(!displayTypes)}>
                Types
            </div>
            <Dropdown display={displayTypes} datas={data.types} type={'Types'}/>
            
            <div className="type" onClick={()=>setDisplayMoves(!displayMoves)}>
                Moves
            </div>
            <Dropdown display={displayMoves} datas={data.moves} type={'Moves'}/>

            <div className="throw-ball" onClick={()=>handleButton(data)}>
                {buttonText}
            </div>
        </div>
    )
}

