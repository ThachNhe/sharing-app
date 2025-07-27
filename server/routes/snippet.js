import express from "express";
import { v4 as uuidv4 } from "uuid";
import Snippet from "../models/Snippet.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { code, theme, language } = req.body;
    const id = uuidv4();

    const snippet = new Snippet({
      id,
      code,
      theme,
      language,
    });

    await snippet.save();

    return res.status(201).json({
      success: true,
      message: "Snippet created successfully",
      snippet,
    });
  } catch (error) {
    console.error("Error creating snippet:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create snippet",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const snippet = await Snippet.findOne({ id });

    if (!snippet) {
      return res.status(404).json({
        success: false,
        message: "Snippet not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Snippet retrieved successfully",
      snippet,
    });
  } catch (error) {
    console.error("Error retrieving snippet:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve snippet",
    });
  }
});

export default router;
