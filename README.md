# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcase your projects, skills, and professional achievements with a sleek and interactive design.

## Features

- ✨ Responsive design that works on all devices
- 🎨 Smooth scroll animations and reveal effects
- 📱 Mobile-friendly navigation bar
- 🖼️ Project showcase section
- 💼 Skills and expertise display
- 📝 Blog section for articles and insights
- 📧 Contact form for inquiries
- ⚡ Fast performance with Vite
- 🎯 SEO-friendly structure

## Tech Stack

- **React** - Frontend UI library
- **Vite** - Lightning-fast build tool and dev server
- **CSS** - Responsive styling
- **JavaScript** - Dynamic interactivity
- **ESLint** - Code quality and consistency

## Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section
│   ├── Blog.jsx           # Blog section
│   ├── Contact.jsx        # Contact form
│   ├── Footer.jsx         # Footer component
│   ├── Hero.jsx           # Hero/Landing section
│   ├── Navbar.jsx         # Navigation bar
│   ├── Projects.jsx       # Projects showcase
│   └── Skills.jsx         # Skills section
├── hooks/
│   └── useScrollReveal.js # Custom hook for scroll animations
├── assets/                # Static assets (images, icons, etc.)
├── App.jsx                # Main application component
├── index.css              # Global styles
└── main.jsx               # Application entry point
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Portfolio Website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## Usage

### Development

Run the development server with hot module replacement (HMR):
```bash
npm run dev
```

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Lint Code

Check code quality with ESLint:
```bash
npm run lint
```

## Components Overview

- **Navbar** - Navigation header with smooth scrolling
- **Hero** - Landing section with introduction
- **About** - About me/company information
- **Skills** - Technical skills and expertise
- **Projects** - Showcase of completed projects
- **Blog** - Articles and blog posts
- **Contact** - Contact form for inquiries
- **Footer** - Footer with links and information

## Customization

Update the content in each component located in `src/components/` to add your own:
- Personal information
- Project details and images
- Skills and technologies
- Blog posts
- Contact information

## License

This project is open source and available under the MIT License.

## Contact

For inquiries or collaborations, please use the contact form or reach out directly.
