import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import * as z from 'zod/v4';

const server = new McpServer(
    {
        name: 'greeting-server',
        version: '1.0.0'
    }
);

server.registerTool("addTwoNumber", {
    title: "Addition",
    description: "Add Two Number",
    inputSchema:{
        a: z.number().describe("First Number"),
        b: z.number().describe("First Number")
    },
},
    async ({ a, b }) => {
        const sum = a + b;
        return {
            content: [
                {
                    type: "text",
                    text: `Sum = ${sum}`
                }
            ]
        }
    }
);


const transport = new StdioServerTransport();
await server.connect(transport);


