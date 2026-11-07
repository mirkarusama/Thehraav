# Launch checklist

## Fill in the placeholders (`src/config/site.ts`)
- [ ] Session fee `[FEE]`, session length, free session length
- [ ] Late-cancellation charge `[FULL / HALF]`
- [ ] Working days and hours
- [ ] WhatsApp number (digits with country code, e.g. `919876543210`)
- [ ] Instagram / LinkedIn URLs (or leave as placeholders to keep them hidden)
- [ ] Cal ID event paths
- [ ] Formspree form ID
- [ ] Legal details (`legalDetails`, `legalUpdated`). Review Privacy and Terms, resolve the `[TO CONFIRM]` items in Terms, then set `legalDraft: false`
- [ ] Sarah's photo (`public/images/`, WebP, about 640×800) and the final logo, when ready
- [ ] Search the built site for leftover placeholders: `npm run build && grep -rl "\[" dist/*.html`

## Formspree
- [ ] Create a free Formspree account with `thehraavcounselling@outlook.com`, create a form, and copy its ID into `site.ts`
- [ ] Send a test message from the live site and confirm it arrives (check spam too)
- [ ] In Formspree settings, add the live domain under allowed domains

## Bookings and payments
- [ ] Book the **free first session** as a test client: confirmation email arrives, the video link works, the form links work, and the event appears in Sarah's calendar
- [ ] Book a **paid session**: Razorpay checkout appears, payment succeeds, booking is confirmed. Do a real low-amount test (temporarily set the price to ₹1), then refund it in Razorpay and set the real fee back
- [ ] Reschedule and cancel from the email links
- [ ] Check that busy times in Sarah's calendar are hidden
- [ ] Reminder email arrives before the session (book a test slot for tomorrow)

## Website checks
- [ ] Every page on a real phone (Android and iPhone): menu, buttons, booking, WhatsApp button opens the chat
- [ ] Keyboard only: Tab through each page, with focus visible everywhere
- [ ] Paste the site link into WhatsApp and confirm the preview shows the logo image and title
- [ ] PageSpeed Insights (pagespeed.web.dev) on Home: aim for 90+ on mobile
- [ ] `https://<site>/sitemap-index.xml` and `/robots.txt` load
- [ ] Unknown URL shows the friendly 404 page

## Search
- [ ] Add the site to Google Search Console (URL-prefix property is easiest on the Railway domain) and submit `sitemap-index.xml`

## Google Business Profile
1. Go to business.google.com and sign in with the Google account Sarah will manage it from.
2. **Business name:** Thehraav Counselling
3. **Category:** *Counselor* (primary). Optionally add *Psychologist* if her qualifications allow it under local rules.
4. **"Do you want to add a location customers can visit?" → No.** Sessions are online only, so it becomes a service-area business with no public address.
5. **Service area:** add the city or region she serves (e.g. Mumbai), or *India*. In the description, say "online sessions across India".
6. **Contact:** phone/WhatsApp number and **website:** the Railway address (update it later with the custom domain).
7. Verify the business (Google will offer a method, often a video recording or phone/SMS).
8. Then fill in:
   - **Description**, for example: "Online counselling for women who feel overwhelmed by anxiety or anger, with Sarah Shaikh, counselling psychologist (M.A., Mumbai University; Diploma in CBT). Warm, practical, CBT-based sessions in English and Hindi. Free first session for new clients."
   - **Services:** Online counselling, Anxiety counselling, Anger management counselling, Free first session
   - **Attributes:** "Online appointments" and "Online care"
   - **Hours:** her working hours
   - **Booking link / appointment URL:** `https://<site>/book`
   - **Photos:** logo, a soft cover image, and her photo when ready
