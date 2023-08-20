/* eslint-disable object-curly-spacing */
import express from "express";
import cors from "cors";
import { getFirestore } from "firebase-admin/firestore";
import { onRequest } from "firebase-functions/v1/https";
import { initializeApp } from "firebase-admin";

const app = express();

initializeApp();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/register", async (req, res) => {
  const { UID, email, username, password } = req.body;
});

exports.app = onRequest(app);
