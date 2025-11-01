# Vercel Deployment Guide

This guide will help you deploy the frontend of this Smart Waste Management Platform to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository (optional but recommended)

## Deployment Methods

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from the project root:**
   ```bash
   vercel
   ```
   
   - Follow the prompts:
     - Set up and deploy? **Yes**
     - Which scope? (Select your account)
     - Link to existing project? **No** (for first deployment)
     - Project name? (Press Enter for default or enter custom name)
     - Directory? **Press Enter** (uses current directory)
     - Override settings? **No**

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Method 2: Using Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)** and sign in

2. **Click "Add New Project"**

3. **Import your Git repository** (GitHub/GitLab/Bitbucket) OR **Upload your project**

4. **Configure the project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: **./** (leave as default)
   - Build Command: **npm run build** (auto-detected)
   - Output Directory: **.next** (auto-detected)
   - Install Command: **npm install** (auto-detected)

5. **Environment Variables** (if needed):
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` if you're using Google Maps features
   - Click "Add" for each variable

6. **Click "Deploy"**

## Environment Variables

If you need to set environment variables in Vercel:

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add variables:
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (if using Google Maps)

## Important Notes

- ✅ The **server/** directory is excluded from deployment (via `.vercelignore`)
- ✅ The frontend uses mock data, so no backend server is required
- ✅ Next.js is automatically detected by Vercel
- ✅ All static assets and pages will be optimized automatically

## After Deployment

- Your site will be live at: `https://your-project-name.vercel.app`
- You'll receive a unique URL for each deployment
- Production deployments use the main branch or your custom domain

## Troubleshooting

- If build fails, check that all dependencies are in `package.json`
- Ensure Node.js version is 18+ (Vercel auto-detects this)
- Check build logs in the Vercel dashboard for specific errors

