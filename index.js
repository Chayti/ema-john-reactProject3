require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iea9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("onlineShop");
        const productCollection = database.collection("products");
        console.log(uri)

        // GET API
        app.get('/products', async (req, res) => {
            const cursor = productCollection.find({})
            const page = req.query.page
            const size = req.query.size
            const count = await cursor.count()
            let products
            if (page) {
                products = await cursor.skip(page * size).limit(parseInt(size)).toArray()
            } else {
                products = await cursor.toArray()
            }
            res.send({
                count,
                products
            })
        })

        //use POST to get by keys
        app.post('/products/byKeys', async (req, res) => {
            const keys = req.body
            const query = { key: { $in: keys } }
            const products = await productCollection.find(query).toArray()
            res.send(products)
        })

    }
    finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Server connected')
})

app.listen(port, () => {
    console.log("listening port: ", port)
})
