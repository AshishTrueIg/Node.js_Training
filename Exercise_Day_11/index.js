const express = require("express");
const morgan = require("morgan");
const logger = require('./logger')

const app = express();

const morganFormat = ":method :url :status :response-time ms"

// app.use(morgan(morganFormat,{
//     stream : {
//         write: (message)=>{
//             const logObject = {
//                 method: message.split(" ")[0],
//                 url: message.split(" ")[1],
//                 status: message.split(" ")[2],
//                 responseTime: message.split(" ")[3], 
//             };
//             logger.info(JSON.stringify(logObject))
//         }
//     }
// }))

app.use(morgan("common"));
app.use(morgan("dev"));
app.use(morgan("short"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
    logger.info("This is an info message");
    logger.error("This is an error message");
    logger.warn("This is a warning message");
    logger.debug("This is a debug message");
    res.send("About Page");
});

app.listen(8000, () => console.log("Server running on port 8000"));
