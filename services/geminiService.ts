import { GoogleGenAI, Type, Schema } from "@google/genai";
import { RoadmapItemData } from "../types";

export const analyzeRoadmapImage = async (base64Image: string): Promise<RoadmapItemData[]> => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found in environment variables. Returning empty mock.");
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      items: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            date: { type: Type.STRING, description: "The date or timeframe of the phase (e.g., Q4 2025)" },
            title: { type: Type.STRING, description: "The main title of the phase" },
            description: { type: Type.STRING, description: "The summary paragraph" },
            points: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Bullet points detailing features"
            }
          },
          required: ["id", "date", "title", "description", "points"]
        }
      }
    },
    required: ["items"]
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          inlineData: {
            mimeType: "image/png",
            data: base64Image
          }
        },
        {
          text: "Analyze this roadmap image. Extract all the text content into a structured JSON format. Translate the content into Simplified Chinese (zh-CN). Ensure the tone is professional and technical."
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.2, // Low temperature for accuracy
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text from Gemini");

    const data = JSON.parse(text);
    return data.items || [];

  } catch (error) {
    console.error("Error analyzing image with Gemini:", error);
    throw error;
  }
};
