# Next.js Blog Viewer Application

## Overview
A Next.js blog viewer application demonstrating routing, server/client components, dynamic routes, authentication, and data fetching.

## Features
- Home page with blog post list
- Dynamic blog post details page
- Protected profile page with authentication
- Responsive design
- Authentication using Kinde Auth

## Prerequisites
- Node.js (v18+)
- npm or yarn
- Kinde Auth account

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Kinde Auth
   - Create a Kinde account
   - Configure authentication settings
4. Create a `.env.local` file with Kinde credentials
5. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure
- `app/`: Next.js app directory
  - `(auth)/`: Authentication-related routes
  - `blog/`: Blog-related pages
  - `profile/`: Profile page
- `components/`: Reusable React components
- `lib/`: Utility functions and API helpers

## Technologies Used
- Next.js 14
- React
- Kinde Authentication
- Tailwind CSS
- JSONPlaceholder API

## Environment Variables
- `KINDE_CLIENT_ID`
- `KINDE_CLIENT_SECRET`
- `KINDE_ISSUER_URL`
- `KINDE_SITE_URL`
- `KINDE_POST_LOGOUT_REDIRECT_URL`
- `KINDE_POST_LOGIN_REDIRECT_URL`

