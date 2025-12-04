import { GoogleGenAI, Content } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const sendMessageToGemini = async (message: string, history: Content[] = []) => {
  if (!apiKey) {
    console.error("API Key not found");
    return "I am currently offline (API Key missing). Please contact support.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      history: history,
      config: {
        systemInstruction: `You are a professional and artistic virtual assistant for 'Photono', a high-end photography studio. 
        Your tone should be elegant, helpful, and concise. 
        
        Our services include:
        - Fashion Photography
        - Pre-wedding & Wedding Photography
        - Portrait Photography
        - Maternity Photography
        - Product Photography
        - Videography & Events
        
        Key Selling Points:
        - Fixed hourly rates
        - Unlimited editing
        - Secured payment (only release when photo delivered)
        - Dedicated team of artists
        
        Answer inquiries about booking, style, and services. If asked about pricing specifics, suggest they use the "Let's Talk" button to get a custom quote.`,
      }
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm having trouble connecting to the creative muse right now. Please try again later.";
  }
};