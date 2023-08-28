"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// import mongoose, { ConnectOptions } from "mongoose";
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ limit: "30mb", extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
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
