import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency?: number;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}