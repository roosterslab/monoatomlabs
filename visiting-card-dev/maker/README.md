# Visiting Card Maker

A modern, professional visiting card maker built with React and Vite. Create, customize, and export high-quality business cards with QR codes.

## Features

- **Interactive Form**: Easy-to-use form with all essential fields
- **Live Preview**: Real-time card preview as you type
- **QR Code Generation**: Automatic QR code with vCard data
- **PDF Export**: Print-ready PDF export (300 DPI, 3.5" × 2")
- **Auto-save**: Form data automatically saved to browser storage
- **Responsive Design**: Works on desktop, tablet, and mobile

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Fill the Form**: Enter your personal, company, and contact information
2. **Preview**: View the live preview of both front and back of your card
3. **Export**: Click "Download as PDF" to get your print-ready business card

## Form Fields

### Required Fields
- Full Name
- Professional Title
- Company Name
- Phone Number
- Email Address

### Optional Fields
- Website
- Address
- LinkedIn URL
- Twitter/X URL
- GitHub URL

## Export Options

- **PDF**: Print-ready PDF with both front and back pages (3.5" × 2")
- **QR Code**: Automatically included on the back of the card
- **vCard**: Scannable vCard data embedded in QR code

## Technologies

- **React 18**: UI framework
- **Vite 6**: Build tool and dev server
- **TailwindCSS 3**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **html2canvas**: HTML to canvas conversion
- **jsPDF**: PDF generation
- **QR Server API**: QR code generation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use for personal or commercial projects
