# Planning Guide

A professional landing page showcasing Greenwood's 24 Hour Mobile Mechanic Services with bold automotive styling that commands trust and immediate action.

**Experience Qualities**:
1. **Urgent Reliability** - Users should feel confident that help is available any time, day or night, with fast response times.
2. **Professional Authority** - The design should project expertise and trustworthiness through polished visuals and clear service information.
3. **Accessible Approachability** - Despite the professional appearance, the site should feel welcoming and easy to navigate for anyone in need.

**Complexity Level**: Content Showcase (information-focused)
This is a service-focused landing page designed to inform potential customers about mobile mechanic services and convert them into calls/bookings. It emphasizes showcasing services, availability, and contact information rather than complex interactions.

## Essential Features

### Hero Section with Immediate Call-to-Action
- **Functionality**: Eye-catching header with business name, tagline, and prominent phone number
- **Purpose**: Immediately communicate the core service and enable instant contact
- **Trigger**: Page load
- **Progression**: User lands on page → Sees bold headline and 24/7 availability → Clicks phone number to call
- **Success criteria**: Phone number is immediately visible and clickable on all devices

### Services Showcase
- **Functionality**: Grid or list display of all mechanical services offered
- **Purpose**: Inform customers of the full range of services available
- **Trigger**: User scrolls past hero section
- **Progression**: User scrolls → Views service categories with icons → Understands full scope of offerings
- **Success criteria**: All major services are clearly listed with intuitive iconography

### 24/7 Availability Highlight
- **Functionality**: Prominent display emphasizing round-the-clock service
- **Purpose**: Differentiate from competitors and address emergency situations
- **Trigger**: Visible throughout the page
- **Progression**: User notices 24/7 messaging → Feels reassured → More likely to save/call
- **Success criteria**: 24-hour availability is mentioned in multiple locations

### Contact Information Display
- **Functionality**: Multiple contact points (phone, service area information)
- **Purpose**: Make it effortless for customers to reach out
- **Trigger**: User decides to make contact
- **Progression**: User ready to call → Finds phone number → Initiates contact
- **Success criteria**: Phone number is displayed prominently in header and footer

### Service Area Information
- **Functionality**: Display of coverage area/regions served
- **Purpose**: Set clear expectations about where services are available
- **Trigger**: User scrolls to relevant section
- **Progression**: User wonders about coverage → Finds service area section → Confirms eligibility
- **Success criteria**: Service area is clearly communicated

## Edge Case Handling

- **Mobile Users on Highways**: Large, thumb-friendly call button for distressed drivers
- **Night-Time Emergencies**: High contrast design ensures visibility in low-light conditions
- **First-Time Visitors**: Clear, jargon-free service descriptions accessible to non-mechanics
- **Multiple Service Needs**: Organized service categories prevent overwhelming users

## Design Direction

The design should evoke speed, reliability, and automotive expertise—think racing aesthetics meets professional service. The color scheme drawn from the business card (electric lime green, deep blacks, bold reds, metallic accents) creates an energetic, masculine, high-performance feel that instills confidence while maintaining approachability.

## Color Selection

The palette draws directly from the Greenwood's business card imagery—vibrant racing greens, deep blacks, and bold accent colors that convey speed and professionalism.

- **Primary Color**: Electric Lime Green (oklch(0.85 0.20 130)) - Energetic, high-visibility color that communicates speed and 24/7 availability, perfect for CTAs and headers
- **Secondary Colors**: 
  - Deep Black (oklch(0.15 0 0)) - Professional foundation, creates high contrast and sophistication
  - Metallic Silver/Gray (oklch(0.65 0.01 270)) - Automotive sophistication, used for borders and subtle accents
- **Accent Color**: Racing Red (oklch(0.55 0.22 25)) - Emergency urgency, used sparingly for critical CTAs and important alerts
- **Foreground/Background Pairings**: 
  - Primary Background (Deep Black oklch(0.15 0 0)): Lime Green text (oklch(0.85 0.20 130)) - Ratio 10.2:1 ✓
  - Lime Green Buttons (oklch(0.85 0.20 130)): Black text (oklch(0.15 0 0)) - Ratio 10.2:1 ✓
  - Card Backgrounds (oklch(0.20 0.01 0)): White/Light text (oklch(0.95 0 0)) - Ratio 12.8:1 ✓
  - Accent Red (oklch(0.55 0.22 25)): White text (oklch(0.98 0 0)) - Ratio 4.9:1 ✓

## Font Selection

Typography should reflect automotive precision and modern professionalism while maintaining excellent readability for urgent situations.

- **Primary Font**: Rajdhani (Bold/SemiBold) - Angular, technical letterforms inspired by automotive engineering and racing
- **Secondary Font**: Inter - Clean, highly legible for body text and service descriptions

- **Typographic Hierarchy**:
  - H1 (Business Name/Hero): Rajdhani Bold / 56px / tight tracking (-0.02em) / uppercase
  - H2 (Section Headers): Rajdhani SemiBold / 36px / normal tracking / uppercase
  - H3 (Service Titles): Rajdhani SemiBold / 24px / slight tracking
  - Phone Number (CTA): Rajdhani Bold / 32px / spaced tracking (0.05em)
  - Body Text: Inter Regular / 16px / 1.6 line-height
  - Small Text (Labels): Inter Medium / 14px / uppercase / letter-spacing 0.1em

## Animations

Animations should feel mechanical and precise, like well-tuned machinery—quick, purposeful movements that enhance navigation without delaying urgent actions.

Key animation moments:
- Hero entrance: Smooth fade-up with slight parallax effect on scroll
- Service cards: Subtle lift on hover with green glow effect
- CTA buttons: Quick scale pulse to draw attention, immediate response on click
- Section reveals: Slide-in-from-side as user scrolls, staggered for visual interest
- Phone number: Gentle pulse animation to maintain attention without being annoying

## Component Selection

- **Components**: 
  - Card: For service offerings with hover effects showing green border glow
  - Button: Primary CTAs styled with lime green background and black text, with racing stripe accent
  - Badge: For "24/7" and "Mobile" indicators with bold styling
  - Separator: Metallic-styled dividers between sections
  - Hover Card: For expanded service details on hover
  
- **Customizations**: 
  - Custom gradient overlays on cards (dark to transparent) for depth
  - Diagonal stripe patterns in backgrounds echoing racing aesthetics
  - Custom icon styling with green glows for service categories
  - Phone button component with prominent styling and icon
  
- **States**: 
  - Buttons: Default (lime green), Hover (brighter green with scale), Active (pressed with darker green), Focus (green ring)
  - Cards: Default (dark with subtle border), Hover (lifted with green glow border and slight scale)
  - Links: Default (lime green), Hover (brighter with underline animation)
  
- **Icon Selection**: 
  - Wrench, Engine, Tire - for service categories
  - Phone - for call buttons
  - Clock - for 24/7 availability
  - MapPin - for service area
  - Lightning - for fast/emergency service
  
- **Spacing**: 
  - Section padding: py-16 md:py-24
  - Card gaps: gap-6 md:gap-8
  - Content max-width: max-w-7xl
  - Inner content padding: px-4 md:px-6
  
- **Mobile**: 
  - Hero: Stack elements vertically, maintain large phone CTA
  - Services: Single column grid on mobile, 2-col tablet, 3-col desktop
  - Navigation: Sticky phone button on mobile remains accessible
  - Typography: Reduce heading sizes by 30% on mobile while maintaining hierarchy
  - Background patterns: Simplify or reduce opacity on small screens for readability
