# Tech Startup Website

A modern, clean Next.js website for a tech startup offering website development, mobile apps, and custom software solutions.

## Features

✨ **Modern Design**
- Clean, professional UI with Tailwind CSS
- Brand color palette: off-white, light blue, medium blue, soft purple
- Mobile-first responsive design
- Smooth transitions and hover effects

📄 **Pages Included**
- **Home** - Hero section, social proof, services overview, how it works, testimonials, CTA
- **Services** - Detailed service descriptions for websites, mobile apps, and custom software
- **Portfolio** - Case studies from 4 different industries (restaurant, retail, coaching, clinic)
- **About** - Team, values, story, tech stack, metrics
- **Contact** - Contact form, booking box, FAQ, what happens next

🎨 **Design System**
- Tailwind CSS with custom brand colors
- Reusable header and footer components
- Consistent typography and spacing
- Accessible form inputs

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.js           # Root layout
│   ├── globals.css         # Global styles
│   ├── page.js             # Home page
│   ├── services/
│   │   └── page.js         # Services page
│   ├── portfolio/
│   │   └── page.js         # Portfolio/case studies
│   ├── about/
│   │   └── page.js         # About us
│   └── contact/
│       └── page.js         # Contact form
├── components/
│   ├── Header.js           # Navigation header
│   └── Footer.js           # Footer
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Customization

### Brand Colors
Edit `tailwind.config.js` to change the color palette:
```js
colors: {
  brand: {
    'off-white': '#FBFBFB',
    'light-blue': '#E8F9FF',
    'medium-blue': '#C4D9FF',
    'soft-purple': '#C5BAFF',
  },
}
```

### Content
- Update company details in Footer component
- Replace placeholder team names in About page
- Update case studies in Portfolio page
- Customize contact information in Contact page

### Forms
The contact form currently shows a success message. To actually send emails, integrate with a service like:
- Formspree
- SendGrid
- AWS SES
- Vercel Forms

## Build & Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## SEO

The site is configured with:
- Meta tags for each page
- Semantic HTML
- Mobile-first responsive design
- Fast performance scores

Add Google Analytics by updating `app/layout.js` with your tracking ID.

## License

MIT
