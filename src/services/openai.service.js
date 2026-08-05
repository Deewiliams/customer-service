// import dotenv from "dotenv";
// dotenv.config();

// import OpenAI from "openai";


// // console.log("API KEY:", process.env.OPENAI_API_KEY);


// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });


// export const askAI = async (message) => {

//   const response = await client.chat.completions.create({

//     model: "gpt-4.1-mini",

//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a helpful customer support assistant. Answer politely and clearly.",
//       },

//       {
//         role: "user",
//         content: message,
//       },
//     ],

//   });


//   return response.choices[0].message.content;

// };