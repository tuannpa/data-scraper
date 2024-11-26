import { createCanvas } from "canvas";
import Chart from "chart.js/auto";

interface IGraphDataItem {
    label: string;
    value: number;
}

interface IGraphData {
    datasetLabel: string;
    data: IGraphDataItem[];
}

const generateGraph = (graphData: IGraphData) => {
    const { datasetLabel, data }: IGraphData = graphData;

    const width = 800;
    const height = 600;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    new Chart(ctx as any, {
        type: 'line',
        data: {
            labels: data.map((item) => item.label),
            datasets: [
                {
                    label: datasetLabel,
                    data: data.map(item => item.value),
                    borderColor: 'green',
                    borderWidth: 1,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            elements: {
                point: {
                    radius: 5
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            backgroundColor: '#FFFFFF'
        }
    });

    return canvas.toBuffer('image/png');
}

export type { IGraphData, IGraphDataItem };
export {
    generateGraph
};