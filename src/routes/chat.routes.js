import express from "express";

import protect from "../middleware/auth.middleware.js";

import {
  createChat,
  sendMessage,
  getMessages,
  getRecentChats,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/create", protect, createChat);

router.post("/message", protect, sendMessage);

router.get("/:chatId", protect, getMessages);

router.get("/:chatId/messages", protect, getMessages);

router.get("/recent", protect, getRecentChats);

export default router;
