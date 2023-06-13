import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { UsersController } from './users/usersController';
import cors from 'cors';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

const usersController = new UsersController();

app.get('/users', (req: Request, res: Response) =>
	setTimeout(() => {
		usersController.getAll(req, res)
	}, 5000)
);

app.listen(port, () => {
	console.log('hello ' + port);
});
