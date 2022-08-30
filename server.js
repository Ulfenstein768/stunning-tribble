const app = require("express")();
const cors = require("cors");

const PORT = 5000;

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://notandi1:notandi1@cluster0.pqwqesf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(cors());

app.get("/", (req, res) => {
  client.connect(async (err) => {
    const collection = client.db("test").collection("devices");
    const data = await collection.find().toArray();
    res.send(JSON.stringify(data));
  });
});

app.listen(PORT, () => {
  //listen to the port we chose above
  //print to the console that the server is listening
  console.log("listening to port: " + PORT);
});
