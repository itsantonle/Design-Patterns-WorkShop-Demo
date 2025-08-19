"use client";

import CharactersWithHook from "@/components/CharactersContainerUpgraded";

const JSONServer = () => {
    return (
        <main>
            <span className="text-2xl font-semibold">List of Characters fetched with Custom Hook</span>
            <CharactersWithHook/>
        </main>
    );
}



export default JSONServer;