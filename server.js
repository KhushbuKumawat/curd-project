const express = require("express");
const cors = require("cors");
//initialize express
const app = express();

//pass origin to enable the cors(cross origin resource sharing)
const option = {
  origin: "http://localhost:8081",
};
//initialize cors
app.use(cors(option));

//app.use adds a new middleware
//parse request of content type-application/json
//express.json() parse incoming json request and puts the parsed data in req.body

app.use(express.json());

//parse req of content-type-as strings/arrays
app.use(express.urlencoded({ extended: true }));

//include routes in server.js
require("./routes/web4nextKhushbu.routes")(app);

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

//set port,listen for req
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//connect to mongoose db
const db = require("../app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to The database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
