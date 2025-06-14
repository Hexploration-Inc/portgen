# PortGen ✨

**Instantly generate beautiful, minimal, and deployable portfolios from your content.**

## Overview

PortGen is an open-source web application designed to help professionals showcase their work with zero hassle. It's an intelligent system that transforms your content—be it a resume, a folder of images, or project notes—into a stunning, professional portfolio website.

Our goal is to create the most seamless experience for generating a professional online presence, giving users full control over their narrative without needing to write a single line of code.

## Why Choose PortGen?

The world has great tools for showcasing work, like social platforms (Behance, Dribbble) and powerful builders (Semplice, Webflow). PortGen is designed to fit a different, crucial need.

|                    | PortGen                                 | Social Platforms                  | Manual Builders                         |
| :----------------- | :-------------------------------------- | :-------------------------------- | :-------------------------------------- |
| **Goal**           | **Get Hired.**                          | Get Likes.                        | Build a Website.                        |
| **Speed**          | **Minutes.**                            | Instant, but not a portfolio.     | Days.                                   |
| **Ownership**      | **You own the brand.** (`yourname.com`) | You are a user on their platform. | You own the tech stack.                 |
| **Overhead**       | **Zero.** It just works.                | None, but you don't control it.   | **High.** WordPress, hosting, security. |
| **Learning Curve** | **None.**                               | Easy.                             | Steep.                                  |

1.  **From Content to Live in Minutes**: We automate the presentation. You provide your work and your story, and our intelligent, opinionated themes handle the complex design work for you. You get a world-class result, instantly.

2.  **Zero Technical Overhead**: Forget hosting, plugins, and security updates. PortGen is a fully managed solution. You get all the benefits of a professional website with none of the hassle.

3.  **Ownership & Professionalism**: A PortGen portfolio at your own custom domain (`yourname.com`) signals serious professionalism. Unlike a social media profile, it's a quiet, focused space where your work and your story take center stage, free from the noise of likes, ads, and competing content. **Dribbble is where you get noticed. PortGen is where you get hired.**

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS and ShadCN UI
- **Database**: PostgreSQL (with Prisma ORM)
- **Authentication**: NextAuth.js
- **Deployment Target**: AWS / DigitalOcean

---

## The Flawless Portfolio: Launch Plan

For our initial launch, we will focus on a world-class experience for three key personas.

### 1. The Software Developer

**Goal:** Showcase technical expertise, project impact, and professional experience.

- **Initial Action**: Upload a resume.
- **Instant Result**: A fully populated portfolio with sections for experience, projects (with source code links and live links), skills and education.
- **Launch Theme: "Monaco"**: A clean, text-focused, professional theme.

### 2. The Photographer

**Goal:** Create an immersive, unobtrusive visual experience where the images are the hero.

- **Initial Action**: Upload a folder of photos.
- **Instant Result**: A beautiful, minimal gallery of your work with a fast, full-screen lightbox.
- **Launch Theme: "Kyoto"**: An image-first, minimalist theme designed to make photos pop.

### 3. The Designer (UI/UX, Product)

**Goal:** Blend visual polish with compelling storytelling to explain the "why" behind the work.

- **Initial Action**: Upload a collection of your best design shots (JPEGs, PNGs).
- **Instant Result**: A `VisualShowcase`—a stunning, grid-based portfolio of your work. This gives you a professional presence in seconds.
- **The Power-Up**: For any project in your showcase, you can choose to **"Add the Story."** This converts it into a rich `CaseStudy` block, allowing you to add detailed sections about your process, from problem to solution. This is how you show off your thinking, not just your pixels.
- **Launch Theme: "Bauhaus"**: A theme with a strong grid system and bold typography, perfect for balancing visuals and text in both simple showcases and detailed case studies.

---

## Features Roadmap 🚀

### Phase 1: Core Engine & Persona Launch

- [ ] **User Authentication**:
  - [ ] Secure user accounts using NextAuth.js (Email/Password & Google OAuth).
- [ ] **Database & Content Block Scaffolding**:
  - [ ] Set up PostgreSQL with Prisma.
  - [ ] Define schemas for `User`, `Portfolio`, and all essential `Content Blocks` for our three launch personas.
- [ ] **AI Resume Analysis (for Developers)**:
  - [ ] Backend endpoint to receive a resume (PDF).
  - [ ] AI-powered service to parse the resume into our block structure.
- [ ] **Portfolio Creation Flow**:
  - [ ] A simple UI to choose a portfolio type (e.g., "Developer", "Designer").
  - [ ] For non-resume flows, a simple interface to start adding content blocks (e.g., an image uploader for photographers).
- [ ] **Basic Dashboard & Editor**:
  - [ ] A protected page listing a user's portfolios.
  - [ ] An editor to add, remove, reorder, and edit the content within the blocks of a portfolio.
- [ ] **Theme Engine & Public Viewing**:
  - [ ] Build the three launch themes: "Monaco", "Kyoto", and "Bauhaus".
  - [ ] Render portfolios on public URLs (e.g., `portgen.dev/username/portfolio-slug`).

### Phase 2: Enhancements & Premium Features

- [ ] **LinkedIn Profile Import**
- [ ] **More Themes & Customization** (e.g., color palettes)
- [ ] **Custom Domains (Premium)**
- [ ] **Analytics (Premium)**
- [ ] **Contact Forms (Premium)**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
