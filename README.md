# BidSmart - AI Auction Strategist

BidSmart is an AI-powered auction intelligence platform that predicts auction prices and suggests winning bidding strategies for collectors and resellers across major auction platforms.

## Features

- **Price Prediction**: AI-powered price predictions with confidence intervals based on thousands of completed auctions
- **Bidding Strategies**: Strategic bidding recommendations tailored to different auction platforms
- **Market Intelligence**: Comprehensive market analysis and trend forecasting
- **Cross-Platform Support**: Works with eBay, Heritage Auctions, LiveAuctioneers, and more

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with dynamic routing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ai-auction-strategist/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── lib/                # Utility functions
│   └── resources/          # Dynamic SEO content routes
├── public/                 # Static assets
├── SEO Strategy/           # Content and strategy files
│   ├── content/            # Markdown content files
│   └── *.yaml             # Site structure definitions
└── Project Files/          # Project documentation
```

## Content Management

SEO content is managed through Markdown files in `SEO Strategy/content/`. The site uses dynamic routing to render:

- **Pillar Pages**: Comprehensive topic coverage (3,500 words)
- **Subtopic Pages**: Focused coverage of specific aspects (2,200 words)
- **PAA Posts**: Question-answering content optimized for featured snippets (1,200 words)

## License

Private - All Rights Reserved
