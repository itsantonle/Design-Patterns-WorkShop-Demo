import { useEffect, useState } from "react";

interface Character {
  id: number;
  name: string;
}

export const useFetchCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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

  return [characters, isLoading, error] as const;
};
