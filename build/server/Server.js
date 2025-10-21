import express from 'express';
import { router } from './routes/index.js';
import "dotenv/config.js";
const server = express();
server.use(express.json());
server.use(router);
export { server };
//# sourceMappingURL=Server.js.map