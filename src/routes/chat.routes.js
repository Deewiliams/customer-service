import express from "express";

import protect from "../middleware/auth.middleware.js";

import {
  createChat,
  sendMessage,
  getMessages,
  getRecentChats,
  getChatsByUserId,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/create", protect, createChat);
router.post("/message", protect, sendMessage);
router.get("/recent", protect, getRecentChats);
router.get("/:chatId", protect, getMessages);
router.get("/:chatId/messages", protect, getMessages);
router.get("/user/:userId", protect, getChatsByUserId);

export default router;
