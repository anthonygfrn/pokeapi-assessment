import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import NavBar from "./components/Navbar";
import { PokemonList, PokemonDetail, MyPokemon, SearchPokemon } from "./pages";
import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: red;
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
            <Route path="/search" element={<SearchPokemon />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
