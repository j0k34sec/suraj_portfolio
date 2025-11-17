# Cyber Security Portfolio

A modern, interactive personal portfolio website for Suraj Mondal, a Cybersecurity Analyst & Ethical Hacker. This project showcases cybersecurity expertise, skills, projects, and experience with a sleek, dark terminal-themed interface enhanced with an AI-powered assistant.

## 🎯 Features

- **Modern UI Design**: Dark, terminal-inspired aesthetic with a professional cybersecurity theme
- **Animated Components**: Smooth animations including typing effects, flickering text, and scroll-triggered animations
- **Matrix Rain Background**: Dynamic matrix-style background animation for visual appeal
- **AI-Powered Assistant**: Gemini-based AI assistant named "Cypher" that answers questions about the portfolio
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation with smooth scroll-to-section functionality
- **Scroll-to-Top Button**: Easy navigation back to the top of the page
- **Skills Showcase**: Three categories of skills: Cybersecurity Domains, Tools & Technologies, and Programming & Systems
- **Project Portfolio**: Display of major cybersecurity projects with descriptions and technology tags
- **Social Integration**: Direct links to GitHub, LinkedIn, YouTube, and email

## 📁 Project Structure

```
suraj_portfolio/
├── App.tsx                    # Main application component
├── index.tsx                  # React DOM entry point
├── index.html                 # HTML template
├── constants.tsx              # Constants (skills, projects data)
├── types.ts                   # TypeScript type definitions
├── metadata.json              # Project metadata
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Hero section with typing animation
│   ├── About.tsx              # About section
│   ├── Skills.tsx             # Skills showcase component
│   ├── Projects.tsx           # Projects portfolio section
│   ├── Contact.tsx            # Contact/social links section
│   ├── MatrixRain.tsx         # Matrix-style background animation
│   ├── AnimatedSectionTitle.tsx # Reusable animated section title
│   ├── TerminalWindow.tsx     # Terminal-style UI component
│   └── ScrollToTopButton.tsx  # Scroll-to-top functionality
└── services/
    └── geminiService.ts       # Google Gemini API integration
```

## 🛠 Tech Stack

### Frontend
- **React** (^19.2.0) - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework (implied from className usage)
- **Lucide React** (^0.553.0) - Icon library

### Backend & AI
- **Google Generative AI** (@google/genai ^1.29.1) - Gemini API for AI assistant
- **Node.js** - Runtime environment

### Development
- **@vitejs/plugin-react** - Vite React plugin
- **TypeScript** (~5.8.2) - Language & type checking

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd suraj_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📋 Component Overview

### **Header** (`Header.tsx`)
Navigation component with links to different sections of the portfolio. Provides smooth scrolling to portfolio sections.

### **Hero** (`Hero.tsx`)
Eye-catching hero section featuring:
- Animated character-by-character name display with flicker effects
- Typing animation for the subtitle
- Blinking cursor animation
- Call-to-action buttons

### **About** (`About.tsx`)
Section highlighting Suraj's background, expertise, and professional summary in the cybersecurity field.

### **Skills** (`Skills.tsx`)
Displays three categories of skills:
1. **Cybersecurity Domains**: Penetration Testing, Network Security, Threat Intelligence, Incident Response, Cloud Security
2. **Tools & Technologies**: Metasploit, Nmap, Wireshark, Burp Suite, Kali Linux
3. **Programming & Systems**: Python, Bash, Go, Linux/UNIX, SQL, Docker

### **Projects** (`Projects.tsx`)
Portfolio of major projects:
- **Project Sentinel**: Automated vulnerability scanner
- **PhishGuard AI**: AI-powered phishing email detector
- **CryptoLocker**: Secure file encryption tool
- **HoneyPot Network**: Low-interaction honeypot network

### **Contact** (`Contact.tsx`)
Social media links and contact information:
- GitHub: https://github.com/j0k34sec
- LinkedIn: https://www.linkedin.com/in/suraj-mondal/
- YouTube: https://www.youtube.com/@J0K34-official
- Email: mondalsuraj745@gmail.com

### **MatrixRain** (`MatrixRain.tsx`)
Decorative background component creating a Matrix-style falling text animation for visual appeal.

### **ScrollToTopButton** (`ScrollToTopButton.tsx`)
Floating button that appears when scrolling down, allowing users to quickly return to the top of the page.

### **AnimatedSectionTitle** (`AnimatedSectionTitle.tsx`)
Reusable component for creating animated section titles throughout the portfolio.

### **TerminalWindow** (`TerminalWindow.tsx`)
UI component that mimics a terminal window, used for displaying AI assistant interactions.

## 🤖 AI Assistant (Cypher)

The portfolio includes an intelligent AI assistant powered by Google's Gemini API. Key features:

- **Name**: Cypher
- **Role**: Professional AI assistant answering questions about Suraj's skills, projects, and experience
- **Context-Aware**: Uses portfolio data to provide accurate, relevant responses
- **Temperature**: Set to 0.5 for balanced, consistent responses
- **Model**: gemini-2.5-flash

### How It Works

1. The `geminiService.ts` builds a comprehensive context from portfolio data
2. When a user asks a question, it's sent to the Gemini API with the portfolio context
3. The AI responds based on the context while maintaining a cybersecurity-themed persona
4. Responses are displayed in the UI through the `TerminalWindow` component

## 🎨 Styling & Design

The portfolio uses a dark, cybersecurity-themed design with:
- **Primary Colors**: Dark backgrounds (#0a0e27)
- **Accent Colors**: Cyan/neon colors for highlights
- **Font**: Monospace fonts for terminal aesthetic
- **Animations**: 
  - Title flicker effects
  - Typing animations
  - Icon hover animations
  - Smooth transitions
  - Matrix rain background

## 📝 TypeScript Types

### `Skill`
```typescript
interface Skill {
  name: string;
  icon: React.ReactNode;
}
```

### `SkillCategory`
```typescript
interface SkillCategory {
  title: string;
  skills: Skill[];
}
```

### `Project`
```typescript
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}
```

## 🔧 Configuration

### Vite Config
- **Dev Server**: Runs on port 3000, accessible from all interfaces
- **React Plugin**: Enabled for fast refresh during development
- **Environment Variables**: `GEMINI_API_KEY` passed to the application
- **Path Alias**: `@` points to project root

## 📦 Dependencies

### Production
- `react@^19.2.0` - UI library
- `react-dom@^19.2.0` - React DOM rendering
- `@google/genai@^1.29.1` - Google Generative AI SDK
- `lucide-react@^0.553.0` - Icon library

### Development
- `typescript~5.8.2` - Type checking
- `vite^6.2.0` - Build tool
- `@vitejs/plugin-react^5.0.0` - React support for Vite
- `@types/node^22.14.0` - Node.js type definitions

## 🔐 Security Considerations

- API keys are stored in environment variables
- Sensitive credentials are never committed to version control
- The application follows React best practices
- Input validation through TypeScript type safety

## 🌐 Deployment

The project is configured for easy deployment:
1. Build the project: `npm run build`
2. The `dist/` folder contains the production-ready files
3. Deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.)

## 🔗 External Links

- **GitHub**: https://github.com/j0k34sec
- **LinkedIn**: https://www.linkedin.com/in/suraj-mondal/
- **YouTube**: https://www.youtube.com/@J0K34-official
- **Email**: mondalsuraj745@gmail.com

## 📄 License

© 2024 Suraj Mondal. All rights reserved.

## 🎓 About the Author

**Suraj Mondal** - Cybersecurity Analyst & Ethical Hacker

Specializing in penetration testing, network security, threat intelligence, incident response, and cloud security. Passionate about vulnerability assessment and security automation.

---

**Portfolio Status**: SYSTEM STATUS: SECURE ✓
