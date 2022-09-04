import { MongoClient } from 'mongodb';
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
	'mongodb+srv://dangelic:mongodb@cluster0.avdoc6k.mongodb.net/?retryWrites=true&w=majority';
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
		await cursor.forEach(console.log);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(console.dir);
