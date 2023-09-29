const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectdb = require('./config/db');

//routes path
const authRoutes = require("./routes/authRoutes");
const openAiRoutes = require('./routes/openaiRoutes');
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();

//mongoDB connection
connectdb();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);


const PORT = process.env.PORT || 8080;

//API routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/openai', openAiRoutes)
// app.get('/', function (req, res) {
//   res.send("hello");
// });

//listen server
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.Dev_Mode} at port no. ${PORT}`);
});