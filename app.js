const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;

// Converts a JavaScript Object Notation (JSON) string into an object.
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// create tours route(get)
app.get("/api/v1/tours", (req, resp) => {
  resp.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
