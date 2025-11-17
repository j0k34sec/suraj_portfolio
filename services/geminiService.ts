
import { GoogleGenAI } from "@google/genai";
import { SKILL_CATEGORIES, PROJECTS } from '../constants';

const buildContext = (): string => {
  let context = "PORTFOLIO CONTEXT:\n\n";
  
  context += "OWNER: Suraj Mondal, a Cybersecurity Analyst & Ethical Hacker.\n\n";

  context += "SKILLS:\n";
  SKILL_CATEGORIES.forEach(category => {
    context += `- ${category.title}:\n`;
    category.skills.forEach(skill => {
      context += `  - ${skill.name}\n`;
    });
  });

  context += "\nPROJECTS:\n";
  PROJECTS.forEach(project => {
    context += `- ${project.title}: ${project.description} (Technologies: ${project.tags.join(', ')})\n`;
  });

  return context;
};

export const askAI = async (prompt: string): Promise<string> => {
  const API_KEY = process.env.API_KEY;

  if (!API_KEY) {
    console.error("API_KEY environment variable not set. AI assistant is disabled.");
    return "Error: API Key is not configured. The AI assistant is currently offline.";
  }
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const context = buildContext();
  const systemInstruction = `You are a professional AI assistant for the portfolio of Suraj Mondal. Your name is 'Cypher'. You are an expert in cybersecurity. Answer questions about Suraj's skills, projects, and experience based on the provided context. Be concise, professional, and maintain a cybersecurity-themed persona. If a question is outside the scope of the portfolio, politely decline to answer. Here is the context:\n\n${context}`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.5,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "Error: Unable to connect to the AI assistant. The digital ether seems unstable.";
  }
};
