# Bangalexzz Landing Pages - Design Specification
## 5 Structurally Distinct Landing Page Designs

---

## 1. 🍜 RESTO MIEN AYAM - Street Food Narrative (Sidebar + Story Flow)

### ✅ UNIQUE STRUCTURAL ELEMENTS:
- **Navigation**: Fixed LEFT sidebar (200px wide, desktop), horizontal bar (mobile)
- **Layout Flow**: Sidebar separate from main content area
- **Hero Section**: Typography-dominant, NO image emphasis
- **Content Structure**:
  - Hero (big title + subtitle only)
  - Story Section 1 (image LEFT, text RIGHT - alternating)
  - Story Section 2 (image RIGHT, text LEFT - reversed)
  - Stats (left-bordered cards in grid)
  - Menu (HORIZONTAL SCROLL, not grid)
  - Testimonial (full-width block quote)
  - CTA Section (gradient background)

### Grid System: Asymmetric
- Main content: Margin-left 200px (desktop), full-width (mobile)
- Sidebar: Fixed, independent navigation zone
- Story sections: 2-column alternating layout
- Menu: Flex horizontal scroll (not grid)

### Card Philosophy: Flat & Minimal
- Menu cards: 280px wide, 3px borders, no shadows
- Hover: Border color change + Y translation
- Stats cards: Left border accent, no backgrounds

### CTA Placement: Integrated in Sidebar
- Primary CTA button in sidebar (always visible)
- Secondary CTAs in sections
- Bottom gradient CTA section

### Typography: Bold Sans-Serif
- H1: 6rem, font-weight 900, letter-spacing -3px
- H2: 3rem, font-weight 900
- Bold weight contrasts for hierarchy

### Interaction: Smooth, Minimal Motion
- Slide-in animations on load
- Horizontal scroll for menu
- Parallax NOT used

---

## 2. 🍚 RESTO NASI CAMPUR - Food-First 3x3 Grid

### ✅ UNIQUE STRUCTURAL ELEMENTS:
- **Navigation**: Standard top nav (clean, minimal)
- **Hero Section**: Large background photo with text overlay (text in corner)
- **Layout Flow**: CENTER-ALIGNED with max-width
- **Content Structure**:
  - Hero (background photo, text overlay bottom-left)
  - 3x3 Grid Menu (9 tiles, each is LARGE and interactive)
  - Why Choose Us (3-column cards)
  - Location/Contact (2-column)
  - Footer

### Grid System: Responsive 3-Column
- Desktop: 3 columns, 300px+ width tiles
- Tablet: 2 columns
- Mobile: 1 column
- Gaps: 2rem between tiles

### Card Philosophy: Food-Centric Tiles
- Each tile: min-height 400px, flex column
- Emoji/image at TOP (80px, large)
- Content space in middle (flex-grow)
- Footer at bottom with price LEFT, button RIGHT
- Hover: Y translation (-8px) + shadow boost

### CTA Placement: BOTTOM of each tile
- Price bottom-left, "Pesan" button bottom-right
- Every single tile has its own CTA

### Typography: Clean Marketing
- Nav: Gradient text
- Tile names: 1.25rem, bold
-Descriptions: 0.875rem, gray
- Price: Orange/red color, prominent

### Interaction: Lift effect
- Tiles lift on hover
- Shadow intensifies
- No complex animations

---

## 3. 🥟 SNACK DIMSUM MODERN - Editorial Whitespace

### ✅ UNIQUE STRUCTURAL ELEMENTS:
- **No Hero Section** - starts with horizontal line branding
- **Layout**: Centered single-column (max-width 800px, editorial format)
- **Content Structure**:
  - Header line (visual separator)
  - Brand intro paragraph
  - Menu as SIMPLE LIST (not cards)
  - Featured testimonial (full-width quote)
  - Stats (inline, minimal)
  - Footer

### Grid System: None (Single Column)
- Max-width: 800px
- Centered on page
- Gallery of white space & breathing room
- NO card containers

### Card Philosophy: NO CARDS
- Menu items: Just typography
- Item name (serif, left-aligned)
- Description (italic, small, beneath)
- Price (right-aligned)
- Light separator line between items
- Completely flat, no visual containers

### CTA Placement: Scattered naturally
- CTA integrated into text flow
- No dedicated CTA section
- Embedded as inline links/buttons

### Typography: Serif Headers + Sans Body
- Headers: Serif font (elegant)
- Body: Clean sans-serif
- Mix of font styles for editorial feel
- Large negative space between sections

### Interaction: Minimal
- Only subtle fade-ins on scroll
- No hover animations
- Very quiet, magazine-like

---

## 4. 🤩 SNACK DIMSUM PLAYFUL - Rounded Blob Organic

### ✅ UNIQUE STRUCTURAL ELEMENTS:
- **Navigation**: Curved bottom edge (border-radius: 0 0 50px 50px)
- **Layout**: Organic blob shapes, NO traditional grid
- **Section Stacking**: Wavy dividers between sections
- **Content Structure**:
  - Curved nav bar
  - Hero (overlap with floating emojis)
  - Section 1 (blob with rounded background)
  - Section 2 (blob, different color)
  - Menu (rounded card blobs, different colors each)
  - Floating animated elements throughout
  - Wavy SVG dividers between sections

### Grid System: Organic (Non-Grid)
- Rounded section blocks (border-radius: 45% 55% 52% 48%)
- Full-width colored sections
- Overlapping blobs
- NO structured columns/grid

### Card Philosophy: Rounded Blobs
- Each menu card: Blob shape (not square)
- Different color for each blob
- Floating elements inside
- Shadows with colors matching theme

### CTA Placement: Scattered, Multiple
- CTAs in multiple places
- Some with bounce animations
- Some in blobs, some standalone

### Typography: Bold, Playful
- All caps headlines
- Colorful text gradients
- Emoji-heavy
- Bouncing/wiggling animations on text

### Interaction: Very Animated
- Bounce animations on emoji
- Wiggle on nav
- Float effects
- Spin animations on decorative elements
- Very playful energy

---

## 5. 👑 SNACK DIMSUM LUXURY - Centered Symmetry Premium

### ✅ UNIQUE STRUCTURAL ELEMENTS:
- **Navigation**: Minimalist centered nav with glass effect
- **Dark Mode**: Dark slate/black background (#0f172a)
- **Hero Section**: Large cinematic image hero (300px+ tall)
- **Layout**: Centered symmetrical (max-width 700-900px)
- **Content Structure**:
  - Glass nav bar (minimalist)
  - Large hero image (cinematic)
  - Centered headline
  - Collections (2x2 centered grid, not 3-column)
  - Experience section (symmetrical 2-column)
  - Reviews (centered testimonials)
  - Footer

### Grid System: Centered Symmetrical
- 2x2 grid for collections (centered on page)
- Max-width: 900px
- Generous padding/margins
- Centered alignment throughout

### Card Philosophy: Glass + Gold Borders
- Subtle glass morphism effect (backdrop-blur)
- Thin gold/amber borders (#fbbf24)
- Minimal drop shadows
- Elegant, refined appearance
- Dark backgrounds with light text

### CTA Placement: Centered Buttons
- All CTAs centered on page
- Gold gradient buttons
- Minimal, elegant styling

### Typography: Serif Headlines + Elegant Sans
- Serif fonts for main headlines
- Sans-serif for descriptions
- Gold accent on key words
- Mix of weights for elegance
- Generous line-height

### Interaction: Smooth, Minimal
- Fade-in animations only
- No bounce/wiggle
- Smooth transitions on hover
- Very sophisticated, quiet

---

## Summary: Structural Differences

| Aspect | Mie Ayam | Nasi Campur | Dimsum Modern | Dimsum Playful | Dimsum Luxury |
|--------|----------|------------|---------------|----------------|--------------|
| **Navigation** | Sidebar (LEFT) | Top Nav | Minimal Centered | Curved | Glass Dark |
| **Hero** | Typography | Photo BG | NO HERO | Emoji Float | Photo Hero |
| **Grid System** | Asymmetric 2-col | 3x3 Responsive | Single Column | Organic Blobs | Centered 2x2 |
| **Cards** | Flat Borders | Large Tiles | NO CARDS | Blob Shapes | Glass Borders |
| **Color Scheme** | Amber/Orange | Orange/Red | Black/Red | Pink/Yellow | Dark/Gold |
| **Interaction** | Minimal | Lift Effect | Fade Only | Very Animated | Smooth Fade |
| **Vibe** | Street Urban | Food Shop | Magazine | Fun Playful | Luxury Premium |

---

## Implementation Status
✅ All 5 pages have DISTINCT structural layouts
✅ NO two pages share the same navigation model
✅ NO two pages share the same grid/layout system
✅ Each page has unique card styling philosophy
✅ Different interaction patterns across all pages
✅ Typography and color used functionally, not cosmetically
✅ Back button with brand-appropriate styling on all pages
