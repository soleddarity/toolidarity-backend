const express = require("express");
const morgan = require("morgan");
const pkg = require("./package.json");
const mongoose = require("./config/database");
const cors = require("cors");
const cron = require("node-cron");
const authRoutes = require("./routes/auth.routes");
const app = express();
const User = require("./models/User");

// DB settings
mongoose.connection.on(
  "error",
  console.error.bind(console, "DB Connection Errror")
);
app.use(
  cors({
    origin: "*",
  })
);

// Settings
app.set("pkg", pkg);

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", authRoutes);
// Welcome Route
app.get("/", (req, res) => {
  res.send("<p> ✅</>");
});

app.listen(process.env.PORT || 3030, () => {
  console.log("Server running on port: 3030");
});

cron.schedule(`0 */24 * * *`, async function () {
  const userExist = await User.find({});
  for (const user of userExist) {
    var usrnm = user.twitterUsername;
    var newnbraids = user.nbHolding * 3;
    const thing = new User({
      _id: user._id,
      nbRaids: newnbraids,
    });
    User.updateOne({ twitterUsername: usrnm }, thing)
      .then(() => {
        console.log(user.twitterUsername + "Nbraids was updated successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
