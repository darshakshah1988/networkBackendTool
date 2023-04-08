const dotenv = require('dotenv');
const app = require('./app');
const connectDatabase = require("./database/database");

if (process.env.NODE_ENV !== "developmemt") {
  dotenv.config();
}

connectDatabase();

app.get("*", (req, res) => {
  res.status(500).send("Hello! Welcome to Network Tool");
});
app.get("/", (req, res) => {
  res.status(500).send("Hello! Welcome to Network Tool..");
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is Woking on http://localhost:${process.env.PORT}`);
});


//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting Down Server due to Unhandled Promise Rejection");
    server.close(() => {
      process.exit(1);
    });
  });