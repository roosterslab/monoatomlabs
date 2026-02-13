# Digital Visiting Card

A modern, responsive digital visiting card with QR code functionality.

## Features

- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **QR Code Generation** - Auto-generates QR code for easy contact sharing
- **Save Contact** - Download vCard (.vcf) file to save contact information
- **Social Media Links** - LinkedIn, Twitter, and Email integration
- **Modern UI** - Clean gradient design with smooth animations
- **Interactive Elements** - Hover effects and transitions

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and responsive design
- `script.js` - JavaScript functionality (vCard generation, QR code)

## How to Use

1. **Open the page**: Simply open `index.html` in any modern web browser
2. **Save Contact**: Click the "Save Contact" button to download the vCard
3. **Share via QR Code**: Others can scan the QR code to save your contact

## Customization

### Update Contact Information

Edit the `contactData` object in `script.js`:

```javascript
const contactData = {
    name: "Your Name",
    title: "Your Title",
    company: "Your Company",
    phone: "+1 (555) 123-4567",
    email: "your.email@company.com",
    website: "www.yourwebsite.com",
    address: "Your Address",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle"
};
```

### Update HTML Content

In `index.html`, update the following sections:
- Company name and tagline in `.card-header`
- Name and title in `.card-body`
- Contact information in `.contact-info`

### Customize Colors

In `style.css`, modify the CSS variables:

```css
:root {
    --primary-color: #1a1a1a;        /* Main background */
    --secondary-color: #2d2d2d;      /* Secondary background */
    --accent-color: #4a90e2;         /* Accent color */
    --gradient-start: #667eea;       /* Gradient start */
    --gradient-end: #764ba2;         /* Gradient end */
}
```

### Add Your Logo

Replace the `.logo-icon` div with an actual image:

```html
<img src="your-logo.png" alt="Company Logo" class="logo-icon">
```

## Deployment

You can deploy this visiting card to:

- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Drag and drop deployment
- **Vercel** - One-click deployment
- **Any web hosting** - Upload all three files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Google Fonts (Inter)
- QR Server API (for QR code generation)

## Future Enhancements

- [ ] Multiple language support
- [ ] Dark/Light theme toggle
- [ ] Card flip animation
- [ ] Download as image
- [ ] Analytics tracking
- [ ] Share to social media

## License

Free to use and modify for personal or commercial projects.

---

Created for MonoAtoms
