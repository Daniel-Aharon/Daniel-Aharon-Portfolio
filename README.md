# Daniel Aharon - DevOps Portfolio

A modern, responsive portfolio website showcasing DevOps expertise and professional projects. Built with React, TypeScript, and deployed on AWS.

## 🌐 Live Site

**[danielaharon.site](https://danielaharon.site)**

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Automated Deployment**: CI/CD pipeline with GitHub Actions
- **CDN Delivery**: Global content delivery via CloudFront

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Deployment**: AWS S3, CloudFront, GitHub Actions
- **Domain**: Custom domain with SSL certificate

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Project portfolio
│   ├── Certificates.tsx # Professional certifications
│   ├── Contact.tsx     # Contact form
│   ├── Navigation.tsx  # Navigation menu
│   └── Footer.tsx      # Footer section
├── pages/              # Page components
└── index.css           # Global styles

.github/workflows/      # GitHub Actions deployment
public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Daniel-Aharon/Daniel-Aharon-Portfolio.git
   cd Daniel-Aharon-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Deployment

The project uses GitHub Actions for automated deployment:

1. **Push to main branch**
2. **GitHub Actions automatically:**
   - Installs dependencies
   - Builds the project
   - Deploys to S3
   - Invalidates CloudFront cache

### Required GitHub Secrets

- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
- `AWS_REGION` - Your AWS region
- `S3_BUCKET_NAME` - Your S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID` - Your CloudFront distribution ID

## 🎨 Design

- **Color Palette**: DevOps-themed colors (blue, cyan, purple, orange)
- **Typography**: Classical serif fonts for professional appearance
- **Animations**: Smooth scroll animations and hover effects
- **Responsive**: Mobile-first design approach

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 👨‍💻 Author

**Daniel Aharon**
- **Email**: danielaharon53@gmail.com
- **LinkedIn**: [Daniel Aharon](https://linkedin.com/in/daniel-aharon5)
- **GitHub**: [@Daniel-Aharon](https://github.com/Daniel-Aharon)

## 📄 License

This project is licensed under the MIT License.

---

Built with React, TypeScript, and Tailwind CSS
