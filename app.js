const express = require("express");
const app = express();
var cors = require('cors');
require('dotenv').config();

const cookieParser = require("cookie-parser");
const path = require("path");

const _dirname = path.resolve();

// Middleware func -> post, front -> json
app.use(express.json()); // Global middleware 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors({
    origin: ['http://localhost:5173', 'https://localhost:5173'], // Adjust as needed
    credentials: true,
}));

const port = process.env.PORT || 8080;

const userRouter = require("./Router/userRouter");
const applicationRouter = require("./Router/applicationRouter");
const schemeRoute = require("./Router/schemeRoute");

app.use("/user", userRouter);
app.use("/scheme", schemeRoute);
app.use('/Apply', applicationRouter);

// Serving static files (correct path to your frontend dist directory)
app.use(express.static(path.join(_dirname, "frontend", "dist")));

// Fallback for all other routes (serve index.html)
app.get('*', (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
