import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
// em ambiente de produção poderia indicar a origin do frontend que quero permitir o acesso. dentro do cors
/*
app.use(cors({
    origin: 
}));
*/
app.use(cors());
app.use(express.json())
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);