import { useNavigate } from "react-router-dom";
import { countPokemon } from "../util";
import styled from "@emotion/styled";

export const PokemonListCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const pokedex = localStorage.getItem("pokedex");
  const temp = pokedex ? JSON.parse(pokedex) : [];

  return (
    <Card onClick={() => navigate("/pokemon/" + pokemon.name)}>
      <CardImage src={pokemon.image} alt="" />
      <CardContent>
        <CardTitle>{pokemon.name}</CardTitle>
        <CardSnippet>In Pokedex: {countPokemon(temp, pokemon)}</CardSnippet>
      </CardContent>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 400px;
  max-width: 400px;
  overflow: hidden;
  background: #fff;
  color: #000;
  border-radius: 15px;
  box-shadow: 3px 2px 14px hsla(0, 0%, 100%, 0.2);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  padding: 1rem;
  &:hover {
    transform: translateY(-1rem);
    box-shadow: 2px 3px 18px hsla(0, 0%, 100%, 0.4);
  }
  @media (max-width: 768px) {
    overflow: hidden;
    max-width: 220px;
    align-content: center;
  }
`;

const CardImage = styled.img`
  flex: 0 0 180px;
  max-height: 250px;
  max-width: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  justify-content: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
`;
const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;
const CardSnippet = styled.p`
  .card__snippet,
  .card__title {
    margin-bottom: 0.5rem;
  }
`;
