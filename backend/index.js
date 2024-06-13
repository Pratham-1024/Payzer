const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

// app.get("/", (req , res)=> {
//     res.send("helloworld")
// })

const mainRouter = require("./routes/route");



app.use("/api/v1", mainRouter);






app.listen(3000);


