# Sanity CMS Setup Guide

This website is fully integrated with Sanity CMS. Follow these steps to complete the setup:

## Step 1: Get Your Sanity Project Credentials

1. Go to [Sanity.io](https://sanity.io)
2. Sign in to your account (or create one if you haven't)
3. Navigate to your "Almer" project
4. Go to **Project Settings** → **API**
5. Find your **Project ID** and note it down
6. Your **Dataset** should be `production` (or your preferred dataset name)

## Step 2: Set Environment Variables

The environment variables have already been added to your Vercel project:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

Make sure they are set correctly in your Vercel project settings.

## Step 3: Deploy the Schema

Once the environment variables are set, run:

```bash
npx sanity@latest schema deploy
```

This will deploy all the content schemas to your Sanity backend.

## Step 4: Add Content to Sanity

You can add content in two ways:

### Option A: Using Sanity Studio (Recommended)
1. Run `npx sanity@latest dev` to start the Sanity studio
2. Go to `http://localhost:3333`
3. Start adding products, services, testimonials, news, etc.

### Option B: Using the Sanity API
Use the provided `sanity/seed-data.json` as a template to create content via API.

## Content Structure

### Products
- **Name**: Product name
- **Slug**: URL-friendly name (auto-generated)
- **Description**: Short description
- **Full Description**: Detailed description
- **Images**: Array of product images
- **Materials**: List of materials used
- **Dimensions**: Width, Height, Depth (in cm)
- **Category**: Type of furniture
- **Featured**: Whether to show on homepage
- **Related Products**: Link to similar products

### Services
- **Name**: Service name
- **Slug**: URL-friendly name
- **Description**: Short description
- **Long Description**: Detailed description

### Testimonials
- **Author**: Customer name
- **Text**: Review content
- **Rating**: 1-5 stars
- **Image**: Optional customer photo

### News
- **Title**: Article title
- **Slug**: URL-friendly name
- **Excerpt**: Short summary
- **Content**: Full article
- **Author**: Writer name
- **Published At**: Publish date
- **Image**: Featured image

### Site Settings
- **Company Name**: Your business name
- **Contact Email**: Support email
- **Phone**: Business phone
- **Address**: Location
- **Hours**: Business hours
- **Social Links**: Social media profiles

## Schema Files

All schemas are located in `/sanity/schemas/`:
- `product.ts` - Product catalog
- `service.ts` - Service offerings
- `testimonial.ts` - Customer reviews
- `news.ts` - Blog posts/news
- `team.ts` - Team members
- `gallery.ts` - Project gallery
- `siteSettings.ts` - Global site settings

## Verifying Setup

After adding content to Sanity:

1. The homepage will automatically fetch and display featured products
2. The `/products` page will show all products with filtering
3. Click on a product to see the full details page
4. All other pages will populate with your content

## Troubleshooting

### "Configuration must contain `projectId`"
- Make sure `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set in Vercel
- Restart the dev server after setting env vars
- Run `pnpm dev` to see the changes

### Schema Deploy Fails
- Make sure you're logged into Sanity CLI: `sanity login`
- Check that the project ID matches your Sanity project
- Try deleting `.sanity/cache` folder if it exists

### No Data Shows on Pages
- Verify content is published in Sanity (not in draft)
- Check the GROQ queries in the component files match your schema
- Review browser console for API errors
- Check that images are properly uploaded to Sanity

## Next Steps

1. ✅ Add your Sanity environment variables (Done)
2. Deploy the schema: `npx sanity@latest schema deploy`
3. Add content to Sanity using the studio
4. Verify content appears on the website
5. Deploy to Vercel when ready

For more details, visit [Sanity Documentation](https://www.sanity.io/docs)
