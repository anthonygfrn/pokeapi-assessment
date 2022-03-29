import { useState } from "react";
import { Dropdown } from "./Dropdown";
import styled from "@emotion/styled";

export const DetailCard = ({ data, handleButton, buttonText }) => {
  const [displayTypes, setDisplayTypes] = useState(false);
  const [displayMoves, setDisplayMoves] = useState(false);

  return (
    <CardContainer>
      <CardTitle>
        {data.unique_name ? (
          <strong>
            {data.unique_name} ({data.name})
          </strong>
        ) : (
          <strong>{data.name}</strong>
        )}
      </CardTitle>

      <CardImage>
        <img src={data.sprites.front_default} alt="" />
      </CardImage>

      <CardType onClick={() => setDisplayTypes(!displayTypes)}>Types</CardType>
      <Dropdown display={displayTypes} datas={data.types} type={"Types"} />

      <CardType className="type" onClick={() => setDisplayMoves(!displayMoves)}>
        Moves
      </CardType>
      <Dropdown display={displayMoves} datas={data.moves} type={"Moves"} />

      <Throw onClick={() => handleButton(data)}>{buttonText}</Throw>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 70%;
  max-width: 500px;
  background-color: #ffffff;
  padding: 5px;
  margin: 20px;
  border-radius: 15px;
`;
const CardTitle = styled.div`
  font-size: large;
  padding: 10px;
  margin: 5px;
  text-transform: uppercase;
`;
const CardImage = styled.div`
  background-size: contain;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;
  height: 30vh;
  img {
    height: 100%;
  }
`;

const CardType = styled.div`
  border: 2px solid black;
  border-radius: 12px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`;

const Throw = styled.div`
  border: 2px solid black;
  border-radius: 12px;
  margin: 15px;
  padding: 10px;
  background-color: #4dad5b;
  cursor: pointer;
  text-align: center;
`;
