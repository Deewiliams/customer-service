import Chat from "../models/chat.js";
import Message from "../models/message.js";
import { askAI } from "../services/openai.service.js";

export const createChat = async (req, res) => {
  try {
    const chat = await Chat.create({
      userId: req.user._id,
    });

    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { chatId, message } = req.body;

    // save user message

    const userMessage = await Message.create({
      chatId,

      sender: "user",

      content: message,
    });

    // send message to AI

    const aiResponse = await askAI(message);

    // save AI message

    const assistantMessage = await Message.create({
      chatId,

      sender: "assistant",

      content: aiResponse,
    });

    res.json({
      userMessage,

      assistantMessage,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      chatId: req.params.chatId,
    }).sort({
      createdAt: 1,
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
