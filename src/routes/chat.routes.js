import express from "express";

import protect from "../middleware/auth.middleware.js";

import {
  createChat,
  sendMessage,
  getMessages,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/create", protect, createChat);

router.post("/message", protect, sendMessage);

router.get("/:chatId", protect, getMessages);

export default router;
