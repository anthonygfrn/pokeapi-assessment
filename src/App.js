import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import NavBar from "./components/Navbar";
import { PokemonList, PokemonDetail, MyPokemon } from "./pages";
import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: background-color: #d81313;
  background-image: linear-gradient(62deg, #d81313 0%, #e84c4c 100%);
;
`;

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Container>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<PokemonList />} />
            <Route exact path="/pokemon/:name" element={<PokemonDetail />} />
            <Route path="/mypokemon" element={<MyPokemon />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
