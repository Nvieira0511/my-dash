const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
const mongoConnectionString =
  "mongodb+srv://my-dash-user:0L2jIC1ZRA2FdAmX@cluster0.gscgfal.mongodb.net/?retryWrites=true&w=majority";
  
//fucking finally we are connected
mongoose
  .connect(process.env.MONGO_PROD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


//define schema
const todoSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  completed: Boolean,
});
//create model based on schema
const Todo = mongoose.model("Todo", todoSchema);

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

//weather working!
app.get("/weather", (req, res) => {
  const weatherUrl = "https://api.weatherapi.com/v1/forecast.json";
  const ingersolPostal = "&q=N5C";
  const forecastData = "&days=7";
  const weatherAPI = "?key=c06cabaa901d43e8826112705231505";

  const weatherFetchIngersoll =
    weatherUrl + process.env.WEATHER_API_KEY + ingersolPostal + forecastData;

  const weatherFetchIngersollLocal =
    weatherUrl + weatherAPI + ingersolPostal + forecastData;

  try {
    fetch(weatherFetchIngersoll)
      .then((data) => data.json())
      .then((json) => res.send(json));
  } catch (error) {
    console.log(error);
  }
});

app.post("/addTodo", (req, res) => {
  // Create a new Todo document and save it to the database
  const newTodo = new Todo({
    title: req.body.title,
    completed: req.body.completed,
  });
  newTodo
    .save()
    .then((data) => {
      console.log("todosaved " + data);
      res.send(data);
    })
    .catch((err) => {
      console.log("error inserting " + err);
    });
});

app.get("/getTodos", (req, res) => {
  Todo.find({}).then((todos) => {
    res.send(todos);
  });
});

app.post("/removeTodo", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.body.id);
    // Handle success
    res.send("Todo deleted successfully");
  } catch (error) {
    // Handle error
    console.error("Error deleting todo:", error);
    res.status(500).send("Internal Server Error");
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

app.get("/", (req, res) => {
  console.log("home");
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
app.listen(process.env.PORT, () => {
  console.log("Server started on" + process.env.PORT);
});
