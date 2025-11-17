
import React from 'react';
import { ShieldCheck, Terminal, Code, Cpu, Database, Share2, Bug, KeyRound, CloudCog, Package } from 'lucide-react';
import type { SkillCategory, Project } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cybersecurity Domains",
    skills: [
      { name: "Penetration Testing", icon: <KeyRound className="w-6 h-6 text-accent" /> },
      { name: "Network Security", icon: <Share2 className="w-6 h-6 text-accent" /> },
      { name: "Threat Intelligence", icon: <Bug className="w-6 h-6 text-accent" /> },
      { name: "Incident Response", icon: <ShieldCheck className="w-6 h-6 text-accent" /> },
      { name: "Cloud Security", icon: <CloudCog className="w-6 h-6 text-accent" /> },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Metasploit", icon: <Terminal className="w-6 h-6 text-accent" /> },
      { name: "Nmap", icon: <Terminal className="w-6 h-6 text-accent" /> },
      { name: "Wireshark", icon: <Terminal className="w-6 h-6 text-accent" /> },
      { name: "Burp Suite", icon: <Terminal className="w-6 h-6 text-accent" /> },
      { name: "Kali Linux", icon: <Terminal className="w-6 h-6 text-accent" /> },
    ],
  },
  {
    title: "Programming & Systems",
    skills: [
      { name: "Python", icon: <Code className="w-6 h-6 text-accent" /> },
      { name: "Bash Scripting", icon: <Code className="w-6 h-6 text-accent" /> },
      { name: "Go", icon: <Code className="w-6 h-6 text-accent" /> },
      { name: "Linux/UNIX", icon: <Cpu className="w-6 h-6 text-accent" /> },
      { name: "SQL", icon: <Database className="w-6 h-6 text-accent" /> },
      { name: "Docker", icon: <Package className="w-6 h-6 text-accent" /> },
    ],
  },
];

export const PROJECTS: Project[] = [
    {
        title: "Project Sentinel",
        description: "An automated vulnerability scanner that integrates multiple open-source tools to provide a comprehensive security assessment of web applications.",
        tags: ["Python", "Nmap", "Nikto", "REST API"],
        image: "https://picsum.photos/seed/sentinel/600/400",
        githubUrl: "#"
    },
    {
        title: "PhishGuard AI",
        description: "An AI-powered phishing email detector using natural language processing to analyze email headers and content for malicious intent.",
        tags: ["Python", "TensorFlow", "NLP", "Flask"],
        image: "https://picsum.photos/seed/phishguard/600/400",
        githubUrl: "#",
        liveUrl: "#"
    },
    {
        title: "CryptoLocker",
        description: "A cross-platform secure file encryption tool utilizing AES-256 encryption to protect sensitive data at rest.",
        tags: ["Go", "Cryptography", "CLI", "AES-256"],
        image: "https://picsum.photos/seed/cryptolocker/600/400",
        githubUrl: "#"
    },
    {
        title: "HoneyPot Network",
        description: "Designed and deployed a low-interaction honeypot network to capture and analyze attacker tactics, techniques, and procedures (TTPs).",
        tags: ["Honeypot", "Docker", "ELK Stack", "Threat Analysis"],
        image: "https://picsum.photos/seed/honeypot/600/400",
        githubUrl: "#"
    }
];