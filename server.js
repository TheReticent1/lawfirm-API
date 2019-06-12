const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./utilities/log");
const expressValidator = require("express-validator");

//invoke express
let app = express();

//Database
const { mongoose } = require("./db/database");

//Routes
const appointmentRoutes = require("./routes/appointment");

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined", { stream: logger.stream }));
app.use(expressValidator());
app.use("/", appointmentRoutes);

app.listen(3000, () => {
  logger.info("server running on port 3000");
});