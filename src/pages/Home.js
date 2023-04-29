import { useQuery } from "@tanstack/react-query"

export const Home = () => {
    const {
        data: catData,
        isLoading,
        refetch
    } = useQuery(['cat'], () => {
        return fetch("https://catfact.ninja/fact")
            .then((response) => response.json())
            .then((fact) => {
                return fact;
            });
    });

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return <h1>
        This is the homepage
        <p>{catData?.fact}</p>
        <button onClick={refetch} >Update data</button>
    </h1>;
};