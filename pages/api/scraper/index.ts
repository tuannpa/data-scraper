import { NextApiRequest, NextApiResponse } from 'next';
import {
    extractTableData,
    fetchWikipediaPage,
    transformToGraphData
} from '../../../services/wikipedia';
import { generateGraph, IGraphData } from '../../../services/graph';
import { validateUrl } from "../../../utils/validation";
import {
    INTERNAL_SERVER_ERROR_MSG,
    INVALID_WIKIPEDIA_URL_ERROR_MSG,
    METHOD_NOT_ALLOWED_ERROR_MSG
} from "../../../constants";

const scrapeData = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // First, validate the wikipedia url, make sure it is sent correctly from the client side
        const { url } = req.body;
        if (!validateUrl(url)) {
            return res.status(400).json({ error: INVALID_WIKIPEDIA_URL_ERROR_MSG });
        }

        // Fetch the html content from Wikipedia page with the given URL
        const html: string = await fetchWikipediaPage(url);

        // Extract and remap the data from the table found in the Wiki page
        const tableRows = extractTableData(html);

        // Transform the data for graph generation
        const graphData: IGraphData = transformToGraphData(tableRows);

        // Generate Graph
        const graphBuffer = generateGraph(graphData);

        res.setHeader('Content-Type', 'image/png');
        res.send(graphBuffer);
    } catch (e) {
        console.error('An error occurred while handling data from Wikipedia:', e);
        res.status(500).json({ error: INTERNAL_SERVER_ERROR_MSG });
    }

};

const methodNotAllowed = (req, res) => {
    res.status(405).json({ error: METHOD_NOT_ALLOWED_ERROR_MSG });
};

const methodHandlers = {
    POST: scrapeData,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const handler = methodHandlers[req.method ?? ''] || methodNotAllowed;
    handler(req, res);
};