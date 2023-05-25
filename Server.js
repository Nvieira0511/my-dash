const express = require("express"),
  bodyParser = require("body-parser");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

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
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const redditDestinyFetch = fetch(redditDesitnyUrl + dataLimit, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const redditUnityFetch = fetch(redditUnityUrl + dataLimit, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
  const weatherUrl = "https://api.weatherapi.com/v1/forecast.json";
  const Weather_Key = process.env.Weather_Key;

  console.log(process.env);
  console.log(Weather_Key);
  console.log(process.env.NODE_ENV);
  const apiKey = "?key=c06cabaa901d43e8826112705231505";
  const ingersolPostal = "&q=N5C";
  const forecastData = "&days=7";
  const weatherFetchIngersoll =
    weatherUrl + apiKey + ingersolPostal + forecastData;
  try {
    fetch(weatherFetchIngersoll, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((data) => {
      console.log(data);
      data.json().then((json) => {
        console.log(json);

        let datatosend = {};
        datatosend = json;
        console.log(json);

        res.json(datatosend);
      });
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
