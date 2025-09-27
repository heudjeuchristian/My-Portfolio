
# Heudjeu M. Christian Steve - Software Engineer Portfolio

This repository contains the source code for my personal portfolio website. It's designed not just as a gallery of my work, but as a demonstration of my skills in modern frontend development, UI/UX design, and AI integration.

## ✨ Key Features

- **AI-Powered Chatbot ("Bob"):** An integrated AI assistant built with the Google Gemini API. "Bob" is primed with my professional context (skills, projects, experience) and can answer visitor questions in real-time, offering an interactive and engaging way to learn about my profile.
- **Dynamic & Animated UI:** The entire interface is built with smooth, scroll-based animations and transitions to create a lively and modern user experience.
- **Interactive Custom Cursor:** A unique custom cursor that enhances the site's tech-forward aesthetic and provides satisfying feedback on hoverable elements.
- **Comprehensive Showcases:** Detailed sections for my tech stack, project gallery, and a vertical timeline for my professional experience, all designed to be visually appealing and easy to navigate.
- **Fully Responsive Design:** The layout is meticulously crafted to provide a seamless experience across all devices, from mobile phones to high-resolution desktops.
- **Integrated Contact Form:** A functional contact form using Formspree allows visitors to get in touch with me directly from the site.

## 🧠 The AI Assistant: Bob

The standout feature of this portfolio is "Bob," the AI assistant. Here’s how it works:

1.  **Backend:** It's powered by the **Google Gemini API** (`gemini-2.5-flash` model) for fast and intelligent responses.
2.  **Context Priming:** On initialization, the chatbot service (`services/geminiService.ts`) feeds the Gemini model a detailed context string containing all my skills, projects, and work experience data from `constants.tsx`.
3.  **System Instruction:** A carefully crafted system prompt instructs "Bob" to act as a friendly and professional assistant for my portfolio, ensuring its responses are strictly based on the provided information and relevant to my professional profile.
4.  **Frontend:** The chat interface is built with React, providing a smooth, real-time messaging experience, complete with loading indicators and Markdown rendering for formatted responses.

## 🛠️ Technology Stack

-   **Frontend:**
    -   [React](https://reactjs.org/)
    -   [TypeScript](https://www.typescriptlang.org/)
    -   [Tailwind CSS](https://tailwindcss.com/)
-   **AI Integration:**
    -   [Google Gemini API](https://ai.google.dev/) (`@google/genai`)
-   **Services:**
    -   [Formspree](https://formspree.io/) for the contact form.
-   **Libraries:**
    -   [Marked](https://marked.js.org/) for rendering the AI's Markdown responses.

## 📁 Code Structure

The project is organized with a clear and modular structure to promote maintainability and scalability.

```
/
├── components/          # Reusable React components
│   ├── icons/           # SVG icon components
│   ├── About.tsx
│   ├── Chatbot.tsx      # The AI chat interface
│   ├── Contact.tsx
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Timeline.tsx
├── hooks/
│   └── useScrollAnimation.ts # Custom hook for scroll animations
├── services/
│   └── geminiService.ts   # Logic for Gemini API communication
├── constants.tsx          # Centralized data (skills, projects, etc.)
├── types.ts               # TypeScript type definitions
├── App.tsx                # Main application component
├── index.html             # Main HTML file
├── index.tsx              # React entry point
└── README.md              # This file
```
