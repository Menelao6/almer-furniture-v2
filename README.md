# Luxury Furniture Website

A premium, fully-featured luxury furniture e-commerce website built with Next.js 16, Tailwind CSS, and Sanity CMS. The site features 7 complete pages with smooth interactions, elegant design, and professional functionality.

## 🎨 Features

### Pages
- **Home** - Hero section, featured products, services preview, testimonials, news, and CTA
- **Products** - Full catalog with category filtering and sorting
- **Product Details** - Image gallery, specifications, materials, dimensions, related products, and quote request
- **Gallery** - Masonry layout with room-type filtering and lightbox viewer
- **Services** - Service offerings with process steps and team showcase
- **About** - Company story, values, heritage, and team members
- **Contact** - Contact form, business info, hours, and WhatsApp integration

### Core Features
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations and transitions
- ✅ Image galleries with lightbox
- ✅ Product filtering and search
- ✅ Contact forms with validation
- ✅ SEO optimized
- ✅ Dark mode ready
- ✅ Sanity CMS integration
- ✅ Mock data for development

## 🛠 Tech Stack

- **Framework**: Next.js 16 (with Turbopack)
- **Styling**: Tailwind CSS 4.2
- **CMS**: Sanity
- **Database**: Sanity managed
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Handling**: Next.js Image + @sanity/image-url
- **Forms**: Custom with validation
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- Sanity account

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd <project-name>

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Project Structure

```
/app
  - page.tsx (Home)
  - /products (Products catalog)
    - page.tsx
    - [slug]/page.tsx (Product details)
  - /gallery/page.tsx
  - /services/page.tsx
  - /about/page.tsx
  - /contact/page.tsx
  - layout.tsx (Root layout)
  - globals.css (Tailwind + theme)

/components
  - nav.tsx (Navigation)
  - footer.tsx (Footer)
  - hero.tsx (Hero section)
  - featured-products.tsx
  - services-section.tsx
  - testimonials.tsx
  - news-section.tsx
  - product-card.tsx
  - service-card.tsx
  - image-gallery.tsx
  - quote-form.tsx
  - cta-section.tsx

/lib
  - sanity.client.ts (Sanity client config)
  - sanity.image.ts (Image URL builder)
  - mock-data.ts (Development fallback data)

/sanity
  - schema.ts (Schema index)
  - /schemas
    - product.ts
    - service.ts
    - testimonial.ts
    - news.ts
    - team.ts
    - gallery.ts
    - siteSettings.ts
```

## 🎯 Sanity CMS Setup

### 1. Configure Environment Variables

Add these to your Vercel project (already done):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 2. Deploy Schema

```bash
npx sanity@latest schema deploy
```

### 3. Add Content

Option A - Using Sanity Studio:
```bash
npx sanity@latest dev
# Opens at http://localhost:3333
```

Option B - Via API using the seed-data.json template

### Available Content Types
- **Products** - Furniture catalog with images, specs, pricing
- **Services** - Your service offerings
- **Testimonials** - Customer reviews and ratings
- **News** - Blog posts and announcements
- **Team** - Team member profiles
- **Gallery** - Project/room showcase
- **Site Settings** - Global site configuration

See `SANITY_SETUP.md` for detailed setup instructions.

## 🎨 Design System

### Color Palette
- **Primary**: #8b7355 (Warm Tan)
- **Secondary**: #d4c5b9 (Light Beige)
- **Accent**: #a89968 (Gold)
- **Background**: #f9f7f4 (Off-White)
- **Foreground**: #2a2520 (Charcoal)

### Typography
- **Headings**: Serif font (elegant)
- **Body**: Sans-serif font (readable)

### Spacing
Uses Tailwind CSS spacing scale for consistency.

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimized (md breakpoint)
- Desktop enhanced (lg breakpoint)
- All components tested on various screen sizes

## 🔍 SEO

- Meta tags and descriptions for all pages
- Open Graph support
- Semantic HTML structure
- Image alt text
- Sitemap generation ready

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy via Vercel Dashboard
# or use Vercel CLI
vercel
```

### Environment Variables for Production
Make sure these are set in Vercel:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## 📚 Using Mock Data

During development, if Sanity isn't configured, the site uses mock data from `/lib/mock-data.ts`. This allows you to:

- See the full design and layout
- Test functionality
- Preview content structure

Replace with real Sanity data when configured.

## 🛒 Product Details Page Features

Each product displays:
- Image gallery with lightbox
- Full description
- Materials list
- Dimensions (width, height, depth)
- Related products
- Quote/contact request form
- Product category and details

## 📞 Contact & Forms

- Contact form with validation
- Quote request form for products
- Email integration ready
- WhatsApp button support

## 🎬 Smooth Interactions

- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth page transitions
- Image gallery transitions
- Form submission feedback

## 🔧 Customization

### Change Color Scheme
Edit `/app/globals.css` CSS variables:
```css
:root {
  --primary: #your-color;
  --accent: #your-color;
  /* etc */
}
```

### Add New Pages
1. Create new folder in `/app`
2. Add `page.tsx`
3. Update Navigation component
4. Create schema in Sanity if needed

### Modify Components
All components are in `/components` and fully customizable.

## 📖 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## 🐛 Troubleshooting

### Dev Server Issues
- Clear `.next` folder: `rm -rf .next`
- Restart server: `pnpm dev`

### Sanity Connection Issues
- Check environment variables are set
- Verify Project ID is correct
- Run `npx sanity@latest schema deploy`

### Build Issues
- Clear node_modules: `rm -rf node_modules`
- Reinstall: `pnpm install`

See `SANITY_SETUP.md` for more detailed troubleshooting.

## 📄 License

This project is created with v0.app

## 🤝 Support

For issues or questions:
1. Check documentation files
2. Review Sanity documentation
3. Check Next.js documentation
4. Open an issue in your repo

---

**Status**: ✅ Ready for development and deployment

**Last Updated**: May 2024

**Version**: 1.0.0
