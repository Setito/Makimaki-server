const express = require("express");
const bodyParser = require("body-parser");
const hueBulbRoutes = require("./routes/hueBulbRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(hueBulbRoutes);

app.listen(port, () => {
  console.log(`Makimaki Server: Listening on port ${port}`);
});
