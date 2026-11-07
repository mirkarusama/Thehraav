# Cal ID setup (booking + Razorpay)

Cal ID (cal.id, by OneHash) is a Cal.com fork with native Razorpay support. Everything below is done in Sarah's Cal ID account; the website only shows the booking page.

> Some Cal ID screens may be labelled slightly differently from Cal.com. Where a step couldn't be confirmed from Cal ID's docs, it's marked **(check)**.

## 1. Account and calendar

1. Sign up at cal.id with Sarah's email and choose a username (e.g. `thehraav`). Her booking links will look like `https://cal.id/thehraav/<event>`.
2. **Settings → Calendars**: connect her Google or Outlook calendar. Turn on "check for conflicts" so busy times are hidden, and pick that calendar as the one new bookings are added to.
3. **Availability**: set her working days and hours (`[WORKING DAYS AND HOURS]`) and time zone *Asia/Kolkata*. Don't add breaks or daily limits for now.

## 2. Video calls

1. **Apps → Google Meet** (needs the Google Calendar connected) **or Apps → Zoom**, and install it.
2. In each event type, set **Location** to Google Meet or Zoom. Every booking then gets its own link automatically, sent in the confirmation email.

## 3. Razorpay

From Cal ID's help article ([Cal ID and Razorpay integration](https://help.onehash.ai/en/article/cal-id-and-razorpay-integration-1pfxx34)):

1. **App store → search "Razorpay" → Install**.
2. Log in to Razorpay and authorise Cal ID.
3. Open the paid event type → **Apps** tab → Razorpay → enter the price (`[FEE]`, INR) → Save.
4. Bookers then see **Pay to book**; the booking is confirmed once payment succeeds.

Sarah needs an activated Razorpay account (KYC done) first. Do a real ₹1 test before launch (see the launch checklist).

## 4. Event types

### a) Free first session
- **Title:** Free first session
- **Slug:** `free-first-session`
- **Duration:** `[FREE SESSION LENGTH]`
- **Location:** Google Meet / Zoom
- **Description:** "A relaxed first conversation for new clients. Tell me what's going on, ask any questions, and see if we're a good fit. Free, with no payment needed."
- **No Razorpay** on this event.
- *New clients only*: Cal ID can't strictly check this. Sarah reviews bookings and can cancel repeat free bookings. **(check)** whether Cal ID offers a "limit bookings per booker" option.

### b) Individual session
- **Title:** Individual session
- **Slug:** `individual-session`
- **Duration:** `[SESSION LENGTH]`
- **Location:** Google Meet / Zoom
- **Description:** include the fee and the cancellation policy:
  > Please give at least 24 hours' notice to cancel or reschedule, using the link in your confirmation email. Late cancellations or missed sessions may be charged at [FULL / HALF] the session fee.
- **Razorpay:** price `[FEE]`

For both events:
- **Minimum notice:** 24 hours is a sensible default for new bookings (adjust if Sarah prefers).
- **Rescheduling and cancelling:** the confirmation email includes reschedule and cancel links by default. To enforce the 24-hour rule inside the tool, look under event **Advanced** for a minimum cancellation or reschedule notice setting **(check)**. If there isn't one, the policy is stated in the description and email, and late-cancellation charges are handled manually.

## 5. Booking questions (event → Advanced → Booking questions)

Name and email are built in. Add these three questions, keeping them gentle:

| Question | Type | Required |
|---|---|---|
| What would you like some help with? (Just a few words is fine) | Long text | No |
| Which language would you prefer for sessions? | Radio: English / Hindi / Either is fine | No |
| Have you had counselling or therapy before? | Radio: Yes / No / Prefer not to say | No |

## 6. Confirmation email with the consent and intake forms

Sarah creates two forms she owns (Google Forms, Tally or Jotform): **Consent form** and **Intake form**.

Then use **Workflows** (if available on her plan) **(check)**:
1. **Workflow 1, "After booking"**: trigger *When new event is booked* → action *Send email to attendee*. Example text:
   > Hi {ATTENDEE_NAME}, thank you for booking. Before our first session, please fill in these two short forms: Consent form: [link] · Intake form: [link]. Your video link is in your confirmation email. — Sarah
2. **Workflow 2, "Reminder"**: trigger *Before event starts*, 24 hours → *Send email to attendee* with the time and link. Optionally add a second reminder 1 hour before.

If Workflows isn't available: paste the two form links into each event's **Description**, which appears in the confirmation email.

## 7. Put the links into the website

In `src/config/site.ts`:

```ts
booking: {
  base: 'https://cal.id',
  freeEvent: 'thehraav/free-first-session',
  regularEvent: 'thehraav/individual-session',
},
```

### How the embed works

The `/book` page shows two cards. When a visitor picks one, it loads that event's Cal ID page inline (`https://cal.id/<user>/<event>?embed=true`). Nothing from Cal ID loads before that, which keeps the page fast and private. There's also a plain "open in a new tab" link as a backup. Every "Book a session" button on the site links to `/book`, and buttons can link straight to `/book#free` or `/book#regular`.

**After the events exist, check this:** open `/book` and click each card. If the calendar shows up, you're done. If it's blank or refused, Cal ID blocks plain iframes. In that case, go to **Event → Embed → Inline → Get Code**, copy the snippet, and the `BookingEmbed` component can be switched over to Cal ID's official script (`https://cal.id/embed-link/embed.js`, the one their WordPress plugin uses). It's a small change.

## Fallback

If Cal ID doesn't work out, use Cal.com (free) for scheduling, with a Razorpay Payment Page link in the paid event's confirmation email or description. The downside is that payment isn't enforced at booking time, so Sarah would have to check payments by hand.
