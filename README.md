# MAYA: The Genesis Starter 🧬

![MAYA Banner](https://via.placeholder.com/1200x400/000000/D4AF37?text=MAYA:+The+Genesis+Starter)

## 🌟 Overview

**MAYA: The Genesis Starter** is not a memecoin—it's a philosophical manifesto for an **Organic Finance Empire**. A dark-themed, mystical single-page website that combines the aesthetic of "Love, Death & Robots" with an alchemy laboratory vibe.

Modern finance is stale. We're here to ferment.

## 🎨 Design Language

- **Colors**: Pure Black (#000000), Ancient Gold (#D4AF37), Cream (#F5F5DC), Amber glow accents
- **Typography**: Cinzel/Playfair Display (headings), Inter (body text)
- **Aesthetic**: Mystical, authoritative, organic fermentation theme
- **Animation**: Slow, "rising dough" ease-in effects with Framer Motion

## 🏗️ Tech Stack

- **Next.js 15** (App Router with TypeScript)
- **Tailwind CSS** (Custom theme with grainy texture)
- **Framer Motion** (Smooth, organic animations)
- **Lucide React** (Beautiful icons)
- **Static Export Ready** (Optimized for IPFS deployment)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📄 Page Sections

### 1. **Hero (The Altar)**
Mystical jar visual with glowing animations, powerful title, and CTA buttons.

### 2. **The Manifesto**
Philosophical text explaining the organic finance revolution.

### 3. **The Observation Deck (Live Feed)**
24/7 live stream placeholder with animated live metrics (pH level, temperature, block height).

### 4. **The Fermentation Roadmap**
Vertical timeline with 4 phases:
- ✅ Activation
- 🔄 Rising
- 🔥 Baking
- 👑 Empire

### 5. **The Recipe (Tokenomics)**
- 100% Community (21M tokens)
- 0% Tax
- Burned Liquidity
- Fully Decentralized

### 6. **The Legacy (Footer)**
Social links and manifesto quote: "Sahibi yok. Sadece bir başlangıç var."

## 🎯 Key Features

- ✨ **Fully Responsive** - Works on all devices
- 🌐 **SEO Optimized** - Meta tags and semantic HTML
- 🚀 **Static Export Ready** - Perfect for IPFS deployment
- 🎨 **Dark Theme** - Grainy texture background
- ⚡ **Performance** - Optimized animations and code splitting
- 🔒 **No Personal Data** - Anonymous and decentralized

## 🛠️ Development

```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## 📝 Customization

### Replacing Placeholders

1. **Hero Jar Image**: Replace the Sparkles icon in `components/Hero.tsx` with your custom jar visual
2. **Live Stream**: Add YouTube/Twitch iframe URL in `components/LiveFeed.tsx`
3. **Social Links**: Update URLs in `components/Footer.tsx`

### Adding Custom Content

- **Manifesto Text**: Edit `components/Manifesto.tsx`
- **Roadmap Phases**: Modify the `phases` array in `components/Roadmap.tsx`
- **Tokenomics Data**: Update `tokenomicsData` in `components/Tokenomics.tsx`

## 🌐 Deployment

### IPFS Deployment

```bash
npm run build
npm run export
# Upload the /out folder to IPFS
```

### Vercel/Netlify

```bash
npm run build
# Deploy the .next folder
```

## 📚 Project Structure

```
Maya/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles with grainy texture
├── components/
│   ├── Hero.tsx         # Hero section with mystical jar
│   ├── Manifesto.tsx    # Philosophy section
│   ├── LiveFeed.tsx     # Live stream & metrics
│   ├── Roadmap.tsx      # Fermentation roadmap
│   ├── Tokenomics.tsx   # Token distribution
│   └── Footer.tsx       # Social links & legacy
├── .github/
│   └── copilot-instructions.md
├── tailwind.config.ts   # Custom theme configuration
├── next.config.ts       # Next.js config for static export
└── package.json
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#000000` | Main background |
| Gold | `#D4AF37` | Primary accent, headings |
| Cream | `#F5F5DC` | Body text |
| Amber | `#FFBF00` | Glow effects |

## 🤝 Contributing

This is a community-owned project. No central authority.

## 📜 License

Decentralized & Community-Owned

---

**"Sahibi yok. Sadece bir başlangıç var."**

*Not financial advice. Not a memecoin. An organic finance experiment.*
