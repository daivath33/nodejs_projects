const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
