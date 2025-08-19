// StarWarsCharactersWithHook.tsx
import React from "react";
import CharacterList from "./CharactersList";
import { useFetchCharacters } from "@/hooks/useFetchCharacters";

const CharactersWithHook: React.FC = () => {
  const [characters, isLoading, error] = useFetchCharacters();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching characters.</div>;

  return (
    <CharacterList loading={isLoading} error={error} characters={characters} />
  );
};

export default CharactersWithHook;
