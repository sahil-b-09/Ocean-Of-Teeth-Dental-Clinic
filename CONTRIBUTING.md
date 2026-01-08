# Ocean of Teeth - Dental Website Factory Template

This repository serves as the **Master Template** for generating dental clinic websites. It is built with Next.js 14, Tailwind CSS v4, and a custom JSON-based configuration engine.

## 🚀 How to Create a New Client Site

Follow these steps to generate a new website for a client.

### 1. Checkout the Template
Always start from the pristine `template` branch.

```bash
git checkout template
git pull origin template
```

### 2. Create a Client Branch
Create a new branch for the specific client. Use the format `client/<client-name>`.

```bash
git checkout -b client/amazing-smiles
```

### 3. Update Configuration
Open `lib/site-config.ts`. This file is the **Single Source of Truth** for the entire website.

Update the following fields with client data:
*   **Information:** Name, Subtitle, Phone, Email, Address, Timing.
*   **Social:** WhatsApp, Instagram, Facebook links.
*   **Theme:** Update `theme.colors` (primary, secondary, accent) to match the client's brand.
*   **Content:** Hero section, Features, Doctor details, Testimonials.

### 4. Update Images
1.  Place client assets in `public/images/`.
2.  Update the `images` paths in `site-config.ts` (e.g., logo, hero image, doctor profile).

### 5. Verify
Run the development server to preview changes.

```bash
npm run dev
```

### 6. Deploy
Commit your changes and push the branch. Vercel will automatically create a preview/production deployment for this branch.

```bash
git add .
git commit -m "Setup: Initial configuration for Amazing Smiles"
git push origin client/amazing-smiles
```

---

## 🎨 Theming System
The template uses a dynamic theming engine.
*   **Primary Color:** Main brand color (buttons, highlights).
*   **Secondary Color:** Headings, strong text.
*   **Accent Color:** Subtle highlights, subheadings.

Changing these hex codes in `site-config.ts` instantly updates the entire site's look and feel.

## 🛠 Tech Stack
*   **Framework:** Next.js 16.1.1
*   **Styling:** Tailwind CSS v4
*   **Animation:** Framer Motion
*   **Icons:** Lucide React
