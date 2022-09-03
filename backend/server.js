import express, { application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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