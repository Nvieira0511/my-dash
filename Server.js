const { log } = require("console");
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

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.get("/", (req, res) => {
  console.log("home");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/reddit", (req, res) => {
  console.log("here reddit");
  let redditWorldNewsUrl = "https://www.reddit.com/r/worldnews/.json";
  let redditDesitnyUrl = "https://www.reddit.com/r/Destiny/.json";
  let redditUnityUrl = "https://www.reddit.com/r/unity/.json";
  let dataLimit = "?_limit=20";

  const redditData = { worldNews: [], destiny: [], unity: [] };
  const redditDataTest = [];

  const redditWorldNewsFetch = fetch(redditWorldNewsUrl + dataLimit, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const redditDestinyFetch = fetch(redditDesitnyUrl + dataLimit, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const redditUnityFetch = fetch(redditUnityUrl + dataLimit, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  try {
    redditWorldNewsFetch
      .then((res) => res.json())
      .then((json) => {
        json.data.children.forEach((val) => {
          redditData.worldNews.push(val.data);
        });
      })
      .then(() => {
        redditDestinyFetch
          .then((res) => res.json())
          .then((json) => {
            json.data.children.forEach((val) => {
              redditData.destiny.push(val.data);
            });
          })
          .then(() => {
            redditUnityFetch
              .then((res) => res.json())
              .then((json) => {
                json.data.children.forEach((val) => {
                  redditData.unity.push(val.data);
                });
                res.send(redditData);
              });
          });
      });
  } catch (error) {
    console.log(error);
  }
});

app.get("/weather", (req, res) => {
  const weatherUrl = "http://api.weatherapi.com/v1/forecast.json";
  const apiKey = "?key=c06cabaa901d43e8826112705231505";
  const ingersolPostal = "&q=N5C";
  const forecastData = "&days=7";
  const weatherFetchIngersoll =
    weatherUrl + apiKey + ingersolPostal + forecastData;
  try {
    fetch(weatherFetchIngersoll, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((data) => {
      data.json().then((json) => {
        let datatosend = {};
        datatosend = json;
        console.log(datatosend);
        res.send(datatosend);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
