"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
// import mongoose, { ConnectOptions } from "mongoose";
dotenv_1.default.config();
var port = process.env.PORT;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ limit: "30mb", extended: true }));
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
// mongoose
//   .connect(process.env.CONNECTION_URL!, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   } as ConnectOptions)
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server is running at http://localhost:${port}`);
//     });
//   })
//   .catch((err) => console.error(err));
