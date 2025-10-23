import express from 'express';
import './shared/services/TranslateYup.js'

import { router } from './routes/index.js';
import "dotenv/config";


const server = express();

server.use(express.json());
server.use(router);


export {server};