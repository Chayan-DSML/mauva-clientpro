# Client Customization Guide
## Instagram-Style Vehicle Marketplace - mauva.by.mmd

This guide will help you customize and modify your website without needing extensive technical knowledge. Each section explains where to find the files and what to change.

---

## Table of Contents
1. [Changing the Company Name](#1-changing-the-company-name)
2. [Managing Products](#2-managing-products)
3. [Managing Categories (Story Circles)](#3-managing-categories-story-circles)
4. [Customizing the About Us Page](#4-customizing-the-about-us-page)
5. [Managing Trending Reels](#5-managing-trending-reels)
6. [Updating Contact Information](#6-updating-contact-information)
7. [Configuring WhatsApp Buy Now Buttons](#7-configuring-whatsapp-buy-now-buttons)
8. [Changing Colors and Styling](#8-changing-colors-and-styling)

---

## 1. Changing the Company Name

**File Location:** `/components/HomePage.tsx`

**Find this code** (around line 33):
```tsx
<b><h1 className="text-center text-primary">mauva.by.mmd</h1></b>
```

**Change to:**
```tsx
<b><h1 className="text-center text-primary">Your Actual Company Name</h1></b>
```

---

## 2. Managing Products

**File Location:** `/data/products.ts`

This file contains ALL your products. Each product has:
- `id`: Unique identifier (use numbers: '1', '2', '3', etc.)
- `name`: Product name
- `description`: Product description
- `images`: Array of up to 7 image URLs
- `price`: Price (include currency symbol like '₹2,499')
- `categories`: Which categories this product appears in

### Adding a New Product

Add a new product object to the `allProducts` array:

```tsx
{
  id: '13',
  name: 'Electric Scooter',
  description: 'Eco-friendly electric scooter perfect for urban commuting.',
  images: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ],
  price: '₹899',
  categories: ['cycle', 'bikes'] // Can appear in multiple categories
}
```

**Important:** Add a comma after the previous product's closing `}` before adding your new product.

### Removing a Product

Simply delete the entire product object (from `{` to `}`), including the comma after it.

### Editing a Product

Find the product by its name or ID and modify any field:

**Example - Changing the price:**
```tsx
{
  id: '1',
  name: 'Mountain Explorer Bike',
  description: 'High-performance mountain bike...',
  images: [...],
  price: '₹2,999', // Changed from ₹2,499
  categories: ['bikes']
}
```

### Adding/Removing Product Images

Each product can have 1-7 images. Simply add or remove URLs from the `images` array:

```tsx
images: [
  'https://example.com/image1.jpg',  // Main image
  'https://example.com/image2.jpg',  // Second image
  'https://example.com/image3.jpg',  // Third image
  // Add up to 7 total
]
```

**Pro Tip:** Use high-quality images (at least 1080px wide) for best results.

### Using Google Drive for Images

If you're using Google Drive to host images, you need to use a special format:

1. **Upload your image** to Google Drive
2. **Make the file shareable** (Anyone with the link can view)
3. **Get the file ID** from the sharing link:
   - Sharing link looks like: `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
   - Copy the FILE_ID_HERE part
4. **Use this format** in your product:

```tsx
images: [
  'https://lh3.googleusercontent.com/d/YOUR_FILE_ID_HERE',
  'https://lh3.googleusercontent.com/d/ANOTHER_FILE_ID_HERE'
]
```

**Example:**
```tsx
// Original Google Drive link:
// https://drive.google.com/file/d/1vz4tZA1q2g_BbelqmLKGzbQu_oJ422vq/view?usp=sharing

// Convert to:
'https://lh3.googleusercontent.com/d/1vz4tZA1q2g_BbelqmLKGzbQu_oJ422vq'
```

### How to Get Image URLs (Other Methods)

1. **Upload images to a service** like:
   - Imgur (https://imgur.com)
   - Cloudinary (https://cloudinary.com)
   - Your own web hosting

2. **Get the direct image URL** - it should end in `.jpg`, `.png`, or `.webp`

3. **Paste the URL** into the images array

### Making a Product Appear in Multiple Categories

Change the `categories` array to include multiple category IDs:

```tsx
{
  id: '11',
  name: 'Heavy Duty Commercial Tyres',
  description: 'Premium all-weather tyres...',
  images: [...],
  price: '₹899',
  categories: ['truck', 'buses'] // Appears in BOTH Trucks and Buses
}
```

---

## 3. Managing Categories (Story Circles)

**File Location:** `/components/HomePage.tsx`

**Find this code** (around line 17):
```tsx
const categories: Category[] = [
  { id: 'bikes', name: 'Bikes', image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=400' },
  { id: 'cars', name: 'Cars', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400' },
  { id: 'cycle', name: 'Cycle', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400' },
  { id: 'truck', name: 'Truck', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400' },
  { id: 'buses', name: 'Buses', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400' }
];
```

### Adding a New Category

Add a new category object to the array:

```tsx
const categories: Category[] = [
  { id: 'bikes', name: 'Bikes', image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=400' },
  { id: 'cars', name: 'Cars', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400' },
  { id: 'cycle', name: 'Cycle', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400' },
  { id: 'truck', name: 'Truck', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400' },
  { id: 'buses', name: 'Buses', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400' },
  { id: 'scooters', name: 'Scooters', image: 'https://your-image-url.jpg' } // New category
];
```

**Then update** `/data/products.ts` to add the same category name:

```tsx
export const categoryNames: Record<string, string> = {
  bikes: 'Bikes',
  cars: 'Cars',
  cycle: 'Cycles',
  truck: 'Trucks',
  buses: 'Buses',
  scooters: 'Scooters' // Add here too
};
```

### Removing a Category

Delete the entire line for that category from both files.

### Changing Category Images

Replace the image URL with your own category image:

```tsx
{ id: 'bikes', name: 'Bikes', image: 'https://your-new-image-url.jpg' }
```

**Note:** Category images should ideally be square and at least 400x400 pixels.

---

## 4. Customizing the About Us Page

**File Location:** `/components/AboutPage.tsx`

### Changing the About Us Text

**Find the section you want to change** and update the text:

```tsx
<p className="text-muted-foreground mb-4">
  Welcome to mauva.by.mmd! We've been serving customers since...
</p>
```

**Replace with your text:**
```tsx
<p className="text-muted-foreground mb-4">
  Your company story and information goes here...
</p>
```

### Adding More Sections

Copy and paste this template to add a new section:

```tsx
<div className="mb-6">
  <h3 className="mb-2">Our Values</h3>
  <p className="text-muted-foreground">
    Your text about company values goes here...
  </p>
</div>
```

---

## 5. Managing Trending Reels

**File Location:** `/components/TrendingReelsPage.tsx`

**Find this code** (around line 17):
```tsx
const mockReels: Reel[] = [
  {
    id: '1',
    productId: '1',
    url: 'https://www.instagram.com/reel/DPPEMdEEtz0/',
    embedUrl: 'https://www.instagram.com/reel/DPPEMdEEtz0/embed',
    productName: 'Mountain Explorer Bike',
    productDescription: 'High-performance mountain bike...',
    price: '₹2,499'
  },
  // More reels...
];
```

### Adding a New Reel

Add a new reel object with product information:

```tsx
{
  id: '4',
  productId: '5', // Must match a product ID from products.ts
  url: 'https://www.instagram.com/reel/YOUR_REEL_ID/',
  embedUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID/embed',
  productName: 'City Commuter Cycle',
  productDescription: 'Perfect urban bicycle for daily commuting...',
  price: '₹399'
}
```

**How to get Instagram Reel URLs:**

1. Open the reel on Instagram
2. Click the **three dots (...)** menu
3. Click **Copy Link**
4. Paste the link - it will look like: `https://www.instagram.com/reel/ABC123/`
5. For embedUrl, add `/embed` at the end

### Removing a Reel

Delete the entire reel object from the array.

### Important Notes for Reels

- Each reel should showcase a specific product
- The `productId` should match an actual product in `/data/products.ts`
- Product name, description, and price will appear as an overlay on the reel
- The Buy Now button will link to WhatsApp with this product's information

---

## 6. Updating Contact Information

**File Location:** `/components/ContactPage.tsx`

### Changing Shop Name

**Find this code** (around line 10):
```tsx
shopName: 'mauva.by.mmd',
```

**Change to:**
```tsx
shopName: 'Your Shop Name',
```

### Changing Address

**Find this code:**
```tsx
address: '#14/15, S.S. Jain Market, M.P. Lane, Chickpet, Bengaluru, India - 560053',
```

**Change to your address:**
```tsx
address: 'Your complete shop address here',
```

### Changing Email

**Find this code:**
```tsx
email: 'mauvabymmd@gmail.com',
```

**Change to:**
```tsx
email: 'your-email@example.com',
```

### Changing Phone Numbers

The app supports two phone numbers (e.g., Retail and Wholesale):

**Find this code:**
```tsx
phones: [
  { number: '+918197697480', display: '+91 8197697480', label: 'Retail' },
  { number: '+917676881468', display: '+91 7676881468', label: 'Wholesale' }
],
```

**Change to your numbers:**
```tsx
phones: [
  { number: '+919876543210', display: '+91 9876543210', label: 'Sales' },
  { number: '+919876543211', display: '+91 9876543211', label: 'Support' }
],
```

**Important:** 
- `number`: Must be in format with country code, NO spaces or special characters (e.g., `+918197697480`)
- `display`: How the number appears on screen (can have spaces, e.g., `+91 8197697480`)
- `label`: The category name (e.g., 'Retail', 'Wholesale', 'Sales', etc.)

### Adding More Phone Numbers

Just add another object to the `phones` array:

```tsx
phones: [
  { number: '+918197697480', display: '+91 8197697480', label: 'Retail' },
  { number: '+917676881468', display: '+91 7676881468', label: 'Wholesale' },
  { number: '+919999999999', display: '+91 9999999999', label: 'Customer Service' }
],
```

### Updating the Google Map

**Find this code** (around line 16):
```tsx
mapEmbedUrl: 'https://www.google.com/maps/embed?pb=...'
```

**To get your own map:**

1. Go to **Google Maps** (https://maps.google.com)
2. Search for your location
3. Click **Share** button
4. Select **Embed a map**
5. Copy **only the URL** from the `src=""` part of the iframe code
6. Replace the mapEmbedUrl value with your new URL

---

## 7. Configuring WhatsApp Buy Now Buttons

**File Location:** `/utils/purchaseHandler.ts`

Every Buy Now button throughout the app redirects to WhatsApp with product details.

### Changing the WhatsApp Number

**Find this code** (around line 10):
```tsx
const WHATSAPP_NUMBER = '918197697480';
```

**Change to your WhatsApp Business number:**
```tsx
const WHATSAPP_NUMBER = '919876543210'; // Your number
```

**Important Format Rules:**
- Start with country code (91 for India)
- NO `+` symbol
- NO spaces
- NO dashes
- Example: `918197697480` (India), `14155551234` (USA)

### Customizing the WhatsApp Message

**Find this code** (around line 18):
```tsx
function generateWhatsAppMessage(productInfo: PurchaseInfo): string {
  const message = `Hi! I'm interested in purchasing:

*${productInfo.productName}*
Price: ${productInfo.price}
Product ID: ${productInfo.productId}

Please provide more details about availability and delivery.`;
  
  return encodeURIComponent(message);
}
```

**Customize the message template:**
```tsx
function generateWhatsAppMessage(productInfo: PurchaseInfo): string {
  const message = `Hello! 

I would like to know more about:
Product: *${productInfo.productName}*
Price: ${productInfo.price}
Reference: #${productInfo.productId}

When can this be delivered? Do you offer any discounts?`;
  
  return encodeURIComponent(message);
}
```

**Variables you can use:**
- `${productInfo.productName}` - The product name
- `${productInfo.price}` - The product price
- `${productInfo.productId}` - The product ID number

### How It Works

When a customer clicks "Buy Now" on any product:
1. WhatsApp opens automatically (on mobile) or in a new tab (on desktop)
2. A pre-filled message appears with the product details
3. Customer can review and send the message to start the conversation
4. Your team receives the inquiry and can respond

**Where Buy Now buttons appear:**
- Home page (featured products)
- Category pages (all products in that category)
- Trending Reels page (product overlay on each reel)

---

## 8. Changing Colors and Styling

**File Location:** `/styles/globals.css`

The website uses the MAUVA brand colors. Here are the most important color variables:

### Current Color Scheme

```css
:root {
  --background: #FAF4F2;        /* Peachy-beige background */
  --primary: #C85A8E;           /* Mauve/pink primary color */
  --secondary: #B892B0;         /* Purple accent color */
  --accent: #E8CEC7;            /* Light peachy accent */
  --card: #ffffff;              /* White cards */
}
```

### Changing the Background Color

**Find this code:**
```css
--background: #FAF4F2;
```

**Change to your color:**
```css
--background: #F5F5F5;  /* Light gray example */
```

### Changing the Primary Brand Color

**Find this code:**
```css
--primary: #C85A8E;
```

**Change to your brand color:**
```css
--primary: #0066CC;  /* Blue example */
```

This color is used for:
- Headers and titles
- Buy Now buttons
- Story circle borders (when active)
- Navigation icons

### Changing the Secondary Color

**Find this code:**
```css
--secondary: #B892B0;
```

**Change to your color:**
```css
--secondary: #00AA00;  /* Green example */
```

### Common Color Codes

- **Blue:** `#0066CC`
- **Green:** `#00AA00`
- **Red:** `#CC0000`
- **Orange:** `#FF6600`
- **Purple:** `#6600CC`
- **Pink:** `#FF1493`
- **Black:** `#000000`
- **White:** `#FFFFFF`

**Tool to pick colors:** Use https://colorpicker.me or Google "color picker"

---

## 9. How Many Products to Show on Home Page

**File Location:** `/components/HomePage.tsx`

**Find this code** (around line 27):
```tsx
const featuredProducts = allProducts.slice(0, 6);
```

**Change the number `6` to show more or fewer products:**
```tsx
const featuredProducts = allProducts.slice(0, 10); // Shows 10 products
```

---

## Quick Reference: File Locations

| What to Change | File Location |
|----------------|---------------|
| Company Name | `/components/HomePage.tsx` |
| Products (add/edit/delete) | `/data/products.ts` |
| Categories/Story Circles | `/components/HomePage.tsx` + `/data/products.ts` |
| About Us Content | `/components/AboutPage.tsx` |
| Trending Reels | `/components/TrendingReelsPage.tsx` |
| Contact Info | `/components/ContactPage.tsx` |
| WhatsApp Number & Message | `/utils/purchaseHandler.ts` |
| Colors | `/styles/globals.css` |
| Number of home page products | `/components/HomePage.tsx` |

---

## Important Notes

1. **Always save your files** after making changes
2. **Test your changes** by refreshing the website
3. **Keep backups** of your original files before making major changes
4. **Be careful with commas** - Every item in an array needs a comma after it (except the last one)
5. **Image URLs must be direct links** - Use the Google Drive format shown above if using Google Drive
6. **Phone numbers for WhatsApp** - Must be in correct format without spaces or special characters

---

## Need Help?

If you encounter issues:

1. **Check for typos** - especially in quotes and brackets
2. **Make sure all brackets match** - Every `{` needs a `}`
3. **Check commas** - Missing or extra commas are common errors
4. **Clear your browser cache** and refresh if changes don't appear
5. **Test WhatsApp links** - Make sure phone number format is correct

---

## Common Mistakes to Avoid

❌ **Wrong:** Missing comma between items
```tsx
{
  id: '1',
  name: 'Product A'
}
{
  id: '2',  // ERROR: Missing comma after previous product
  name: 'Product B'
}
```

✅ **Correct:**
```tsx
{
  id: '1',
  name: 'Product A'
},  // Comma here
{
  id: '2',
  name: 'Product B'
}
```

❌ **Wrong:** Quotes don't match
```tsx
name: 'Mountain Bike"  // Mixed quotes - ERROR
```

✅ **Correct:**
```tsx
name: 'Mountain Bike'  // Both single quotes
```

❌ **Wrong:** WhatsApp number format
```tsx
const WHATSAPP_NUMBER = '+91 8197697480';  // Has + and space - ERROR
```

✅ **Correct:**
```tsx
const WHATSAPP_NUMBER = '918197697480';  // No + or spaces
```

❌ **Wrong:** Google Drive direct sharing link
```tsx
'https://drive.google.com/file/d/1vz4tZA1q2g_BbelqmLKGzbQu_oJ422vq/view?usp=sharing'
// This won't load as an image
```

✅ **Correct:**
```tsx
'https://lh3.googleusercontent.com/d/1vz4tZA1q2g_BbelqmLKGzbQu_oJ422vq'
// Converted to Google's image proxy
```

---

*Last Updated: January 2025*
*Version: 2.0 - Added WhatsApp integration and Google Drive image support*
