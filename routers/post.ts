import express from "express";
import upload from "../middlewares/post";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json("all post");
  } catch (error) {
    console.log(error);
  }
});

router.post("/", upload.single("pic"), (req, res) => {
  try {
    res.status(200).json("Posted sucessfully!");
  } catch (error) {
    console.log(error);
  }
});

export default router;
