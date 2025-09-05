# Alumni Website

A modern, responsive alumni website built with HTML, CSS (Tailwind), and JavaScript. This project provides a complete alumni networking platform with dynamic content, interactive features, and a professional design.

## 🚀 Features

### Pages Included
- **Homepage** - Hero section with CTA buttons, highlight cards for events/alumni/news
- **About Us** - Mission & vision, team profiles, photo gallery, latest news
- **Events** - Event calendar, registration forms, sponsorship information
- **Alumni Stories** - Featured alumni profiles, story submission forms
- **Career Services** - Job listings, internships, training programs, resume upload
- **Alumni Portal** - Login and registration with detailed member profiles

### Key Features
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Dynamic Content** - JSON-driven data loading for events, alumni, jobs, and news
- **Interactive Navigation** - Dropdown menus with mobile hamburger navigation
- **Form Handling** - Complete forms for registration, story submission, resume upload
- **Modern UI/UX** - Card-based layouts, hover effects, smooth animations
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support

## 📁 Project Structure

```
alumni-website/
├── index.html          # Homepage
├── about.html          # About Us page
├── events.html         # Events and registration
├── stories.html        # Alumni stories and submission
├── career.html         # Career services and job board
├── portal.html         # Login/registration portal
├── css/
│   └── style.css       # Custom styles extending Tailwind
├── js/
│   └── script.js       # Main JavaScript functionality
├── data/
│   ├── events.json     # Event data
│   ├── news.json       # News articles
│   ├── alumni.json     # Alumni profiles
│   └── jobs.json       # Job and internship listings
└── README.md           # This file
```

## 🛠 Technologies Used

- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first CSS framework via CDN
- **Vanilla JavaScript** - Dynamic functionality and API integration
- **Font Awesome** - Icon library
- **JSON** - Data storage for dynamic content

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd alumni-website
   ```

2. **Serve the files**
   
   **Option A: Python HTTP Server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Node.js http-server**
   ```bash
   npx http-server
   ```
   
   **Option C: PHP Built-in Server**
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

### File-based Setup (Not Recommended)
You can open `index.html` directly in your browser, but some features (like JSON loading) may not work due to CORS restrictions.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** - Full navigation with dropdown menus
- **Tablet** - Adapted layouts with touch-friendly elements
- **Mobile** - Hamburger navigation, stacked layouts

## 🔧 Customization

### Colors and Branding
- Primary colors can be modified in Tailwind classes (blue-600, purple-700)
- Custom CSS variables in `css/style.css` for brand-specific styling
- Logo and branding elements in navigation sections

### Content Management
- **Events**: Edit `data/events.json` to add/modify events
- **Alumni**: Update `data/alumni.json` for featured profiles
- **Jobs**: Modify `data/jobs.json` for career opportunities
- **News**: Edit `data/news.json` for latest updates

### Adding New Features
1. Update relevant HTML pages
2. Add JavaScript functionality in `js/script.js`
3. Create new JSON data files if needed
4. Style with Tailwind classes or custom CSS

## 📊 JSON Data Structure

### Events (`data/events.json`)
```json
{
  "events": [
    {
      "id": 1,
      "title": "Event Name",
      "description": "Event description",
      "date": "2024-12-15",
      "location": "Event location",
      "category": "Event type",
      "image": "https://example.com/image.jpg"
    }
  ]
}
```

### Alumni (`data/alumni.json`)
```json
{
  "alumni": [
    {
      "id": 1,
      "name": "Alumni Name",
      "graduationYear": 2020,
      "position": "Job Title",
      "company": "Company Name",
      "featured": true,
      "story": "Alumni story text",
      "achievements": ["Achievement 1", "Achievement 2"]
    }
  ]
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#7C3AED)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Headers**: System font stack with fallbacks
- **Body**: Optimized for readability across devices
- **Icons**: Font Awesome 6.0

## 📝 Forms and Interactions

### Included Forms
- Event registration
- Alumni story submission
- Resume upload
- Login/registration
- Newsletter subscription

### Interactive Elements
- Mobile navigation toggle
- Password visibility toggles
- File upload with drag-and-drop
- Form validation and notifications
- Smooth scrolling navigation

## 🔒 Security Considerations

This is a frontend-only implementation. For production use, consider:
- Backend API integration for form processing
- User authentication and session management
- Data validation and sanitization
- HTTPS encryption
- Content Security Policy (CSP)

## 📈 Performance Optimizations

- **CDN Resources**: Tailwind CSS and Font Awesome loaded from CDN
- **Image Optimization**: Using optimized Unsplash images
- **Lazy Loading**: Consider implementing for images
- **Minification**: Minimize CSS/JS for production

## 🌐 Browser Support

- **Chrome/Chromium** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **iOS Safari** 14+
- **Chrome Mobile** 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Check existing issues in the repository
- Create a new issue for bugs or feature requests
- Contact the development team

## 🔄 Changelog

### Version 1.0.0 (Current)
- Initial release with all core features
- Responsive design implementation
- Dynamic content loading
- Complete form functionality
- Cross-browser compatibility

---

**Built with ❤️ for the Alumni Community**
