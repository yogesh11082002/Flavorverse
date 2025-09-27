# **App Name**: FlavorVerse

## Core Features:

- User Authentication: Secure user registration and login via Clerk / NextAuth.js with email and Google OAuth.
- Food Sharing Feed: Display a grid view of food posts with images, names, and descriptions. Includes like and comment functionality with smooth hover animations.
- Dish Detail Page: Show an enlarged food image, description, likes, and comments, with animated transitions between pages.
- Add a Dish: Allow users to upload dish name, description, and image using ImageKit/Cloudinary. Save the post to PostgreSQL database via Prisma.
- Search and Filter: Enable searching of dishes by name and category, with filtering by trending/latest.

## Style Guidelines:

- Primary color: Slate (#718096) for a minimalist, modern aesthetic.
- Background color: White (#FFFFFF) to maintain a clean look.
- Accent color: Green (#4CAF50) for CTAs and highlights, inspired by fresh food and growth.
- Headline font: 'Poppins' (sans-serif) for a geometric, contemporary feel.
- Body font: 'PT Sans' (sans-serif) for readability and warmth.
- Use modern, minimalist icons from a library like FontAwesome or Feather Icons. Consistent stroke weight and rounded corners.
- Subtle animations for page transitions and hover effects using Framer Motion. Use spring-based animations for a smooth, natural feel.