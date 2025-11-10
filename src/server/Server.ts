import express from 'express';
import './shared/services/TranslateYup'

import { router } from './routes/index';
import "dotenv/config";


const server = express();

server.use(express.json());
server.use(router);


export {server};