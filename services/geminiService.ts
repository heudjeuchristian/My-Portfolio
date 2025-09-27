import { GoogleGenAI, Chat } from "@google/genai";
import { PROJECTS, SKILLS, EXPERIENCE } from '../constants';

// Combine portfolio data into a single context string
const portfolioContext = `
Projects: ${JSON.stringify(PROJECTS, null, 2)}
Skills: ${JSON.stringify(SKILLS.map(s => ({ title: s.title, skills: s.list.map(i => i.name) })), null, 2)}
Experience: ${JSON.stringify(EXPERIENCE, null, 2)}
`;

const systemInstruction = `You are Bob, a friendly and professional AI assistant for the portfolio website of Heudjeu Mbelkeutchie Christian Steve, a software engineer. Your goal is to answer questions from visitors, such as recruiters or potential collaborators. You MUST base your answers strictly on the provided context, which includes his professional experience, skills, and projects. Do not invent any information. If a question cannot be answered from the context, politely state that you don't have that information. Keep your answers concise and helpful. Do not answer questions that are unrelated to Heudjeu's professional profile.`;

let chat: Chat | null = null;

async function initializeChat() {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `${systemInstruction}\n\nHere is the context you must use:\n${portfolioContext}`,
            },
        });
    } catch (error) {
        console.error("Failed to initialize Gemini AI Chat:", error);
        throw new Error("Could not initialize Bob, the AI assistant.");
    }
}

export const getChatbotResponse = async (message: string): Promise<string> => {
    if (!chat) {
        await initializeChat();
    }

    if (!chat) {
      return "Bob, the AI assistant, is currently unavailable. Please try again later.";
    }

    try {
        const response = await chat.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error getting response from Gemini:", error);
        // Attempt to re-initialize on error
        chat = null;
        return "Sorry, I encountered an error. Please try asking your question again.";
    }
};