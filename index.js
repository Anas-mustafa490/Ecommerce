
require("dotenv").config();
const { dbconfig } = require("./Config/db.config");
const { globalErrorHandler } = require("./utils/globalerrorhandler");
const express = require('express');
const FirstRouter = require("./route");
const app = express()
const port = process.env.PORT
dbconfig();
app.use(express.json())

app.use(process.env.BASE_ROUTE, FirstRouter)
app.use(globalErrorHandler);



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
