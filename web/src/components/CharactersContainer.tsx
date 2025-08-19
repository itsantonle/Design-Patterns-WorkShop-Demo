import { useEffect, useState } from "react";
import CharacterList from "@/components/CharactersList"

interface Character {
  id: number;
  name: string;
}

const CharactersContainer: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/characters");
      const data = await response.json();
      setCharacters(data);
      setIsLoading(false);
    } catch (err) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CharacterList loading={isLoading} error={error} characters={characters} />
  );
};

export default CharactersContainer;