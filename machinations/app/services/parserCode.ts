export const parseCodeToTemplate = async (code: string) => {
    // try {
    //     const parsedData = JSON.parse(code);

    //     const description = parsedData.description || "";
    //     const edgeType = parsedData.edge_type || "Default";
    //     const iterationCounts = parsedData.iteration_counts || 0;
    //     const timeStep = parsedData.time_step || 0;
    //     const gamesCount = parsedData.games_count || 0;
    //     const elements = parsedData.elements || [];

    //     const data = {
    //         description,
    //         edgeType,
    //         iterationCounts,
    //         timeStep,
    //         gamesCount,
    //         elements,
    //     }
    //     return {
    //         description,
    //         edgeType,
    //         iterationCounts,
    //         timeStep,
    //         gamesCount,
    //         elements,
    //     };
    // } catch (error) {
    //     console.error("Error parsing code:", error);
    //     return null;
    // }
    const url = 'http://localhost:4200/api/data/save'; // Укажите URL вашего сервера
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Failed to save data');
        }
        const data = await response.json();
        console.log('Data saved successfully:', data);
    } catch (error) {
        console.error('Error saving data:', error);
    }
};




