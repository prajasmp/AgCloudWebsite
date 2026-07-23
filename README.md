# AG Cloud Hosting Website

A complete premium React + Vite website for AG Cloud Hosting with:

- Responsive premium dark UI
- Dedicated plans catalogue and categories
- Google sign-in with Firebase Authentication
- Firestore-backed purchase history
- Checkout with replaceable UPI QR image
- Discord webhook notifications through a Cloudflare Worker
- Founder admin dashboard for accepting or denying orders
- Cloudflare Pages-compatible SPA routing

## 1. Preview locally

Install Node.js 20 or newer, then run:

```bash
npm install
cp .env.example .env
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## 2. Firebase setup

1. Create a Firebase project.
2. In **Authentication → Sign-in method**, enable Google.
3. In **Firestore Database**, create a database.
4. In **Project settings → Your apps**, create a Web app and copy its config into `.env`.
5. Add `localhost`, your Cloudflare Pages domain, and `agcloud.fun` to Firebase Authentication authorized domains.
6. Open the site, sign in once, then copy your Firebase UID from Authentication → Users.
7. Replace `REPLACE_WITH_FOUNDER_FIREBASE_UID` in `firestore.rules` and deploy the rules.
8. Add the same UID to `.env` as `VITE_ADMIN_UIDS=your_uid`.

Deploy rules with Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
firebase init firestore
firebase deploy --only firestore:rules
```

## 3. Payment QR

Put the real QR image at:

`public/assets/payment-qr.png`

Set the UPI ID in `.env`:

`VITE_UPI_ID=your-upi-id@bank`

## 4. Discord webhook + Cloudflare Worker

The webhook secret must never be placed in frontend code. Deploy the Worker in the `worker` folder and store the webhook URL using Wrangler secrets. Full instructions are in `worker/README.md`.

Important: a normal Discord webhook cannot securely provide real interactive Accept/Deny buttons by itself. This project sends the order notification to Discord and gives the founder a secure `/admin` dashboard to accept or deny orders. Creating native Discord interaction buttons would require a Discord application/bot and an interactions endpoint.

## 5. Deploy frontend to Cloudflare Pages

1. Push this folder to GitHub.
2. In Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Add every `.env` variable as a Cloudflare Pages environment variable.
7. Deploy.
8. Add custom domain `www.agcloud.fun` and optionally redirect `agcloud.fun` to `www.agcloud.fun`.

The included `public/_redirects` file makes React Router URLs work on Cloudflare Pages.

## 6. Main editable files

- Plans and prices: `src/data/plans.ts`
- Logo/banner: `public/assets/`
- Colors and design: `src/styles.css`
- Terms/refund/privacy: `src/pages/StaticPages.tsx`
- Firebase values and links: `.env`
- Discord notification format: `worker/src/index.js`

## 7. Security checklist before launch

- Never commit `.env` or webhook secrets.
- Keep the Discord webhook only in Cloudflare Worker secrets.
- Replace the founder UID in Firestore rules.
- Verify Firebase authorized domains.
- Test order creation as a normal user and status updates as founder.
- Replace placeholder domain prices with your final commercial prices.
- Review legal policies for your actual business before publishing.

## Cloudflare Pages build settings

Use these exact settings:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (leave blank if the repository root contains `package.json`)
- Node.js version: `20` or `22`

Upload the complete extracted project, including the `src/components`, `src/context`, `src/data`, and `src/lib` folders. Do not upload only selected files.
