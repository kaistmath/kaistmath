import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface Instructor {
  name: string;
  role: string;
  education: string[];
  description: string;
  image: string;
}

export interface CurriculumItem {
  grade: string;
  title: string;
  description: string;
  details: string[];
}

export interface SuccessCase {
  student: string;
  university: string;
  major: string;
  year: string;
  description: string;
  image: string; // Placeholder for certificate
}