import { NextApiRequest, NextApiResponse } from "next";
import { Buffer } from "buffer";

import handler from "../../../pages/api/scraper";

import * as wikipediaService from '../../../services/wikipedia';
import * as graphService from '../../../services/graph';

import * as validationUtils from '../../../utils/validation';
import {
    INTERNAL_SERVER_ERROR_MSG,
    INVALID_WIKIPEDIA_URL_ERROR_MSG,
    METHOD_NOT_ALLOWED_ERROR_MSG
} from "../../../constants";
import { graphMockData, tableRowsMockData } from "../../mock/scraper";

// Mock all related dependencies
jest.mock('../../../services/wikipedia');
jest.mock('../../../services/graph');
jest.mock('../../../utils/validation');

describe('POST /api/scraper', () => {
    let req: Partial<NextApiRequest>;
    let res: Partial<NextApiResponse>;

    beforeEach(() => {
        req = {
            method: 'POST',
            body: { url: 'https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression' }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            setHeader: jest.fn(),
            send: jest.fn(),
        };
    });

    it('should return 405 if method is GET', async () => {
        // Arrange
        // Override method as GET
        req.method = 'GET';

        // Act
        await handler(req as NextApiRequest, res as NextApiResponse);

        // Assert
        expect(res.status).toHaveBeenCalledWith(405);
        expect(res.json).toHaveBeenCalledWith({ error: METHOD_NOT_ALLOWED_ERROR_MSG });
    });

    it('should return 400 status code if invalid Wikipedia URL is provided', async () => {
        // Arrange
        // Override Wikipedia URL
        req.body.url = 'https://google.com';
        const validateUrlMock = jest.spyOn(validationUtils, 'validateUrl').mockReturnValue(false);

        // Act
        await handler(req as NextApiRequest, res as NextApiResponse);

        // Assert
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: INVALID_WIKIPEDIA_URL_ERROR_MSG });

        // Restore
        validateUrlMock.mockRestore();
    });

    it('should return 500 if unable to fetch the content from the Wikipedia page', async () => {
        // Arrange
        const validationUtilsMock = jest.spyOn(validationUtils, 'validateUrl').mockReturnValue(true);
        const wikipediaServiceMock = jest.spyOn(wikipediaService, 'fetchWikipediaPage').mockRejectedValue(new Error('Failed'));

        // Act
        await handler(req as NextApiRequest, res as NextApiResponse);

        // Assert
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: INTERNAL_SERVER_ERROR_MSG });

        // Restore
        validationUtilsMock.mockRestore();
        wikipediaServiceMock.mockRestore();
    });

    it('should return 200 and generate a graph for valid a Wikipedia URL', async () => {
        // Arrange
        const validationUtilsMock = jest.spyOn(validationUtils, 'validateUrl').mockReturnValue(true);
        const fetchWikipediaPageMock = jest.spyOn(wikipediaService, 'fetchWikipediaPage').mockResolvedValue('<html>...</html>');
        const extractTableDataMock = jest.spyOn(wikipediaService, 'extractTableData').mockReturnValue(tableRowsMockData);
        const transformToGraphDataMock = jest.spyOn(wikipediaService, 'transformToGraphData').mockReturnValue({ ...graphMockData });
        const generateGraphMock = jest.spyOn(graphService, 'generateGraph').mockReturnValue(
            Buffer.from('fake-image-buffer')
        );

        // Act
        await handler(req as NextApiRequest, res as NextApiResponse);

        // Assert
        expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/png');
        expect(res.send).toHaveBeenCalledWith(Buffer.from('fake-image-buffer'));

        // Restore
        validationUtilsMock.mockRestore();
        fetchWikipediaPageMock.mockRestore();
        extractTableDataMock.mockRestore();
        transformToGraphDataMock.mockRestore();
        generateGraphMock.mockRestore();
    });


});