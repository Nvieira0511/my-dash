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
app.get("/weather", (req, res) => {
  console.log("here weather");
  console.log(process.env.WEATHER_API_KEY);
  const weatherUrl = "https://api.weatherapi.com/v1/forecast.json";
  const ingersolPostal = "&q=N5C";
  const forecastData = "&days=7";
  const weatherFetchIngersoll =
    weatherUrl + process.env.WEATHER_API_KEY + ingersolPostal + forecastData;

  let response = {}
  try {
    fetch(weatherFetchIngersoll).then((res) => {
      console.log("we are here");
      console.log(res);
      res.json().then((data) => {
        console.log(data);
        response = data
      });
    });
    res.send(response)
  } catch (error) {
    console.log(error);
  }
});
app.get("/reddit", (req, res) => {
  console.log("here reddit");
  let redditFetchUrl = "https://www.reddit.com/r/";
  let dataLimit = "?_limit=20";

  let worldNewsUrl = "worldnews/.json";
  let desitnyUrl = "Destiny/.json";
  let unityUrl = "unity/.json";

  let fetchHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  let redditData = { worldNews: [], destiny: [], unity: [] };

  const urls = [worldNewsUrl, desitnyUrl, unityUrl];
  const myfetch = fetch(
    redditFetchUrl + worldNewsUrl + dataLimit,
    fetchHeaders
  );
  try {
    Promise.all(
      urls.map((url) => {
        fetch(redditFetchUrl + url + dataLimit, fetchHeaders).then((res) => {
          res.json().then((json) => {
            let jsonObj = json.data.children;
            console.log(jsonObj.data);
          });
        });
      })
    );

    // myfetch.then((data) => {
    //   data.json().then((json) => {
    //     json.data.children.forEach((val) => {
    //       redditData.worldNews.push(val.data);
    //     });
    //     console.log(redditData);
    //     res.send(redditData);
    //   });
    // });
    // console.log(redditData);
  } catch (err) {
    console.log(err);
  }
});

// app.get("/weather", (req, res) => {
//   const weatherUrl = "https://api.weatherapi.com/v1/forecast.json";
//   const Weather_Key = process.env.Weather_Key;

//   console.log(process.env);
//   console.log(Weather_Key);
//   console.log(process.env.NODE_ENV);
//   const apiKey = "?key=c06cabaa901d43e8826112705231505";
//   const ingersolPostal = "&q=N5C";
//   const forecastData = "&days=7";
//   const weatherFetchIngersoll =
//     weatherUrl + apiKey + ingersolPostal + forecastData;
//   try {
//     fetch(weatherFetchIngersoll, {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     }).then((data) => {
//       data.json().then((json) => {
//         let datatosend = {};
//         datatosend = json;
//         console.log("sendingdata");
//         let myMsg = {message: 'hello there'}
//         res.send(myMsg);
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get("/", (req, res) => {
  console.log("home");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
