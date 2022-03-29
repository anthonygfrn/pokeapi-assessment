export const countPokemon = (pokedex, pokemon) => {
  return pokedex.filter((data) => data.id === pokemon.id).length;
};

export const validateDuplicate = (array, name) => {
  return array.some(
    (data) => data.unique_name.toLowerCase() === name.toLowerCase()
  );
};
