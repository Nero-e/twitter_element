export default async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (!response.ok) {
        throw new Error("failed to fetch");
    }

    const data = await response.json();

    return data.results;
}
