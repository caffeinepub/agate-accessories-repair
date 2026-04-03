# AGATE Accessories & Repair

## Current State
Full-featured repair shop website with:
- Hero section, services (7 repair types with images), accessories shop
- Computer accessories section (6 products)
- Customer reviews carousel
- Technician profile (Aditya Kumar Behura only)
- Blog posts (5)
- Floating call button (+919692500609)
- Promo banner (10% off above ₹200)
- Dark gold Jarvis-inspired aesthetic

## Requested Changes (Diff)

### Add
1. **Spin Wheel / Lucky Wheel** -- An animated spin-the-wheel component placed prominently in the offers/deals section. Wheel segments contain real offers (10% off, Free Screen Protector, 5% off, Free Diagnosis, etc.). User clicks spin, wheel spins with animation and lands on an offer. Call-to-action to call us to redeem.
2. **All Phone Company Brands + Series List** -- A comprehensive section showing all major phone brands (Apple, Samsung, OnePlus, Xiaomi/Redmi, Realme, Vivo, Oppo, Motorola, Nokia, Google Pixel, Honor, iQOO, Poco, Nothing, Asus ROG) with their popular series listed under each brand. Helps users quickly identify if their phone model is supported.
3. **Before & After Repair Section** -- A side-by-side or slider comparison section showing the generated before (cracked screen) and after (perfect screen) images. Images already generated at: /assets/generated/phone-before-repair.dim_600x400.jpg and /assets/generated/phone-after-repair.dim_600x400.jpg
4. **Enhanced About Us Section** -- Rich about us section with: AGATE story/mission, technician Aditya Kumar Behura with photo (/assets/generated/about-us-technician.dim_800x600.jpg), key stats (2+ years, 300+ customers, 500+ repairs, 100% satisfaction), values (quality, speed, trust, doorstep service), and call-to-action.

### Modify
- Offers section to incorporate the spin wheel prominently
- Phone model support section (new section showing all supported brands and series)

### Remove
- Nothing removed

## Implementation Plan
1. Create SpinWheel component with canvas-based animated wheel, prize segments, spin button
2. Create PhoneBrandsSection with all major brands and their series in expandable cards
3. Create BeforeAfterSection with side-by-side comparison using generated images
4. Create enhanced AboutUsSection with technician photo, stats, and story
5. Wire all new components into App.tsx at appropriate positions
6. Validate and deploy
