// Contact Information
const contactData = {
    name: "Dr. John Doe",
    title: "Chief Technology Officer",
    company: "MonoAtoms",
    phone: "+1 (555) 123-4567",
    email: "john.doe@monoatoms.com",
    website: "www.monoatoms.com",
    address: "123 Innovation Drive, Tech Valley, CA 94000",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe"
};

// Generate vCard data
function generateVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactData.name}
ORG:${contactData.company}
TITLE:${contactData.title}
TEL;TYPE=WORK,VOICE:${contactData.phone}
EMAIL;TYPE=PREF,INTERNET:${contactData.email}
URL:${contactData.website}
ADR;TYPE=WORK:;;${contactData.address}
END:VCARD`;
    return vcard;
}

// Save contact as vCard
function saveContact() {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${contactData.name.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success message
    showNotification('Contact saved successfully!');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Generate QR Code (using a simple library-free approach)
// For production, consider using a library like qrcode.js
function generateQRCode() {
    const qrContainer = document.getElementById('qrCode');
    const vcardData = generateVCard();

    // For a real implementation, you would use a QR code library
    // This is a placeholder that shows the concept
    const qrPlaceholder = qrContainer.querySelector('.qr-placeholder');

    // You can integrate with https://api.qrserver.com/v1/create-qr-code/
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(vcardData)}`;

    const img = document.createElement('img');
    img.src = qrURL;
    img.alt = 'QR Code';
    img.style.cssText = 'width: 100%; height: 100%; border-radius: 10px;';

    qrPlaceholder.innerHTML = '';
    qrPlaceholder.appendChild(img);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Save contact button
    const saveBtn = document.getElementById('saveContact');
    saveBtn.addEventListener('click', saveContact);

    // Generate QR code
    generateQRCode();

    // Update social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks[0].href = contactData.linkedin;
    socialLinks[1].href = contactData.twitter;
    socialLinks[2].href = `mailto:${contactData.email}`;
});

// Share functionality (if Web Share API is supported)
async function shareContact() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: contactData.name,
                text: `${contactData.title} at ${contactData.company}`,
                url: contactData.website
            });
        } catch (err) {
            console.log('Error sharing:', err);
        }
    }
}
