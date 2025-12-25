import { GoogleGenAI } from "@google/genai";
import { AspectRatio } from "../types";

/**
 * Generates a video using the Veo model.
 * 
 * @param imageBase64 - The base64 string of the source image (without prefix).
 * @param prompt - The text prompt for generation.
 * @param aspectRatio - The desired aspect ratio.
 * @param mimeType - The mime type of the image (e.g., 'image/png').
 * @returns The URL of the generated video.
 */
export const generateVeoVideo = async (
  imageBase64: string, 
  prompt: string, 
  aspectRatio: AspectRatio,
  mimeType: string
): Promise<string> => {
  
  // Always create a new instance to ensure we have the latest API key from the selection dialog
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'veo-3.1-fast-generate-preview';

  try {
    // Initial generation request
    let operation = await ai.models.generateVideos({
      model: model,
      prompt: prompt, 
      image: {
        imageBytes: imageBase64,
        mimeType: mimeType, 
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p', // Veo-3.1 fast preview supports 720p standard
        aspectRatio: aspectRatio
      }
    });

    // Polling loop
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5 seconds
      operation = await ai.operations.getVideosOperation({ operation: operation });
      console.log("Polling Veo operation status...", operation.metadata);
    }

    if (operation.error) {
      throw new Error(operation.error.message || "Video generation failed during processing.");
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) {
      throw new Error("No video URI returned from the API.");
    }

    // Return the URI with the API key appended for access
    return `${videoUri}&key=${process.env.API_KEY}`;

  } catch (error: any) {
    console.error("Veo Generation Error:", error);
    // Handle specific error for API key missing or invalid
    if (error.toString().includes("Requested entity was not found")) {
       throw new Error("API Key issue detected. Please try reconnecting your Google AI account.");
    }
    throw error;
  }
};