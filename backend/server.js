import express, { application } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';
import restaurantRouter from './routes/restaurantRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('connected to db');
	})
	.catch((err) => {
		console.log(err.message);
	});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/restaurants', restaurantRouter);
app.use('/api/users', userRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`serve at http://localhost:${port}`);
});
