import * as cheerio from 'cheerio';
import uniqBy from 'lodash/uniqBy';
import { IGraphData } from "./graph";

const fetchWikipediaPage = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch page, status code: ${response.status}`);
    }
    return response.text();
}

const transformToGraphData = (rows: Array<Array<string>>): IGraphData => {
    if (!rows.length) {
        throw new Error("Empty rows in the table");
    }

    // Extract the headings
    const headings = rows[0];

    // Remove the headings
    rows.shift();

    // Find the column with the most numeric values
    let numericColumnIdx = -1;
    let maxNumericCount = 0;

    rows.forEach((row, colIndex) => {
        const numericCount = row.filter(value => !isNaN(parseFloat(value))).length;
        if (numericCount > maxNumericCount) {
            maxNumericCount = numericCount;
            numericColumnIdx = colIndex;
        }
    });

    if (numericColumnIdx === -1) {
        throw new Error("Unable to find numeric column in the table");
    }

    return {
        datasetLabel: headings[numericColumnIdx],
        data: rows
            .map((row) => ({
                label: row[numericColumnIdx + 1],
                value: parseFloat(row[numericColumnIdx])
            }))
            .filter(obj => !isNaN(obj.value))
    } as IGraphData;
}

const extractTableData = (html: string) => {
    const $ = cheerio.load(html);
    const table = $('table.wikitable').first();

    if (!table.length) {
        throw new Error('Unable to find any tables inside the page');
    }

    const rowspanTracker = {};
    const rows: Array<Array<string>> = [];

    table.find('tr').each((rowIndex, row) => {
        const cells = $(row).find('th, td');
        const rowData: string[] = [];

        let colIndex = 0;

        cells.each((cellIndex, cell) => {
            // Check if this column is already filled by a previous rowspan
            while (rowspanTracker[colIndex]) {
                rowData.push(rowspanTracker[colIndex].value as string);
                rowspanTracker[colIndex].remaining -= 1;

                // Remove entry if rowspan is complete
                if (rowspanTracker[colIndex].remaining === 0) {
                    delete rowspanTracker[colIndex];
                }
                colIndex += 1;
            }

            const value = $(cell).text().trim();
            const rowspan = parseInt($(cell).attr('rowspan') || '1');

            // Add the cell value to the current row
            rowData.push(value as string);

            // If rowspan > 1, add it to the tracker for next check
            if (rowspan > 1) {
                rowspanTracker[colIndex] = { value, remaining: rowspan - 1 };
            }

            colIndex += 1;
        });

        // Fill any remaining cells from the rowspan tracker
        while (rowspanTracker[colIndex]) {
            rowData.push(rowspanTracker[colIndex].value as string);
            rowspanTracker[colIndex].remaining -= 1;

            if (rowspanTracker[colIndex].remaining === 0) {
                delete rowspanTracker[colIndex];
            }
            colIndex += 1;
        }

        if (rowData.length > 0) {
            rows.push(rowData);
        }
    });

    return rows;
}

export {
    fetchWikipediaPage,
    transformToGraphData,
    extractTableData
};
