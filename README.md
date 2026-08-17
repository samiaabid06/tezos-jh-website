# Tezos Jamia Hamdard Website

> A modern student-led Web3 community platform for Tezos Jamia Hamdard, built to showcase its people, events, technical activities, and community initiatives.

## 🌐 Live Application

**Production:** https://tezos-jh-website-aarp.vercel.app/

**Repository:** https://github.com/samiaabid06/tezos-jh-website

## 📌 Overview

The **Tezos Jamia Hamdard Website** is a responsive community platform designed for the Tezos student community at Jamia Hamdard. It provides a central place to discover the community, meet its members, explore departments, browse events, and read technical and community-focused content.

The website combines a modern visual interface with reusable React components, interactive animations, responsive layouts, and structured content pages.

## ✨ Key Features

* **Community Home Page** — Introduces Tezos Jamia Hamdard, its mission, technologies, and community activities.
* **Members Directory** — Presents faculty mentors, core members, leadership, and department members.
* **Department Showcase** — Highlights teams responsible for different areas of community work.
* **Events Archive** — Displays past events, workshops, and community activities with dates, locations, descriptions, and visual galleries.
* **Blogs & Technical Content** — Provides a dedicated space for tutorials, write-ups, event recaps, and technical articles.
* **Credits Page** — Recognizes contributors and project involvement.
* **Interactive UI** — Uses animations, sliders, hover interactions, scroll effects, and reusable interface components.
* **Responsive Design** — Designed for desktop, tablet, and mobile screen sizes.
* **Web3-Focused Content** — Highlights technologies and concepts across the Tezos ecosystem, including Michelson, LIGO, and SmartPy.

## 🛠️ Technology Stack

### Core

* **Next.js 15** — React framework and application architecture
* **React 19** — Component-based user interface
* **TypeScript** — Type-safe development
* **Tailwind CSS 4** — Utility-first styling

### UI & Interaction

* **Framer Motion** — Animations and motion effects
* **Lucide React** — Interface icons
* **React Icons** — Additional iconography
* **React Intersection Observer** — Scroll and viewport-based interactions

### Development & Deployment

* **Node.js**
* **npm**
* **Git & GitHub**
* **Vercel**

## 📂 Project Structure

```text
tezos-jh-website/
├── app/
│   ├── blogs/
│   ├── credits/
│   ├── events/
│   ├── members/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── BoardMembers.tsx
│   ├── MemberDetails.tsx
│   ├── MemberList.tsx
│   ├── Navbar.tsx
│   ├── Teacher.tsx
│   ├── eventslider.tsx
│   ├── hero.tsx
│   └── ...
│
├── data/
│   └── Community and website data
│
├── public/
│   └── Images and static assets
│
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### 1. Clone the repository

```bash
git clone https://github.com/samiaabid06/tezos-jh-website.git
```

### 2. Navigate to the project

```bash
cd tezos-jh-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

## 📜 Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the Next.js development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server          |
| `npm run lint`  | Runs ESLint checks                    |

## 🏗️ Production Build

Before deploying, verify the production build locally:

```bash
npm run build
```

To run the generated production build:

```bash
npm run start
```

## ☁️ Deployment

The application is deployed on **Vercel** and connected to the GitHub repository's `main` branch.

### Deployment Workflow

```text
Development
     ↓
Git Commit
     ↓
GitHub / main
     ↓
Vercel Build
     ↓
Production Deployment
     ↓
Live Website
```

**Live:** https://tezos-jh-website-aarp.vercel.app/

## 🔐 Security & Maintenance

The project uses a maintained Next.js 15 release. Dependencies are managed through `package.json` and `package-lock.json`.

For production changes, it is recommended to:

1. Install and review dependency updates.
2. Run `npm run build` locally.
3. Review the changes before pushing to `main`.
4. Verify the resulting Vercel deployment.

## 🎯 Project Objectives

* Establish a professional digital presence for Tezos Jamia Hamdard.
* Showcase the community, leadership, faculty mentors, and departments.
* Provide a structured archive of events and activities.
* Publish technical and community-focused content.
* Deliver a modern, accessible, and responsive user experience.
* Maintain a modular and reusable frontend architecture.

## 🤝 Contributing

Contributions and improvements are welcome.

Create a feature branch:

```bash
git checkout -b feature/your-feature
```

Commit your changes:

```bash
git add .
git commit -m "feat: describe your change"
```

Push the branch:

```bash
git push origin feature/your-feature
```

Then open a pull request for review.

## 👩‍💻 Author

**Samia Abid**

Developed for the **Tezos Jamia Hamdard** student community.

## 📄 License

This project is currently maintained as the website for Tezos Jamia Hamdard. Licensing and reuse terms should be defined before distributing the project as an open-source package.
