# ManoLearn - Agriculture E-Learning Platform

A modern, professional React e-learning platform built for agriculture students, farmers, and agribusiness professionals.

## Features
- Clean, premium Tailwind v4 design (professional agriculture theme)
- Fully working user flow: Login → Browse → Enroll → Watch Lessons → Track Progress
- Real YouTube video lessons
- Progress tracking with custom hook
- Responsive on mobile and desktop
- Demo login with instant redirect

## Demo Credentials
- **Email:** `demo@manolearn.com`
- **Password:** `123456`

## Tech Stack
- React 19 + Vite
- React Router v6
- Tailwind CSS v4
- Custom hooks & Context API
- LocalStorage for enrollment & progress

## Available Routes
- `/login` → Login page
- `/` or `/courses` → Course Catalog
- `/course/:id` → Course Detail + Enroll
- `/lesson/:courseId/:lessonId` → Video Lesson Player
- `/my-courses` → Dashboard with enrolled courses

## Setup
```bash
npm install
npm run dev