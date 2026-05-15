# Integration Guide - Luxury Furniture Website

This guide walks you through completing the Sanity CMS integration for your luxury furniture website.

## Current Status ✅

Your website is **fully built and running** with:
- ✅ All 7 pages created and styled
- ✅ Responsive design completed
- ✅ Components fully functional
- ✅ Mock data for development
- ✅ Dev server running at http://localhost:3000
- ⏳ Awaiting Sanity CMS integration (in progress)

## What's Left to Do

### 1. Verify Sanity Environment Variables ✅ DONE

Your Vercel project now has these environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your dataset name

**Status**: Environment variables have been requested and added to your Vercel project.

### 2. Deploy Sanity Schema (Next Step)

Once you have confirmed your Sanity project credentials:

```bash
# Step 1: Make sure you're logged into Sanity
sanity login

# Step 2: Deploy the schema
npx sanity@latest schema deploy

# Step 3: Start the Sanity studio (optional - for content editing)
npx sanity@latest dev
```

This will:
- Deploy all content schemas to your Sanity backend
- Create the necessary document types
- Set up validation rules
- Configure field options

### 3. Add Your Content to Sanity

#### Option A: Using Sanity Studio (Recommended)

```bash
# Start the studio
npx sanity@latest dev

# Opens at http://localhost:3333
# Create content using the intuitive interface
```

#### Option B: Create Documents Manually

You can create content directly:

1. Go to your Sanity project dashboard
2. Navigate to the dataset (production)
3. Create new documents for:
   - Products
   - Services
   - Testimonials
   - News articles
   - Team members
   - Gallery items
   - Site settings

#### Option C: Use the Seed Data Template

Example JSON template in `/sanity/seed-data.json`:
- Products with images and specs
- Services with descriptions
- Testimonials with ratings
- News articles with dates

## Content Structure Quick Reference

### Products
```
name: "Luxe Velvet Sofa"
slug: "luxe-velvet-sofa"
description: "Short description"
fullDescription: "Detailed description"
images: [{ image, alt }]
materials: ["Velvet", "Wood"]
dimensions: { width: 240, height: 85, depth: 95 }
category: "sofas"
featured: true
```

### Services
```
name: "Interior Design Consultation"
slug: "interior-design-consultation"
description: "Service description"
longDescription: "Detailed explanation"
```

### Testimonials
```
author: "Customer Name"
text: "Review content"
rating: 5
image: { asset }
```

### News/Blog
```
title: "Article Title"
slug: "article-title"
excerpt: "Short summary"
content: "Full article"
author: "Author Name"
publishedAt: "2024-05-01"
image: { asset }
```

## Integration Verification Checklist

Once everything is set up, verify:

- [ ] Environment variables set in Vercel
- [ ] Schema deployed via `npx sanity@latest schema deploy`
- [ ] At least one product created in Sanity
- [ ] Featured product showing on home page
- [ ] Product images displaying correctly
- [ ] Product details page loading
- [ ] All pages rendering content from Sanity
- [ ] No console errors in browser dev tools

## Testing the Integration

### Test 1: Homepage
1. Go to http://localhost:3000
2. Should see featured products, services, testimonials, news
3. All populated from Sanity data

### Test 2: Products Page
1. Navigate to /products
2. Should see all products in grid
3. Filter by category should work
4. Click a product to see details

### Test 3: Product Details
1. Click any product
2. Should show:
   - Image gallery
   - Full description
   - Materials & dimensions
   - Related products
   - Quote form

### Test 4: Other Pages
1. Check /gallery, /services, /about, /contact
2. Should all display content from Sanity
3. Forms should be functional

## Troubleshooting

### Issue: "Configuration must contain `projectId`"

**Solution:**
1. Check Vercel project settings
2. Verify env vars are set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
3. Restart dev server: `pnpm dev`
4. Clear Next.js cache: `rm -rf .next`

### Issue: Schema Deploy Fails

**Solution:**
```bash
# Login to Sanity
sanity login

# Try deploying again
npx sanity@latest schema deploy

# If issues persist, check:
# - Correct project ID
# - Correct dataset name
# - Network connection
```

### Issue: No Content Shows

**Solution:**
1. Verify content is published (not draft)
2. Check content type names match schema
3. Verify images are uploaded to Sanity
4. Check browser console for API errors
5. Verify project ID in queries

### Issue: Images Not Loading

**Solution:**
1. Images must be uploaded to Sanity
2. Verify image fields in document
3. Check `@sanity/image-url` is installed
4. Verify CORS is configured in Sanity project settings

## Development vs Production

### During Development (Now)
- Using mock data as fallback
- Can test without Sanity fully configured
- Perfect for styling and layout refinement
- Environment: http://localhost:3000

### When Sanity is Ready
- Real data from CMS
- Images from Sanity CDN
- Full content management
- Ready for production

### After Sanity Configuration
- Deploy to Vercel
- Set production environment variables
- Sanity will automatically optimize images
- Content updates live instantly

## File Reference

Key files for integration:

- `/lib/sanity.client.ts` - Sanity connection
- `/lib/mock-data.ts` - Fallback data
- `/sanity/schema.ts` - Schema definitions
- `/sanity/schemas/` - Individual schemas
- `SANITY_SETUP.md` - Detailed setup
- `README.md` - Project overview

## Next Steps Summary

1. **Confirm Sanity Credentials**
   - Project ID from Sanity dashboard
   - Dataset name (usually "production")

2. **Deploy Schema**
   - Run `npx sanity@latest schema deploy`

3. **Add Content**
   - Use Sanity studio or API
   - Start with products and services

4. **Verify Integration**
   - Check homepage shows your content
   - Test product pages
   - Verify images load

5. **Deploy to Vercel**
   - Push to GitHub
   - Deploy via Vercel dashboard
   - Set production env vars

6. **Monitor & Update**
   - Add more content to Sanity
   - Changes appear instantly
   - No redeploys needed

## Support Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Project Documentation**: See README.md
- **Setup Guide**: See SANITY_SETUP.md

## Quick Command Reference

```bash
# Development
pnpm dev                          # Start dev server
pnpm build                        # Build for production
pnpm lint                         # Run linter

# Sanity
sanity login                      # Login to Sanity
npx sanity@latest dev            # Start Sanity studio
npx sanity@latest schema deploy  # Deploy schemas
npx sanity@latest schema list    # List schemas

# Next.js
pnpm dev                         # Dev server
pnpm build && pnpm start        # Production build & run
```

## Estimated Timeline

- **Now**: Website is ready, awaiting Sanity setup
- **30 mins**: Deploy schema and add initial content
- **1-2 hours**: Add all products, services, testimonials
- **Ready**: Full website with live content management

---

**Status**: ✅ Website Ready | ⏳ Awaiting Sanity Integration

**Questions?** Check the documentation files or Sanity support.
