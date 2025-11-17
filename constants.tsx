
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
        title: "Medium Orbit",
        description: "A powerful, feature-rich command-line tool to search and extract Medium articles with a cybersecurity-themed interface. Built with the Google Custom Search API, MediumOrbit lets you scrape, filter, and export Medium articles in multiple formats",
        tags: ["Python 3.7+", "Google Custom Search API", "scraping", "CLI"],
        image: "https://picsum.photos/seed/sentinel/600/400",
        githubUrl: "#"
    },
    {
        title: "Tools-Installer",
        description: "A comprehensive, cross-platform installer for essential security and bug hunting tools, designed to streamline the setup process for penetration testers and security researchers.",
        tags: ["Python", "Shell Scripting", "Tools", "Bug Hunting"],
        image: "https://picsum.photos/seed/phishguard/600/400",
        githubUrl: "#",
        liveUrl: "#"
    },
    {
        title: "pyAV",
        description: "its a pythong based antivirus and malware scanner which is made virustotal scan api to scan files for malware and viruses.",
        tags: ["Python", "VirusTotal", "CLI", "Antivirus"],
        image: "https://picsum.photos/seed/cryptolocker/600/400",
        githubUrl: "#"
    },
    {
        title: "Deep-Scan",
        description: "It's a automation for bug hunting recon and scanning tool that performs deep scanning of web applications to identify vulnerabilities and security weaknesses.",
        tags: ["Bug Hunting", "Autometion", "CLI", "Bug Hunting Tool"],
        image: "https://picsum.photos/seed/honeypot/600/400",
        githubUrl: "#"
    }
];