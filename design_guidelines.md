# Portfolio Website Design Guidelines for Sanskar Vaibhav

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios (Linear, Vercel, GitHub profiles) combined with glassmorphism aesthetics. The design emphasizes clean layouts, professional presentation, and recruiter-friendly information architecture.

## Core Design Principles
1. **Professional Minimalism**: Clean, focused layouts that highlight content over decoration
2. **Glassmorphism Accents**: Subtle frosted-glass effects on cards and overlays
3. **Information Hierarchy**: Clear visual separation between sections with scannable content
4. **Recruiter-Optimized**: Easy navigation to projects, skills, and contact information

## Typography System

**Primary Font**: Poppins (Google Fonts)
- Hero Headline: 3.5rem (56px) bold → Mobile: 2.5rem (40px)
- Section Headings: 2.5rem (40px) semibold → Mobile: 2rem (32px)
- Subsection Headings: 1.5rem (24px) semibold
- Body Text: 1rem (16px) regular, line-height 1.7
- Small Text/Labels: 0.875rem (14px) medium
- Navbar Links: 1rem (16px) medium

**Hierarchy Rules**: All headings use consistent spacing below (1rem gap), body text maintains comfortable reading width (max 65ch for paragraphs)

## Layout & Spacing System

**Tailwind Spacing Primitives**: Use units of 2, 4, 6, 8, 12, 16, 20, 24
- Section Vertical Padding: py-20 (desktop), py-12 (mobile)
- Card Padding: p-6 to p-8
- Element Gaps: gap-6 for grids, gap-4 for flex containers
- Margins: mb-8 for section headings, mb-4 for subsections

**Container System**:
- Max Width: max-w-7xl for full sections, max-w-6xl for content-focused areas
- Horizontal Padding: px-6 (mobile), px-8 (tablet), px-12 (desktop)

## Navigation Bar

**Structure**: Sticky header with logo/name on left, navigation links center-aligned, CTA button on right
- Height: h-16 to h-20
- Glassmorphism: Semi-transparent backdrop with blur effect
- Mobile: Hamburger menu transitioning to full-screen overlay
- Active State: Underline or highlight indicator for current section
- Smooth Scroll: Links trigger smooth scrolling to sections

## Hero Section

**Layout**: Full viewport height (min-h-screen), centered content with vertical flex
- **Background**: Animated gradient mesh or particle effect (subtle, not distracting)
- **Content Structure**:
  - Greeting text: "Hi, I'm Sanskar Vaibhav" (1.25rem, medium weight)
  - Main headline: "Software Developer from Begusarai" (3.5rem, bold, gradient text effect)
  - Tagline: One-line description with typing animation effect
  - CTA Row: Download Resume (primary button) + Social Icons (GitHub, LinkedIn, LeetCode, GeeksforGeeks)
  - Scroll Indicator: Animated down arrow at bottom

**Image Use**: No large hero image; use animated gradient background instead

**Button Treatment**: Primary button with glassmorphism effect, padding px-8 py-3, rounded-lg

## About Me Section

**Layout**: Two-column grid (lg:grid-cols-2), single column on mobile
- **Left Column**: Profile image (rounded-2xl, aspect-square, max 400px width) with subtle shadow and border
- **Right Column**: 
  - Section heading "About Me"
  - Bio paragraphs (2-3 paragraphs, max-w-prose)
  - Key Highlights: 3-4 stat cards in grid (CGPA, University, Location, Status)
  - Personal Updates area: Timeline-style component with latest achievements

**Card Style**: Glassmorphism cards with p-6, rounded-xl, backdrop-blur

## Skills Section

**Layout**: Category-based skill cards in responsive grid
- Desktop: 4 columns (grid-cols-4)
- Tablet: 2 columns (md:grid-cols-2)
- Mobile: 1 column

**Skill Categories**:
1. Primary Languages (Java, Python, SQL, C++, JavaScript)
2. Web Development (HTML, CSS, JS, React, Node.js)
3. AI/ML Tools (TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy)
4. Cloud & DevOps (AWS services, GitHub)
5. Developer Tools (VS Code, PyCharm, IntelliJ, Postman)

**Card Design**: Each skill has icon (FontAwesome), name, and optional proficiency indicator. Cards use hover effect with subtle lift and glow.

## Projects Section

**Layout**: Responsive grid of project cards
- Desktop: 3 columns (lg:grid-cols-3)
- Tablet: 2 columns (md:grid-cols-2)
- Mobile: 1 column

**Project Count**: Display 8 projects minimum

**Project Card Structure**:
- Thumbnail area (placeholder or project screenshot, aspect-video)
- Title (1.25rem, semibold)
- Description (2-3 lines, text-sm)
- Tech Stack: Pill-shaped badges in flex-wrap
- Action Buttons: GitHub link + Live Demo (if available), stacked horizontally

**Card Interaction**: Hover effect with scale transform and enhanced shadow

## Internships Section

**Layout**: Horizontal timeline or card grid (2 columns on desktop)

**Card Content**:
- Company logo placeholder (circular or square, 60px)
- Role title (1.25rem, semibold)
- Company name + Timeline (text-sm)
- Bullet-point responsibilities (3-5 items)
- Glassmorphism card with border accent

## Courses & Certifications

**Layout**: Timeline-style vertical list with alternating sides on desktop, stacked on mobile

**Certificate Entry**:
- Icon (certificate/award icon from FontAwesome)
- Course title (semibold)
- Issuing organization
- Completion date
- Connecting line between entries

## Achievements Section

**Layout**: Clean timeline with date markers
- Chronological order (newest first)
- Each entry: Date badge, title, description
- Easy to add new entries (well-structured spacing)
- Visual connector line on left side

## Contact Section

**Layout**: Two-column grid on desktop, stacked on mobile
- **Left Column**: Contact form with fields:
  - Name (input)
  - Email (input)
  - Message (textarea, min-h-32)
  - Submit button (primary style, full width)
- **Right Column**: Contact information card
  - Email address with icon
  - Social links (large icons in horizontal layout)
  - Location info
  - Response time note

**Form Styling**: Glassmorphism inputs with focus states, rounded-lg, p-3

## Footer

**Content**: 
- Three-column layout (desktop), stacked (mobile)
- Left: Name/logo + short tagline
- Center: Quick navigation links
- Right: Social icons + Last Updated timestamp
- Bottom: Copyright notice

**Styling**: Subtle border-top, py-12 padding, links with hover underline effect

## Component Library

**Glassmorphism Cards**: backdrop-blur-md, semi-transparent background, border with subtle glow, rounded-xl to rounded-2xl
**Buttons**: Primary (solid), Secondary (outlined), All with rounded-lg, px-6 py-3, medium font-weight, hover lift effect
**Badges/Pills**: Tech stack tags with rounded-full, px-3 py-1, text-sm, semi-transparent backgrounds
**Icons**: FontAwesome icons throughout, size-specific: text-xl for section accents, text-2xl for social links
**Input Fields**: Rounded borders, backdrop-blur effect, focus ring, consistent p-3 padding

## Animations

**Scroll Animations**: Intersection Observer triggers:
- Fade-up effect for section entries
- Stagger delay for card grids (50-100ms between cards)
- Navbar background blur on scroll

**Interactive Animations**:
- Button hover: subtle scale (1.05) + shadow enhancement
- Card hover: lift effect (translateY -4px) + glow
- Link hover: underline slide-in animation
- Typing effect on hero tagline (one-time on load)

**Performance**: Animations use transform and opacity only (GPU-accelerated), duration 300-500ms, ease-out timing

## Responsive Breakpoints

- Mobile: < 640px (single column, stacked layouts)
- Tablet: 640px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Adjustments**:
- Reduce heading sizes by 30-40%
- Switch grids to single column
- Stack horizontal button groups
- Hamburger menu for navigation
- Reduce section padding to py-12

## Images

**Profile Photo**: Professional headshot, 400x400px recommended, rounded-2xl border radius, placed in About section
**Company Logos**: For internships section, 60x60px circular or square logos for AWS and Google
**No Hero Image**: Use animated gradient background instead
**Project Thumbnails**: Placeholder images or screenshots, aspect-video (16:9), rounded-lg

## Accessibility

- Semantic HTML5 structure (header, nav, main, section, footer)
- ARIA labels for icon-only buttons
- Focus states visible on all interactive elements
- Sufficient contrast ratios for text
- Keyboard navigation support for all interactive elements

---

**Last Updated Display**: Small text in footer showing manual update date, encouraging regular maintenance