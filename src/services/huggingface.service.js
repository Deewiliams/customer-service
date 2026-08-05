import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_API_KEY,
});

export const askAI = async (message) => {
  try {
    const completion = await client.chat.completions.create({
      model: "Qwen/Qwen2.5-7B-Instruct",

      messages: [
        {
          role: "system",
          content:
            "You are a helpful customer service assistant. Answer customers politely.",
        },
        {
          role: "user",
          content: message,
        },
      ],

      max_tokens: 500,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log("STATUS:", error.status);
    console.log("ERROR:", error.message);
    console.log("DETAILS:", error.error);

    throw new Error("AI response failed");
  }
};
