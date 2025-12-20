# Identity-Preserving Creator Studio

A Next.js application for generating images while preserving identity using Hugging Face Inference API.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Copy `.env.local` and add your Hugging Face API token:
```
HF_API_TOKEN=your_token_here
HF_MODEL_ID=ByteDance/InfiniteYou-FLUX
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Features

- Image upload for identity reference
- Prompt-based image generation
- Hugging Face Inference API integration
- Identity-preserving image generation

## Next Steps

- 🔒 Lock identity across multiple generations
- 🎨 Prompt presets (Anime, Fashion, Illusion)
- 🔁 Regenerate button
- 🧠 Model switcher (FLUX / SDXL)
- 💳 Credit system
- 📦 Save generations
- 🔥 Identity consistency trick (multiple refs)
- ⚡ Replicate / Modal GPU version
- 🖼 IllusionDiffusion pipeline
- 📱 Mobile-first UI
- 🚀 Deploy to Vercel + GPU backend








