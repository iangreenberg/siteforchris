# Infused - Cannabis Drops Website

A modern, clean, and minimalistic website for Infused, a cannabis company that sells liquid nano cannabinoid infusers called Canna Drops.

## Project Overview

This website is built using Next.js 14 with the App Router, TypeScript, and Tailwind CSS. It follows a microservices architecture with a focus on performance, accessibility, and SEO optimization.

## Features

- **Homepage**: Showcases Canna Drops products with engaging visuals and clear CTAs
- **Shop Page**: Displays products with filtering options and subscription purchase options
- **Wholesale Page**: Information for bulk buyers with an inquiry form
- **COA Page**: Certificates of Analysis for transparency
- **Affiliate Program**: Sign-up and information for potential affiliates
- **Recipes Page**: Showcases food and drink recipes using Canna Drops

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Heroicons
- **TypeScript**: For type safety and better developer experience

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/infused-website.git
cd infused-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── shop/             # Shop page
│   ├── wholesale/        # Wholesale page
│   ├── coa/              # Certificates of Analysis page
│   ├── affiliate/        # Affiliate program page
│   ├── recipes/          # Recipes page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── home/             # Homepage-specific components
│   ├── shop/             # Shop-specific components
│   ├── wholesale/        # Wholesale-specific components
│   ├── coa/              # COA-specific components
│   ├── affiliate/        # Affiliate-specific components
│   └── recipes/          # Recipes-specific components
├── services/             # Microservices
│   ├── api/              # API service
│   ├── auth/             # Authentication service
│   ├── cart/             # Shopping cart service
│   └── product/          # Product service
├── lib/                  # Utility libraries
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
└── types/                # TypeScript type definitions
```

## Deployment

This project is set up to be deployed on Vercel, but can be deployed on any platform that supports Next.js.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Heroicons](https://heroicons.com/)
