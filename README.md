# PortGen ✨

**Instantly generate beautiful, minimal, and deployable portfolios from your content.**

## Overview

PortGen is an open-source web application designed to help professionals showcase their work with zero hassle. It's an intelligent system that transforms your resume into a stunning, professional portfolio website.

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

## How It Works: The 60-Second Portfolio

Our initial launch is focused on one flawless experience: turning a professional's resume into a beautiful, functional portfolio.

1.  **Upload Your Resume**: The journey starts with a simple drag-and-drop. You provide your resume in PDF format.
2.  **AI-Powered Analysis**: Our system instantly parses the document, intelligently identifying key sections like your work experience, projects, skills, and education.
3.  **Instant Portfolio**: A complete, multi-section portfolio is generated and populated with your content.
4.  **Choose Your Style**: You can cycle through a library of beautiful, opinionated themes to find the one that best tells your story. Our launch theme is **"Monaco"**—a clean, text-focused, professional theme perfect for developers and other text-heavy roles.
5.  **Edit & Deploy**: Tweak any detail in our simple editor and your portfolio is ready to be shared with the world.

---

## Features Roadmap 🚀

### Phase 1: The Resume Engine

- [ ] **User Authentication**:
  - [x] Secure user accounts using NextAuth.js with Google & GitHub.
- [ ] **Database & Content Modeling**:
  - [ ] Set up PostgreSQL with Prisma.
  - [ ] Define schemas for `User`, `Portfolio`, and a flexible `ContentBlock` model to store parsed resume data (e.g., experience, projects, skills).
- [ ] **AI Resume Analysis**:
  - [ ] Backend endpoint to receive a resume (PDF).
  - [ ] AI-powered service to parse the resume into our `ContentBlock` structure.
- [ ] **Core Portfolio Flow**:
  - [ ] A simple UI to upload a resume.
  - [ ] Automatically create a new portfolio from the parsed content.
- [ ] **Portfolio Editor & Theming**:
  - [ ] A protected dashboard listing a user's portfolios.
  - [ ] An editor to view/edit the content within the blocks of a portfolio.
  - [ ] A theme switcher to apply different templates (starting with "Monaco").
- [ ] **Public Portfolio Rendering**:
  - [ ] Render portfolios on public URLs (`portgen.dev/username/portfolio-slug`) based on the selected theme and content.

### Phase 2: Enhancements & Premium Features

- [ ] **More Themes & Customization** (e.g., color palettes, fonts)
- [ ] **LinkedIn Profile Import**
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
