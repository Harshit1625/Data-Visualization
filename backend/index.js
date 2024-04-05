const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Data = require("./models/Data");
const mongoose = require("mongoose");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

async function dbConnect() {
  await mongoose.connect(process.env.MONGO_URI);
}

// const dataAdded = Data.insertMany(dataArray)
// if(dataAdded){
//     console.log('Data Added Successfully!!')
// }

app.get("/all", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//end-year
app.get("/end_year", async (req, res) => {
  const { query } = req.query;

  const data = await Data.find({ end_year: query });
  console.log("data+", data);
  res.json(data);
});

//sector
app.get("/sector", async (req, res) => {
  const { query } = req.query;
  console.log(query);
  const data = await Data.find({ sector: query });
  console.log("data+", data);
  res.json(data);
});
//topics
app.get("/topic", async (req, res) => {
  const { query } = req.query;
  console.log(query);
  const data = await Data.find({ topic: query });
  console.log("data+", data);
  res.json(data);
});

//region
app.get("/region", async (req, res) => {
  const { query } = req.query;
  console.log(query);
  const data = await Data.find({ region: query });
  console.log("data+", data);
  res.json(data);
});

//pestle
app.get("/pestle", async (req, res) => {
  const { query } = req.query;
  console.log(query);
  const data = await Data.find({ pestle: query });
  console.log("data+", data);
  res.json(data);
});

//source
app.get("/source", async (req, res) => {
  const { query } = req.query;
  console.log("source", query);
  const data = await Data.find({ source: query });
  console.log("data+", data);
  res.json(data);
});

//country
app.get("/country", async (req, res) => {
  const { query } = req.query;
  console.log("country", query);
  const data = await Data.find({ country: query });
  console.log("data+", data);
  res.json(data);
});

app.listen(4000, async (req, res) => {
  await dbConnect();
  console.log("Server Database Instantiated");
});
