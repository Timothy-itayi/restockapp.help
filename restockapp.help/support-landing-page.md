# Restock Support Landing Page — Spec

> **Purpose**: Create a support landing page for the Restock iOS app.  
> **URL**: `https://restockapp.email/support`  
> **Required by**: Apple App Store (all apps must have a live support URL)

---

## Context

Restock is an **offline-first inventory app** for small retailers. The core workflow is:

1. **Walk** — Go through your store and check what needs restocking
2. **Log** — Take a photo of your inventory sheet; AI extracts products and quantities
3. **Send** — Items are grouped by supplier; tap to send professional reorder emails

### Key Facts

- **No login required** — All data stored locally on device
- **No cloud database** — Stateless backend (Cloudflare Workers)
- **Target users** — Small shop owners, convenience stores, independent retailers
- **Platforms** — iOS (primary), Android (secondary)
- **Email sender** — `noreply@restockapp.email` with Reply-To set to user's email

---

## Brand Identity

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#228B22` | Primary brand color, CTAs |
| Cream | `#FFFDD0` | Backgrounds, cards |
| Dark Forest | `#1A6B1A` | Text on light backgrounds |
| Off-White | `#FAF9F6` | Page background |
| Charcoal | `#333333` | Body text |

### Typography

- **Headings**: Bold, clean sans-serif (e.g., Satoshi, General Sans, or similar)
- **Body**: Readable sans-serif, 16-18px base
- **Tone**: Professional but approachable, no corporate jargon

### Logo

- App icon available at: `restock/assets/restock-icon-adjusted.png`
- Icon is a stylized "R" in Forest Green on cream background

---

## Page Structure

### 1. Hero Section

- App name: **Restock**
- Tagline: **"Walk. Log. Send."**
- Brief description: "The offline-first restocking app for small retailers"
- App Store download badge (link to App Store listing)

### 2. How It Works

Three-step visual breakdown:

1. **Walk** — "Go through your store and note what's running low"
2. **Log** — "Snap a photo of your inventory list — AI reads it for you"
3. **Send** — "Review and send professional reorder emails to your suppliers"

Use icons or simple illustrations for each step.

### 3. Key Features

- **Offline-First** — Your data stays on your device. No cloud sync. No account required.
- **Smart Image Parsing** — AI reads handwritten or printed inventory lists
- **Supplier Grouping** — Products sorted by vendor automatically
- **Professional Emails** — Clean, branded emails sent on your behalf
- **Session Management** — Track past orders, pick up where you left off

### 4. FAQ / Support Section

Common questions:

**Q: Do I need to create an account?**  
A: No. Restock works entirely offline. Just enter your name and store once to get started.

**Q: How do emails work?**  
A: Emails are sent from `noreply@restockapp.email` with your email as the Reply-To. When suppliers reply, the response goes directly to your inbox.

**Q: Is my data stored in the cloud?**  
A: No. All your inventory data stays on your device. We only use cloud services to read your photos (AI parsing) and send emails. Nothing is stored on our servers.

**Q: What image formats are supported?**  
A: JPEG, PNG, GIF, and WebP. iOS photos (HEIC) are automatically converted.

**Q: How do I reset my data?**  
A: Go to Settings → Reset All Data. This clears all sessions, suppliers, and profile information.

**Q: The AI misread some items. What do I do?**  
A: After parsing, you can edit or remove items before importing them. Tap any item to correct the product name or quantity.

### 5. Contact / Support

- **Email**: `support@restockapp.email`
- Simple contact form (optional): Name, Email, Message
- Response time: "We typically respond within 24-48 hours"

### 6. Footer

- Links: Privacy Policy | Terms of Service | Contact
- Copyright: © 2025 Restock. All rights reserved.
- Small print: "Restock is not affiliated with your suppliers. Emails are sent on your behalf."

---

## Technical Requirements

### Hosting

- **Domain**: `restockapp.email`
- **Recommended stack**: Static site (HTML/CSS/JS) or Next.js/Astro deployed to Vercel/Cloudflare Pages
- **SSL**: Required (HTTPS only)

### Pages Required

| Path | Purpose |
|------|---------|
| `/support` | Main support/landing page (this spec) |
| `/privacy` | Privacy policy (required by Apple) |
| `/terms` | Terms of service (optional but recommended) |

### Performance

- Lighthouse score > 90
- Mobile-first responsive design
- No heavy frameworks if possible — keep it fast and simple

### SEO

- Title: "Restock — Support | The Offline-First Restocking App"
- Meta description: "Get help with Restock, the inventory app for small retailers. FAQs, contact support, and learn how the app works."
- Open Graph tags for social sharing

---

## Design Notes

### Aesthetic Direction

- **Clean and minimal** — Not cluttered, lots of whitespace
- **Professional but warm** — Target audience is busy shop owners, not tech enthusiasts
- **Forest/nature undertones** — Subtle nod to the "Forest Green" brand color without being heavy-handed
- **Mobile-first** — Many users will access support from their phones

### Avoid

- Generic "AI slop" aesthetics (purple gradients, Inter font, cookie-cutter layouts)
- Overly playful or startup-y vibes
- Dark mode (keep it light and readable)
- Stock photos of people — use icons/illustrations if needed

### Inspiration

- Stripe's support pages (clean, scannable)
- Linear's marketing site (modern, confident)
- Notion's help center (organized, approachable)

---

## Assets Available

| Asset | Path | Notes |
|-------|------|-------|
| App Icon | `restock/assets/restock-icon-adjusted.png` | 1024×1024 |
| Onboarding Images | `restock/assets/images/onboarding/` | 4 JPEGs showing app workflow |
| Screenshots | (to be generated) | Dashboard, upload, email preview |

---

## Deliverables

1. **Single-page support site** at `/support`
2. **Privacy policy page** at `/privacy`
3. **Responsive design** (mobile, tablet, desktop)
4. **Contact form** that sends to `support@restockapp.email`
5. **App Store badge** linking to iOS app

---

## Notes for AI Agent

- This page must be **live and accessible** before Apple App Review
- The support URL in App Store Connect is `https://restockapp.email/support`
- Privacy policy URL is `https://restockapp.email/privacy`
- Keep the design distinctive — avoid the "AI-generated landing page" look
- Use the Forest Green (`#228B22`) / Cream (`#FFFDD0`) palette consistently
- The page should feel like it belongs to a real product, not a template

---

## Example Content Blocks

### Hero Copy

```
Restock

Walk. Log. Send.

The offline-first restocking app for small retailers.
Turn your handwritten inventory list into professional supplier emails — in minutes.

[Download on the App Store]
```

### Feature Block Copy

```
No Accounts. No Passwords. No Cloud.

Your inventory data stays on your device. 
We built Restock for privacy-conscious shop owners who want a tool that just works.
```

### Support CTA

```
Need Help?

We're here for you. Check the FAQ above or reach out directly.

Email: support@restockapp.email
Response time: 24-48 hours
```

