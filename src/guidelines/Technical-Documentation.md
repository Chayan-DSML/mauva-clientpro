# Technical Documentation
## Instagram-Style Mobile Marketplace - mauva.by.mmd

This document provides technical details about the application architecture, data flow, and development guidelines.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [File Structure](#file-structure)
4. [Architecture](#architecture)
5. [Data Models](#data-models)
6. [Component Hierarchy](#component-hierarchy)
7. [Styling System](#styling-system)
8. [WhatsApp Integration](#whatsapp-integration)
9. [Development Guidelines](#development-guidelines)

---

## Project Overview

**Purpose:** Instagram-inspired mobile-first e-commerce website for vehicle parts and accessories

**Key Features:**
- Instagram-style story circles for product categories
- Product carousel with up to 7 images per product
- WhatsApp integration for direct customer inquiries
- Instagram Reels integration for trending products
- Multi-category product support
- Responsive mobile-first design
- MAUVA brand color scheme

**Target Audience:** Mobile users browsing vehicle parts and accessories

---

## Technology Stack

### Core Technologies
- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling framework
- **Vite** - Build tool

### Key Libraries
- **lucide-react** - Icon library
- **ImageWithFallback** - Custom image component with error handling

### External Integrations
- **Instagram Embed API** - For displaying Instagram Reels
- **WhatsApp Business API** - For customer inquiries via Buy Now buttons
- **Google Drive** - Image hosting support

---

## File Structure

```
/
├── App.tsx                          # Main application entry point
├── components/
│   ├── HomePage.tsx                 # Main landing page with story circles
│   ├── ProductListPage.tsx          # Category product listings
│   ├── AboutPage.tsx                # Company information
│   ├── TrendingReelsPage.tsx        # Instagram Reels showcase
│   ├── ContactPage.tsx              # Contact information
│   ├── ProductCarousel.tsx          # Image carousel component
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Protected image component
│   └── ui/                          # ShadCN UI components
│       └── [various].tsx
├── data/
│   └── products.ts                  # Central product data store
├── utils/
│   └── purchaseHandler.ts           # WhatsApp integration logic
├── styles/
│   └── globals.css                  # Tailwind v4 configuration
└── guidelines/
    ├── Client-Customization-Guide.md
    └── Technical-Documentation.md
```

---

## Architecture

### Navigation Flow

```
HomePage (/)
├── Story Circles → ProductListPage (by category)
├── Featured Products Feed
└── Bottom Navigation
    ├── Home → HomePage
    ├── About → AboutPage
    ├── Trending → TrendingReelsPage
    └── Contact → ContactPage
```

### State Management

**Location:** `App.tsx`

The application uses React's `useState` hook for simple state management:

```typescript
const [currentView, setCurrentView] = useState<'home' | 'products' | 'about' | 'trending' | 'contact'>('home');
const [selectedCategory, setSelectedCategory] = useState<string>('');
```

**No complex state management needed** - Navigation and category selection are the only app-level states.

### Data Flow

1. **Product Data** (`/data/products.ts`)
   - Single source of truth for all products
   - Products are filtered by category when needed
   - Products can belong to multiple categories

2. **Category Selection**
   ```
   User clicks category → 
   HomePage calls onCategorySelect(categoryId) → 
   App sets selectedCategory state → 
   App shows ProductListPage with categoryId → 
   ProductListPage filters products by category
   ```

3. **Purchase Flow**
   ```
   User clicks Buy Now → 
   handlePurchase() called with product info → 
   WhatsApp URL generated with pre-filled message → 
   WhatsApp opens in new tab/window → 
   Customer can send message to business
   ```

---

## Data Models

### Product Interface

```typescript
export interface Product {
  id: string;                    // Unique identifier ('1', '2', etc.)
  name: string;                  // Product name
  description: string;           // Product description
  images: string[];              // Array of 1-7 image URLs
  price: string;                 // Price with currency symbol (e.g., '₹2,499')
  categories: string[];          // Array of category IDs this product belongs to
}
```

**Example:**
```typescript
{
  id: '11',
  name: 'Heavy Duty Commercial Tyres',
  description: 'Premium all-weather tyres suitable for trucks and buses.',
  images: [
    'https://lh3.googleusercontent.com/d/FILE_ID_1',
    'https://lh3.googleusercontent.com/d/FILE_ID_2'
  ],
  price: '₹899',
  categories: ['truck', 'buses']  // Appears in both categories
}
```

### Category Model

```typescript
interface Category {
  id: string;                    // Unique category ID (e.g., 'bikes')
  name: string;                  // Display name (e.g., 'Bikes')
  image: string;                 // Category thumbnail image URL
}
```

### Reel Model (Trending Page)

```typescript
interface Reel {
  id: string;                    // Unique reel identifier
  productId: string;             // Links to a Product.id
  url: string;                   // Instagram reel URL
  embedUrl: string;              // Instagram embed URL (url + '/embed')
  productName: string;           // Product name to display
  productDescription: string;    // Product description to display
  price: string;                 // Product price to display
}
```

### Contact Information Model

```typescript
interface ContactInfo {
  shopName: string;
  address: string;
  email: string;
  phones: Array<{
    number: string;              // Format: '918197697480' (no spaces/symbols)
    display: string;             // Format: '+91 8197697480' (with formatting)
    label: string;               // e.g., 'Retail', 'Wholesale'
  }>;
  mapEmbedUrl: string;
}
```

---

## Component Hierarchy

### App.tsx (Root)
```
App
└── Conditional rendering based on currentView state
    ├── HomePage
    ├── ProductListPage
    ├── AboutPage
    ├── TrendingReelsPage
    └── ContactPage
```

### HomePage
```
HomePage
├── Header (Company name)
├── Story Circles Container
│   └── Category[] (clickable circles with images)
├── Product Feed
│   └── ProductCard[]
│       ├── ProductCarousel
│       ├── Product details
│       └── Buy Now button
└── Bottom Navigation
    └── Navigation buttons (Home, About, Trending, Contact)
```

### ProductListPage
```
ProductListPage
├── Header (Category name + Back button)
└── Product List
    └── ProductCard[]
        ├── ProductCarousel
        ├── Product details
        └── Buy Now button
```

### TrendingReelsPage
```
TrendingReelsPage
├── Header (Back button)
├── Scrollable Reels Container
│   └── Reel[]
│       ├── Instagram Embed (blockquote element)
│       └── Product Overlay (gradient)
│           ├── Product name
│           ├── Product description
│           ├── Price
│           └── Buy Now button
└── Scroll Indicator
```

### ProductCarousel
```
ProductCarousel
├── Main image display
├── Thumbnail navigation
└── Image counter (e.g., "1 / 5")
```

---

## Styling System

### Tailwind v4 Configuration

**File:** `/styles/globals.css`

### Color Variables (MAUVA Brand)

```css
:root {
  /* Primary Colors */
  --background: #FAF4F2;        /* Peachy-beige page background */
  --primary: #C85A8E;           /* Mauve/pink - main brand color */
  --secondary: #B892B0;         /* Purple - accent color */
  
  /* UI Elements */
  --card: #ffffff;              /* White cards */
  --accent: #E8CEC7;            /* Light peachy accent */
  --border: rgba(200, 90, 142, 0.2);  /* Soft border color */
  
  /* Text */
  --foreground: #1a1a1a;        /* Dark text */
  --muted-foreground: #6b5b66;  /* Muted text */
}
```

### Typography System

The app uses automatic typography scaling based on HTML elements:

```css
h1 {
  font-size: var(--text-2xl);
  font-weight: 500;
  line-height: 1.5;
}

h2 {
  font-size: var(--text-xl);
  font-weight: 500;
  line-height: 1.5;
}

h3 {
  font-size: var(--text-lg);
  font-weight: 500;
  line-height: 1.5;
}

button {
  font-size: var(--text-base);
  font-weight: 500;
  line-height: 1.5;
}
```

**Important:** Do NOT use Tailwind font size classes (e.g., `text-2xl`) unless specifically overriding the default typography.

### Key Tailwind Classes

**Colors:**
- `bg-background` - Page background
- `bg-card` - Card backgrounds
- `bg-primary` - Primary brand color
- `text-primary` - Primary text color
- `text-muted-foreground` - Muted text

**Layout:**
- `min-h-screen` - Full viewport height
- `pb-24` - Padding bottom for fixed navigation
- `snap-y snap-mandatory` - Scroll snapping (Reels page)

---

## WhatsApp Integration

### Configuration

**File:** `/utils/purchaseHandler.ts`

### Phone Number Format

```typescript
const WHATSAPP_NUMBER = '918197697480';
```

**Format Rules:**
- Include country code (e.g., 91 for India)
- NO `+` symbol
- NO spaces, dashes, or parentheses
- Example: `918197697480` (India), `14155551234` (USA)

### Message Generation

```typescript
function generateWhatsAppMessage(productInfo: PurchaseInfo): string {
  const message = `Hi! I'm interested in purchasing:

*${productInfo.productName}*
Price: ${productInfo.price}
Product ID: ${productInfo.productId}

Please provide more details about availability and delivery.`;
  
  return encodeURIComponent(message);
}
```

**Variables Available:**
- `productInfo.productName` - Product name
- `productInfo.price` - Product price
- `productInfo.productId` - Product ID

### WhatsApp URL Structure

```typescript
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
```

**Behavior:**
- Mobile: Opens WhatsApp app directly
- Desktop: Opens WhatsApp Web in new tab
- Message is pre-filled but user can edit before sending

### Buy Now Button Implementation

All Buy Now buttons use the same handler:

```typescript
<button 
  onClick={() => handlePurchase({
    productId: product.id,
    productName: product.name,
    price: product.price
  })}
  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
>
  Buy Now
</button>
```

---

## Development Guidelines

### Adding a New Page

1. Create component in `/components/`:
```typescript
interface NewPageProps {
  onBack: () => void;
}

export function NewPage({ onBack }: NewPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Content */}
    </div>
  );
}
```

2. Update `App.tsx`:
```typescript
// Add to view type
const [currentView, setCurrentView] = useState<'home' | 'products' | 'about' | 'trending' | 'contact' | 'newpage'>('home');

// Add to render logic
{currentView === 'newpage' && (
  <NewPage onBack={handleBackToHome} />
)}
```

3. Add navigation button if needed

### Adding a New Product Category

1. Update `/components/HomePage.tsx`:
```typescript
const categories: Category[] = [
  // ... existing categories
  { id: 'newcategory', name: 'New Category', image: 'https://...' }
];
```

2. Update `/data/products.ts`:
```typescript
export const categoryNames: Record<string, string> = {
  // ... existing categories
  newcategory: 'New Category'
};
```

3. Add products with `categories: ['newcategory']`

### Image Handling Best Practices

**Use Google Drive:**
```typescript
// Convert sharing link to direct link
'https://lh3.googleusercontent.com/d/FILE_ID'
```

**Use Unsplash for placeholders:**
```typescript
'https://images.unsplash.com/photo-XXX?w=1080'
```

**Fallback Handling:**
The `ImageWithFallback` component automatically handles loading errors.

### Protected Files

**Do NOT modify:**
- `/components/figma/ImageWithFallback.tsx` - System component

### Code Style

**TypeScript:**
- Use interfaces for component props
- Export functions as `export function ComponentName()`
- Use descriptive variable names

**React:**
- Functional components only
- Use hooks (useState, useEffect, useRef)
- Props destructuring in function signature

**Tailwind:**
- Mobile-first approach
- Use CSS variables for colors
- Avoid arbitrary values when possible

### Testing Checklist

Before deploying changes:

- [ ] Test on mobile viewport (375px width)
- [ ] Test all Buy Now buttons open WhatsApp correctly
- [ ] Test image carousels with multiple images
- [ ] Test category navigation
- [ ] Test back buttons
- [ ] Verify phone numbers are clickable (`tel:` links)
- [ ] Verify email is clickable (`mailto:` link)
- [ ] Test Instagram Reels embedding
- [ ] Verify color scheme consistency

---

## API Integrations

### Instagram Embed

**Script loaded in TrendingReelsPage:**
```typescript
useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://www.instagram.com/embed.js';
  script.async = true;
  document.body.appendChild(script);
}, []);
```

**Embed structure:**
```html
<blockquote
  className="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/reel/ID/"
  data-instgrm-version="14"
>
  <a href="https://www.instagram.com/reel/ID/">View on Instagram</a>
</blockquote>
```

### Google Maps Embed

**Used in ContactPage:**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  allowFullScreen
  loading="lazy"
/>
```

---

## Performance Considerations

### Image Optimization
- Images should be compressed before upload
- Recommended: 1080px wide max for product images
- Use WebP format when possible

### Lazy Loading
- Images use native lazy loading
- Instagram embeds load on demand

### Mobile Performance
- Minimize JavaScript bundle size
- Use CSS transforms for animations
- Leverage browser caching for static assets

---

## Future Enhancement Ideas

1. **Shopping Cart System**
   - Add to cart functionality
   - Cart state management
   - Checkout flow

2. **Backend Integration**
   - Supabase for product management
   - Order tracking
   - Inventory management

3. **Payment Gateway**
   - Razorpay integration
   - Payment confirmation
   - Order receipts

4. **Search & Filter**
   - Product search
   - Price range filters
   - Category filtering

5. **User Accounts**
   - Customer login
   - Order history
   - Saved favorites

---

## Version History

**v2.0** (Current)
- WhatsApp integration for Buy Now buttons
- Google Drive image support
- Dual phone number support in Contact page
- Instagram Reels with product overlays
- MAUVA color scheme implementation

**v1.0** (Initial)
- Basic Instagram-style layout
- Product carousel
- Category story circles
- Basic navigation

---

*Last Updated: January 2025*
*Maintained by: Development Team*
