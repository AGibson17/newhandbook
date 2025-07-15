# Employee Handbook Site

A modern, responsive employee handbook website built with Next.js, TypeScript, and SCSS. This project provides a clean, professional interface for employees to access company policies, benefits information, and HR procedures.

## 🚀 Features

- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI** - Clean, professional interface with smooth animations
- **📄 Markdown Content** - Easy-to-edit policy documents in Markdown format
- **🔍 Search Functionality** - Quick search through policies and content
- **📱 Mobile Navigation** - Intuitive mobile menu system
- **♿ Accessible** - Built with accessibility best practices
- **⚡ Fast Performance** - Optimized with Next.js static generation
- **🎯 SEO Optimized** - Server-side rendering for better search engine visibility

## 📂 Project Structure

```
employee-handbook-site/
├── components/              # React components
│   ├── CategoryCard.tsx     # Category display cards
│   ├── PolicyOverlay.tsx    # Modal for policy content
│   ├── MobileNav.tsx        # Mobile navigation menu
│   └── SearchBox.tsx        # Search functionality
├── content/                 # Markdown content
│   ├── categories/          # Category overview pages
│   │   ├── benefits.md
│   │   └── time-off.md
│   └── policies/            # Policy documents by category
│       ├── time-off/
│       │   ├── pto.md
│       │   └── vacation.md
│       └── benefits/
│           └── medical.md
├── pages/                   # Next.js pages
│   ├── _app.tsx            # App configuration
│   ├── index.tsx           # Homepage
│   ├── [category].tsx      # Category pages
│   └── [category]/[policy].tsx # Individual policy pages
├── public/                  # Static assets
│   └── assets/
│       ├── logo.svg
│       └── icon.svg
├── styles/                  # SCSS stylesheets
│   ├── _variables.scss      # Design system variables
│   ├── globals.scss         # Global styles
│   └── components/          # Component-specific styles
├── utils/                   # Utility functions
│   ├── loadPolicies.ts      # Policy content loader
│   └── markdownToHtml.ts    # Markdown processor
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    └── .gitignore
```

## 🛠️ Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.0.0 or later
- **npm** 8.0.0 or later

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd employee-handbook-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📝 Content Management

### Adding New Categories

1. **Create a category file:**
   - Add a new markdown file in `content/categories/`
   - Use this template:
   ```markdown
   # Category Name
   
   Brief description of the category...
   
   ## Overview
   More detailed information...
   ```

2. **Update the category list:**
   - Modify `utils/loadPolicies.ts` to include the new category
   - Update the category data in `pages/index.tsx`

### Adding New Policies

1. **Create a policy file:**
   - Add a new markdown file in `content/policies/[category]/`
   - Use this structure:
   ```markdown
   # Policy Title
   
   ## Overview
   Brief overview of the policy...
   
   ## Details
   Detailed policy information...
   
   ## Requirements
   - Requirement 1
   - Requirement 2
   ```

2. **File naming convention:**
   - Use lowercase with hyphens: `vacation-policy.md`
   - The filename becomes the URL slug

### Content Guidelines

- **Use clear, descriptive headings** (H1 for title, H2 for sections)
- **Include an overview section** for each policy
- **Use bullet points** for lists and requirements
- **Keep paragraphs concise** and easy to read
- **Use bold text** for important terms or requirements

## 🎨 Customization

### Styling

The project uses a design system approach with SCSS:

- **Design Variables**: Modify `styles/_variables.scss` for:
  - Colors and themes
  - Typography settings
  - Spacing and layout
  - Breakpoints

- **Global Styles**: Update `styles/globals.scss` for:
  - Layout and base styles
  - Typography rules
  - Utility classes

- **Component Styles**: Individual stylesheets in `styles/components/`

### Branding

1. **Logo and Icons:**
   - Replace `public/assets/logo.svg` with your company logo
   - Replace `public/assets/icon.svg` with your favicon

2. **Colors and Theme:**
   - Update color variables in `styles/_variables.scss`
   - Modify the primary and secondary color scheme

3. **Site Information:**
   - Update site title and metadata in page components
   - Modify company information in content files

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production version |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript type checking |

## 🔧 Technologies Used

- **[Next.js 14](https://nextjs.org/)** - React framework with SSG/SSR
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[SCSS](https://sass-lang.com/)** - CSS preprocessor
- **[Remark](https://remark.js.org/)** - Markdown processing with GitHub Flavored Markdown
- **Modern Build Tools** - Optimized bundling and development experience

## 🌐 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🚀 Deployment

The site is configured for static export and can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes:**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📋 Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Ensure all components are accessible
- Test responsive design on multiple devices
- Keep content organized and up-to-date

## 📞 Support

For support or questions about this employee handbook site:
- **IT Department**: [it@yourcompany.com](mailto:it@yourcompany.com)
- **HR Department**: [hr@yourcompany.com](mailto:hr@yourcompany.com)
- **Technical Issues**: Create an issue in this repository

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for modern employee experience**