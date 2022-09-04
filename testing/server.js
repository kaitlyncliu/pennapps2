import express, { application } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const app = express();

const uri = 'mongodb+srv://dangelic:mongodb@cluster0.avdoc6k.mongodb.net/test';
// mongoose.connect(mongoDB, { useNewUrlParser: true, 
//                             });
// console.log("connecting");
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// console.log("connected");

const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
    const db = client.db('pennapps');
    const coll = db.collection('restaurants');
    const cursor = coll.find({ name: 'Mcdonalds' });
    console.log(cursor);
  } catch (error) {
    console.log(error);
  }
}
run();

const restaurantRouter = express.Router();

const restaurantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	address: { type: String, required: true },
	relativePortionSize: { type: Number, required: true },
	image: { type: String, required: true },
	description: { type: String, required: false },
});


const Restaurant = new mongoose.model('Restaurant', restaurantSchema);

restaurantRouter.get('/:portion', async (req, res) => { 
    console.log("Starting find")
    Restaurant.find({name:'Mcdonalds'})
                .exec()
        // relativePortionSize: req.para ms.portion})
                .then(result => {
                    console.log("Received restaurant info");
                    res.send(result)
                    })
                .catch(err => {
                        res.sendStatus(404).send("Link Not Found")
                    })
    });

app.use('/api/restaurants', restaurantRouter);

