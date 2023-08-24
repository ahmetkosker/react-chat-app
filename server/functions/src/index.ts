import express from "express";
import cors from "cors";
import { getFirestore } from "firebase-admin/firestore";
import { onRequest } from "firebase-functions/v1/https";
import { initializeApp } from "firebase-admin/app";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

initializeApp();

const db = getFirestore();

//User register route
app.post("/register", async (req, res) => {
  let { UID, email, username, password, platform, gender } = req.body;

  if (!gender) {
    gender = "Unknown"
  }

  //Getting user document that we will use to store user data
  const userRef = db.collection("Users").doc(UID);

  //Register with Google
  if (platform === "GOOGLE") {
    try {
      await userRef.set({
        email,
        username,
      });

      res.status(200).send({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).send({ message: "Something went wrong" });
    }
  }
  //Register with form
  else {
    await userRef.set({
      email,
      username,
      password,
      gender
    });

    res.status(200).send({ message: "User registered successfully" });
  }
});

exports.app = onRequest(app);
