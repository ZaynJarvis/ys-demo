# Cube Construction Website

This is a [Next.js](https://nextjs.org) project showcasing Cube Construction's F&B interior design and renovation work in Singapore.

## Requirements

- **Node.js 22.x or higher** (configured for optimal performance)
- npm or yarn

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables (optional):**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open [http://localhost:3000](http://localhost:3000) to view the website**

## Project Structure

- `/src/app` - Main application pages and components
- `/public/images` - Static assets and project images
- `projects.csv` - Project data for the portfolio
- `netlify.toml` - Netlify deployment configuration

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Netlify (Recommended)

This project is optimized for deployment on Netlify with:

- **Node.js 22** environment configured in `netlify.toml`
- **Next.js plugin** for optimal build performance
- **Static file caching** for images and assets
- **Automatic deployment** from Git repository

To deploy:
1. Connect your repository to Netlify
2. Netlify will automatically detect the `netlify.toml` configuration
3. Build command: `npm run build` (configured automatically)
4. Publish directory: `.next` (configured automatically)

### Alternative: Vercel

You can also deploy to [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
