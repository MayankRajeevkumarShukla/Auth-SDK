const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");

dotenv.config(); 
console.log("MongoDB URL:", process.env.MONGO_URL);
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,             
  })
);

app.use(morgan("dev")); 
app.use(helmet());       

const mongoURI = process.env.MONGO_URL;
if (!mongoURI) {
  console.log("Error: MongoDB URL is not defined in environment variables");
  process.exit(1);
}
console.log("Mongo URI:", mongoURI);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));
app.get("/", (req, res) => {
  res.send("API is running");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
