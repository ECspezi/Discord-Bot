import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DB_URI)
await client.connect()

export const patch = async (bdName, collection, query, value) => 
	client.db(bdName).collection(collection).updateMany(query, { $set: value })
		.catch(console.error)

export const findOne = async (bdName, collection, query) => 
	client.db(bdName).collection(collection).findOne(query)
		.catch(console.error)

export const insert = async (bdName, collection, query) => 
	client.db(bdName).collection(collection).insertOne(query)
		.catch(console.error)

export const remove = async (bdName, collection, query) => 
	client.db(bdName).collection(collection).findOneAndDelete(query)
		.catch(console.error)