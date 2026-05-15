# 🚀 Deployment Checklist

Use this checklist to ensure everything is configured correctly before deploying to production.

## Pre-Deployment Checklist

### 1. Environment Variables ✅
- [x] `NEXT_PUBLIC_SANITY_PROJECT_ID` added to Vercel
- [x] `NEXT_PUBLIC_SANITY_DATASET` added to Vercel
- [ ] Verify values are correct in Vercel Settings → Vars

### 2. Sanity CMS Setup
- [ ] Sanity project created at sanity.io
- [ ] Schema deployed: `npx sanity@latest schema deploy`
- [ ] At least 1 product created in Sanity
- [ ] At least 1 service created in Sanity
- [ ] Images uploaded to Sanity
- [ ] Content published (not in draft)
- [ ] Site settings configured

### 3. Content Verification
- [ ] Homepage loads with real data (not mock)
- [ ] Products page displays all products
- [ ] Product details page shows correct information
- [ ] Images load correctly from Sanity
- [ ] Gallery page displays items
- [ ] Services page populated
- [ ] About page content correct
- [ ] Contact form works

### 4. Testing
- [ ] Mobile responsiveness checked (iPhone, iPad, Android)
- [ ] Tablet view verified (iPad size)
- [ ] Desktop view checked (1920px, 1440px, 1024px)
- [ ] All links work correctly
- [ ] Forms submit successfully
- [ ] Contact form works (email preview)
- [ ] No console errors in browser DevTools
- [ ] No TypeScript build errors

### 5. Performance
- [ ] Images optimized in Sanity
- [ ] Lighthouse score checked (target: 90+)
- [ ] Page load time acceptable
- [ ] Images lazy-loading properly
- [ ] No unused dependencies

### 6. SEO & Meta Tags
- [ ] Meta title set correctly
- [ ] Meta description set
- [ ] Open Graph tags configured
- [ ] Sitemap generated
- [ ] robots.txt in place
- [ ] Canonical URLs correct

### 7. Security
- [ ] No API keys in code
- [ ] Environment variables used for secrets
- [ ] CORS configured in Sanity
- [ ] No hardcoded credentials
- [ ] HTTPS configured
- [ ] Security headers set (if using Next.js middleware)

### 8. Code Quality
- [ ] Linter passes: `pnpm lint`
- [ ] Build succeeds: `pnpm build`
- [ ] No console.log debug statements left
- [ ] Components properly typed (TypeScript)
- [ ] No dead code

### 9. Git & Repository
- [ ] All changes committed
- [ ] Meaningful commit messages
- [ ] No merge conflicts
- [ ] Branch is up to date with main
- [ ] Sensitive data not in git

### 10. Vercel Configuration
- [ ] Project connected to GitHub
- [ ] Environment variables set
- [ ] Build settings correct
- [ ] Deployment preview works
- [ ] Production domain configured
- [ ] Custom domain DNS updated (if applicable)

## Deployment Process

### Step 1: Final Testing
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build

# Start production server
pnpm start

# Visit http://localhost:3000 and test thoroughly
```

### Step 2: Git Commit & Push
```bash
git add .
git commit -m "Ready for production deployment"
git push origin main
```

### Step 3: Deploy to Vercel
- Go to Vercel Dashboard
- Select the project
- Click "Deploy"
- Wait for build to complete (3-5 minutes)
- Verify preview deployment works

### Step 4: Verify Production
- [ ] Visit production URL
- [ ] Test all pages
- [ ] Verify content loads from Sanity
- [ ] Check images display
- [ ] Test forms
- [ ] Verify analytics (if setup)

### Step 5: Post-Deployment
```bash
# Monitor deployment logs
# Check for any errors
# Monitor performance
# Get initial traffic metrics
```

## Performance Targets

- [ ] Lighthouse Score: 90+
- [ ] First Contentful Paint (FCP): < 2s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Time to Interactive (TTI): < 3.5s

## Monitoring Checklist (Post-Deployment)

- [ ] Set up monitoring (Vercel Analytics, Google Analytics)
- [ ] Configure error tracking (Sentry, Vercel)
- [ ] Set up uptime monitoring
- [ ] Create backup strategy
- [ ] Document deployment process
- [ ] Create rollback plan

## Content Checklist

All required content should be in Sanity:

### Minimum Required (MVP)
- [ ] 6-10 products with images
- [ ] 4 services
- [ ] 3-4 testimonials
- [ ] Company info (about)
- [ ] Contact information
- [ ] 2-3 news articles

### Enhanced (Recommended)
- [ ] 15+ products
- [ ] 4-6 services
- [ ] 6+ testimonials
- [ ] Team member profiles
- [ ] 6+ gallery items
- [ ] 6+ news articles
- [ ] All fields filled out

## Verification Questions

Before deploying, answer these:

- [ ] Is the site visually appealing and professional?
- [ ] Does all content from Sanity display correctly?
- [ ] Are all pages accessible and functional?
- [ ] Is the site fast (< 2 second load)?
- [ ] Is it mobile-friendly?
- [ ] Are forms working?
- [ ] Is SEO configured?
- [ ] Are analytics ready?
- [ ] Is error handling in place?
- [ ] Is backup/recovery planned?

## Rollback Plan

If something goes wrong:

1. **Immediate Rollback**
   - Go to Vercel Dashboard
   - Deployments → Find previous working version
   - Click → "Redeploy"

2. **Data Rollback**
   - Sanity has version history
   - Go to document → "Versions"
   - Select previous version → "Restore"

3. **DNS Rollback** (if applicable)
   - Point domain to previous server
   - Update DNS records
   - Wait for propagation (up to 24hrs)

## Support Contacts

- **Sanity Support**: https://www.sanity.io/support
- **Vercel Support**: https://vercel.com/support
- **Next.js Help**: https://github.com/vercel/next.js/discussions

## Final Sign-Off

- [ ] All checklist items reviewed
- [ ] Team approval received
- [ ] Client/stakeholder approval received
- [ ] Backup verified
- [ ] Monitoring configured
- [ ] Go-live plan documented

✅ **Ready to Deploy!**

---

## Quick Deployment Command

```bash
# Final check
pnpm lint && pnpm build

# If successful, push and deploy
git add . && git commit -m "Production ready" && git push

# Then deploy via Vercel dashboard or CLI
vercel --prod
```

## Post-Launch Monitoring

First 24 hours:
- Monitor error logs
- Check performance metrics
- Test user flows
- Verify form submissions
- Check email notifications
- Monitor server resources

## Notes

Add any additional notes or custom requirements here:

---

**Deployment Date**: _______________
**Deployed By**: _______________
**Approval**: _______________

---

**Status**: Ready for Deployment ✅
