import React from "react";

interface Character {
  id: number;
  name: string;
}

interface CharacterListProps {
  loading: boolean;
  error: boolean;
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({
  loading,
  error,
  characters,
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred. Unable to load characters.</div>;
  if (!characters || characters.length === 0) return <div>No characters found.</div>;

  return (
    <ul className="flex flex-col gap-y-2 mt-3">
      {characters.map((char) => (
        <li key={char.id} className="w-75 border-b-1 border-amber-100 p-2">{char.id}. {char.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;