import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApolloClient from "apollo-boost"; 
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonList, PokemonDetail, MyPokemon } from './pages';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app'
  });

  return (
    <div>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PokemonList/>} />
            <Route exact path="/pokemon" element={<PokemonDetail/>} />
            <Route path="/mypokemon" element={<MyPokemon/>} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
    </div>
  );
}

export default App;
