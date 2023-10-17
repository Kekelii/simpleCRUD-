import { MongoClient } from 'mongodb';
import 'dotenv/config.js';

let password = process.env.dbPassword;
const connection_url = `mongodb+srv://kekeli_base:${password}@cluster0.n5dmu2l.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(connection_url);

async function connected() {
	try {
		const connection_test = client.connect();
		const database = client.db('test');
		const places = database.collection('places');

		return places;
	} catch (error) {
		throw error;
	}
}

export default connected();
