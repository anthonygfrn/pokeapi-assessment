import { useState } from "react";
import { Menu } from "./Menu";
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
      <Menu display={displayTypes} datas={data.types} type={"Types"} />

      <CardType className="type" onClick={() => setDisplayMoves(!displayMoves)}>
        Moves
      </CardType>
      <Menu display={displayMoves} datas={data.moves} type={"Moves"} />

      <Throw onClick={() => handleButton(data)}>{buttonText}</Throw>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 70%;
  max-width: 500px;
  background-color: #b1d9ea;
  background-image: linear-gradient(62deg, #b1d9ea 0%, #79caf9 100%);
  padding: 5px;
  margin: 20px;
  margin-top: 80px;
  border-radius: 15px;
  @media (max-width: 768px) {
    margin-top: 80px;
  }
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
  text-align: center;
  font-weight: bold;
  &:hover {
    color: #4dad5b;
  }
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
