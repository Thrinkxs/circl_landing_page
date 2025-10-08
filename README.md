# Circl Landing Page

A minimalist, Apple-inspired landing page for Circl - Building connections that matter.

## Design Philosophy

This landing page follows the principle of "extreme restraint" - every pixel serves a purpose. Drawing inspiration from Apple's design language and Mosaic Styles' minimalism, the page whispers luxury rather than shouting it.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Glass Morphism**: Beautiful frosted glass effects with backdrop blur
- **Micro-Animations**: Smooth, purposeful animations that enhance UX
- **Accessibility**: AAA color contrast, keyboard navigation, screen reader support
- **Performance**: Optimized for Core Web Vitals

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **Typography**: Inter font with Apple system font fallbacks
- **Animations**: Custom CSS animations with cubic-bezier easing

## Color Palette

- **Primary Teal**: `#4ECDC4` - CTAs and accents
- **Text Hierarchy**:
  - Headlines: `#1A252F`
  - Primary text: `#2C3E50`
  - Secondary text: `#64748B`
  - Tertiary/muted: `#94A3B8`
- **Success Green**: `#52C41A`
- **Background**: Subtle gradient from `#f5f7fa` to `#e9ecef`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd circl-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Form Handling

The waitlist form currently includes:
- Email validation with regex pattern
- Loading states and success feedback
- Error handling with inline messages
- Auto-dismissing success notifications (5s)

To integrate with a backend:
1. Replace the `setTimeout` in `handleSubmit` with your API call
2. Add proper error handling for network failures
3. Consider adding analytics tracking

## Customization

### Colors
Update the CSS custom properties in `app/globals.css`:
```css
:root {
  --color-primary-teal: #4ECDC4;
  --color-primary-text: #2C3E50;
  /* ... */
}
```

### Typography
Modify the font stack in `app/layout.tsx` and `globals.css`.

### Animations
Adjust timing and easing in the CSS animations section.

## Performance Targets

- First Contentful Paint: <1.2s
- Time to Interactive: <2.5s
- Lighthouse Score: >95
- Core Web Vitals: All green

## Browser Support

- Chrome 88+
- Firefox 84+
- Safari 14+
- Edge 88+

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms
```bash
npm run build
# Upload the .next/out folder to your hosting provider
```

## Content Guidelines

### Voice & Tone
- Confident, not arrogant
- Clear, not clever
- Benefit-focused, not feature-focused
- Minimal adjectives

### Copy Standards
- Button text: Active voice, clear action
- Email placeholder: Instructive, not cute
- Success messages: Include confirmation, be concise
- Privacy notes: Address concerns proactively but briefly

## Quality Checklist

Before deploying:
- [ ] Test all form states (empty, valid, invalid, success)
- [ ] Verify responsive layout on multiple devices
- [ ] Check touch targets are ≥44px
- [ ] Validate HTML and CSS
- [ ] Test keyboard navigation
- [ ] Verify meta tags for social sharing
- [ ] Spell-check all copy
- [ ] Test in multiple browsers

## Analytics & Tracking

To add analytics, consider tracking:
- Email submission rate (target: 8-12%)
- Form abandonment rate (target: <30%)
- Average time on page (target: 45-90s)
- Scroll depth to features section

## Contributing

1. Follow the established design principles
2. Maintain the 8pt spacing grid
3. Use the defined color palette
4. Keep animations subtle and purposeful
5. Test on multiple devices and browsers

## License

[Your License Here]

---

*"Remove everything until it breaks, then add back just enough."*
