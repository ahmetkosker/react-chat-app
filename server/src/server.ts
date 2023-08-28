import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
// import mongoose, { ConnectOptions } from "mongoose";

dotenv.config();

const port = process.env.PORT;

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
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
