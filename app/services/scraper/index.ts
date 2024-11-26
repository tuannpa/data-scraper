const GENERATE_GRAPH_ENDPOINT = '/api/scraper';

const generateGraphFromWikiUrl = async (url: string) => {
    const response = await fetch(GENERATE_GRAPH_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url }),
    });

    return response;
};

export {
    generateGraphFromWikiUrl
};