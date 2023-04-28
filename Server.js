const express = require("express"),
  bodyParser = require("body-parser");
const app = express();
const path = require("path");

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  console.log("home");

  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/reddit", (req, res) => {
  console.log("here reddit");
  let redditWorldNewsUrl = "https://www.reddit.com/r/worldnews/.json";
  let dataLimit = "?_limit=20";

  const redditData = { worldNews: [], destiny: [], unity: [] };
  const redditDataTest = [];

  const redditWorldNewsFetch = fetch(redditWorldNewsUrl + dataLimit, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

   redditWorldNewsFetch
    .then((res) => res.json())
    .then((json) => {
      json.data.children.forEach((val) => {
        redditDataTest.push(val.data);
      });
      console.log("fetched reddit");
      res.send(redditDataTest);
    });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
