# Assets TODO

The following assets need to be added to complete the PWA setup. Currently, placeholder files exist.

## PWA Icons

### Required Sizes

**Location**: `/Users/ags/Code/zeke/web/app/public/`

1. **favicon.ico** (16x16 or 32x32)
   - Current: Placeholder text file
   - Need: Actual .ico file with Zeke logo
   - Used for: Browser tab icon

2. **icon-192.png** (192x192)
   - Current: Placeholder text file
   - Need: PNG image of Zeke logo, 192x192 pixels
   - Used for: PWA icon on Android, smaller displays

3. **icon-512.png** (512x512)
   - Current: Placeholder text file
   - Need: PNG image of Zeke logo, 512x512 pixels
   - Used for: PWA icon on Android, splash screens

### Recommended Additional Icons

4. **apple-touch-icon.png** (180x180)
   - For iOS home screen icon
   - Should have rounded corners

5. **og-image.png** (1200x630)
   - For social media sharing
   - Shows when app URL is shared

## Design Guidelines

### Logo Requirements

- **Style**: Clean, modern, friendly
- **Colors**: Use Zeke primary blue (#4086FC)
- **Concept Ideas**:
  - House icon with AI/tech element
  - Friendly robot character
  - "Z" letter mark with house shape
  - Combination mark (icon + text)

### Icon Specifications

- **Format**: PNG with transparency
- **Background**: Transparent or white
- **Padding**: 10% around logo for breathing room
- **Safe area**: Keep important elements in center 80%

### Favicon Specifications

- **Format**: .ico file (multi-resolution)
- **Sizes included**: 16x16, 32x32, 48x48
- **Style**: Simplified version of main logo
- **Background**: Solid color or transparent

## Quick Solution (Temporary)

For testing purposes, you can:

1. Use a placeholder generator:
   ```
   https://placeholder.com/192x192/4086FC/FFFFFF?text=Zeke
   ```

2. Convert to icons using online tools:
   - https://realfavicongenerator.net/
   - https://www.favicon-generator.org/

3. Or create simple colored squares with "Z":
   - Use any image editor
   - Create blue (#4086FC) background
   - Add white "Z" text in center
   - Export in required sizes

## Production Solution

Work with a designer to create:

1. **Logo Design**
   - Full logo with wordmark
   - Icon-only version
   - Variations for light/dark backgrounds

2. **Icon Set**
   - All required PWA sizes
   - Favicon variations
   - App store assets (for future native apps)

3. **Brand Assets**
   - Logo usage guidelines
   - Color variations
   - Minimum size requirements

## Installation

Once you have the actual images:

1. Replace the placeholder files in `/public/`:
   ```bash
   # Remove placeholders
   rm public/favicon.ico
   rm public/icon-192.png
   rm public/icon-512.png

   # Add real images
   cp /path/to/your/favicon.ico public/
   cp /path/to/your/icon-192.png public/
   cp /path/to/your/icon-512.png public/
   ```

2. (Optional) Add apple-touch-icon:
   ```bash
   cp /path/to/your/apple-touch-icon.png public/
   ```

3. Update manifest.json if you added more icons:
   ```json
   {
     "icons": [
       {
         "src": "/icon-192.png",
         "sizes": "192x192",
         "type": "image/png"
       },
       {
         "src": "/icon-512.png",
         "sizes": "512x512",
         "type": "image/png"
       },
       {
         "src": "/apple-touch-icon.png",
         "sizes": "180x180",
         "type": "image/png"
       }
     ]
   }
   ```

4. Update layout.tsx for apple-touch-icon:
   ```tsx
   <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
   ```

## Testing PWA Icons

### On Desktop
1. Open DevTools > Application > Manifest
2. Check "Icons" section
3. Verify all icons load correctly

### On Mobile
1. Add to home screen
2. Check icon appearance
3. Verify it matches your design

### On iOS
1. Share > Add to Home Screen
2. Check icon on home screen
3. Verify rounded corners look good

## Priority

- **High**: favicon.ico, icon-192.png, icon-512.png
  - Needed for functional PWA

- **Medium**: apple-touch-icon.png
  - Better iOS experience

- **Low**: og-image.png, additional sizes
  - Nice to have for sharing/marketing

## Current Status

🔴 **Not production-ready** - placeholder files only
🟡 **Functional** - app works without real icons
🟢 **Ready when assets added** - no code changes needed

Simply replace the placeholder files with real images and you're done!
