const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

// app.use(cors);
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hallöchen Welt!");
});

app.get("/events", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Event 1",
      date: "1st Feb 2021",
      url: "http://eddiehub.org",
    },
  ]);
});

app.listen(port, () => console.log("API started"));
