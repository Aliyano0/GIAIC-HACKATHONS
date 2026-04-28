# Timeless Timber - E-Commerce Furniture Marketplace

A modern, full-stack e-commerce platform for furniture built for the GIAIC Marketplace Hackathon. This application provides a seamless shopping experience with product browsing, cart management, user authentication, and content management capabilities.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-Private-red)

## Table of Contents

- [Features](#features)
  - [Customer Features](#customer-features)
  - [Admin Features](#admin-features)
  - [Technical Features](#technical-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Accessing Sanity Studio](#accessing-sanity-studio)
- [Available Scripts](#available-scripts)
- [Data Models](#data-models)
- [Key Features Implementation](#key-features-implementation)
- [Component Architecture](#component-architecture)
- [API Routes](#api-routes)
- [Routing Structure](#routing-structure)
- [State Management Patterns](#state-management-patterns)
- [Performance Optimizations](#performance-optimizations)
- [SEO Optimization](#seo-optimization)
- [Code Style & Conventions](#code-style--conventions)
- [Security Considerations](#security-considerations)
- [Data Import](#data-import)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)
- [Git Workflow](#git-workflow)
- [Monitoring & Analytics](#monitoring--analytics)
- [Future Enhancements](#future-enhancements)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Support](#support)

## Features

### Customer Features
- **Product Catalog**: Browse furniture across multiple categories (Sofas, Beds, Chairs, Tables)
- **Product Search & Filtering**: Advanced search and filter options by category, price, and ratings
- **Product Details**: Detailed product pages with image galleries, descriptions, pricing, and customer reviews
- **Shopping Cart**: Full cart functionality with quantity management and persistent storage
- **User Authentication**: Secure sign-in/sign-up with Clerk authentication
- **Responsive Design**: Fully responsive UI optimized for all device sizes
- **Customer Reviews**: View product ratings and testimonials

### Admin Features
- **Admin Dashboard**: Role-based access control for administrators
- **Content Management**: Sanity Studio integration for managing products, orders, and customers
- **Order Management**: Track and manage customer orders with status updates

### Technical Features
- **Server-Side Rendering**: Next.js 15 with App Router for optimal performance
- **Real-time Content**: Sanity CMS integration with live preview capabilities
- **State Management**: Zustand for efficient client-side state management
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Tailwind CSS with custom design system and Radix UI components

## Tech Stack

### Frontend
- **Framework**: Next.js 15.3.1
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Radix UI (Accordion, Popover, Slot)
- **Icons**: React Icons, Lucide React
- **State Management**: Zustand 5.0.4

### Backend & CMS
- **CMS**: Sanity 3.99.0
- **Image Handling**: @sanity/image-url
- **API Client**: next-sanity 9.12.2
- **Authentication**: Clerk Next.js 6.10.4

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **Styling**: PostCSS, Tailwind CSS
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Project Structure

```
marketplace-hackathon/
├── src/
│   ├── app/
│   │   ├── (store)/              # Main store routes
│   │   │   ├── Cart/             # Shopping cart page
│   │   │   ├── ProductDetail/    # Product detail pages
│   │   │   │   └── [slug]/       # Dynamic product routes
│   │   │   ├── Shop/             # Shop pages
│   │   │   │   └── [slug]/       # Category-based shop routes
│   │   │   ├── Search/           # Search functionality
│   │   │   ├── admin-dashboard/  # Admin panel
│   │   │   ├── orders/           # Order management
│   │   │   ├── sign-in/          # Authentication pages
│   │   │   ├── components/       # Reusable components
│   │   │   │   ├── Buttons/
│   │   │   │   ├── CartComponents/
│   │   │   │   ├── CategoryComponents/
│   │   │   │   ├── Footer/
│   │   │   │   ├── HomepageComponents/
│   │   │   │   └── ProductsDetails/
│   │   │   ├── fonts/            # Custom fonts
│   │   │   └── types/            # TypeScript types
│   │   ├── api/                  # API routes
│   │   │   └── handler/          # API handlers
│   │   ├── studio/               # Sanity Studio
│   │   │   └── [[...tool]]/      # Studio catch-all route
│   │   ├── fetchHomePage.ts      # Homepage data fetching
│   │   ├── store.ts              # Zustand store configuration
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   └── ui/                   # Shadcn UI components
│   ├── sanity/
│   │   ├── lib/                  # Sanity client & utilities
│   │   ├── schemaTypes/          # Content schemas
│   │   │   ├── product.ts
│   │   │   ├── customers.ts
│   │   │   ├── order.ts
│   │   │   └── reviews.ts
│   │   ├── env.ts                # Sanity environment config
│   │   └── structure.ts          # Studio structure
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   ├── middleware.ts             # Clerk middleware
│   └── utils/
│       └── roles.ts              # Role-based access control
├── scripts/
│   ├── importData.js             # Data import script
│   └── sanityClient.js           # Sanity client for scripts
├── public/                       # Static assets
├── sanity.config.ts              # Sanity configuration
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm, yarn, pnpm, or bun
- Sanity account
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd marketplace-hackathon
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Accessing Sanity Studio

The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio) for content management.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Data Models

### Product Schema
- **id**: Unique product identifier
- **slug**: URL-friendly product identifier
- **name**: Product name
- **imagePath**: Main product image URL
- **imageGallery**: Array of additional product images
- **price**: Product price
- **description**: Detailed product description
- **discountPercentage**: Discount amount (if applicable)
- **isFeaturedProduct**: Boolean for homepage featured products
- **rating**: Product rating (0-5)
- **stockLevel**: Available inventory
- **category**: Product category (Sofa, Bed, Chair, Table)
- **tags**: Array of product tags

### Order Schema
- **orderid**: Unique order identifier
- **customerInfo**: Reference to customer document
- **clerkUserId**: Clerk user identifier
- **stripeCustomerId**: Stripe customer ID
- **stripeCheckoutSessionId**: Stripe session ID
- **stripePaymentIntentId**: Stripe payment intent ID
- **products**: Array of ordered products with quantities
- **totalPrice**: Order total amount
- **discountAmount**: Applied discount
- **orderDate**: Order timestamp
- **orderStatus**: Order status (pending, shipped, delivered, cancelled)

### Customer Schema
Customer information linked to orders and reviews.

### Review Schema
Product reviews and ratings from customers.

## Key Features Implementation

### State Management
The application uses Zustand for state management with persistence:
- **Cart State**: Manages shopping cart items, quantities, and operations
- **Product Quantity**: Tracks product quantities across the application
- **Local Storage**: Cart data persists across sessions

### Authentication & Authorization
- **Clerk Integration**: Handles user authentication and session management
- **Role-Based Access**: Admin dashboard protected by role checks
- **Middleware**: Clerk middleware protects routes and API endpoints

### Content Management
- **Sanity CMS**: Headless CMS for managing all content
- **Live Preview**: Real-time content updates
- **Image Optimization**: Sanity image URL builder for optimized images
- **GROQ Queries**: Efficient data fetching with Sanity's query language

### Responsive Design
- **Custom Breakpoints**: xxs (390px), xs (480px), lg840 (840px), 2xl (1440px)
- **Mobile-First**: Optimized for mobile devices with progressive enhancement
- **Custom Fonts**: Satoshi and Integral CF for brand consistency

## Deployment

### Vercel (Recommended)
The easiest way to deploy this Next.js application is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
Ensure all environment variables are configured in your deployment platform:
- Sanity project credentials
- Clerk authentication keys
- Any additional API keys

## Development Notes

### Custom Fonts
The project uses two custom fonts:
- **Satoshi**: Variable font for body text
- **Integral CF**: Bold font for headings

### Styling Approach
- Tailwind CSS for utility-first styling
- Custom color scheme with CSS variables
- Radix UI for accessible component primitives
- Tailwind Animate for animations

### API Routes
API routes are located in `src/app/api/` and handle server-side operations like data fetching and processing.

## Contributing

This project was created for the GIAIC Marketplace Hackathon. Contributions, issues, and feature requests are welcome.

## License

This project is private and created for educational purposes as part of the GIAIC Marketplace Hackathon.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Content management by [Sanity](https://www.sanity.io)
- Authentication by [Clerk](https://clerk.com)
- UI components from [Radix UI](https://www.radix-ui.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## Component Architecture

### Core Components

#### Navigation & Layout
- **Navbar**: Responsive navigation with mobile hamburger menu, search functionality, cart indicator, and Clerk authentication integration
- **Footer**: Site-wide footer with links and branding
- **Layout**: Root layout with ClerkProvider, custom fonts, and global navigation

#### Product Components
- **ProductCard**: Reusable product card with image, name, price, rating, and discount display
- **ProductList**: Grid layout for displaying multiple products with responsive design
- **ProductThumbnails**: Image gallery component for product detail pages
- **StarRatings**: Visual star rating display component

#### Cart Components
- **CartProductCard**: Individual cart item with quantity controls, price calculation, and remove functionality
- **Cart Page**: Full cart view with order summary, discount calculation, and checkout flow

#### Homepage Components
- **FeaturedProducts**: Showcase of featured products from Sanity CMS
- **BrowseBanner**: Category banners with images and navigation links
- **BrandInfo**: Statistics display (brands, products, customers)
- **Review**: Customer testimonial cards

#### Filter Components
- **ColorCircle**: Color selection filter
- **Size**: Size selection filter
- **Options**: Generic filter options component
- **FilterHeader**: Filter section headers

### UI Components (Shadcn)
- **Accordion**: Collapsible content sections
- **Button**: Reusable button component with variants
- **Popover**: Overlay content component
- **Pagination**: Page navigation component
- **Skeleton**: Loading state placeholders

## Performance Optimizations

### Image Optimization
- Next.js Image component for automatic optimization
- Remote image patterns configured for Unsplash and external sources
- Lazy loading for images below the fold
- Sanity image URL builder for responsive images

### Code Splitting
- Next.js automatic code splitting by route
- Dynamic imports for heavy components
- Route-based lazy loading with App Router

### State Management
- Zustand with persistence for minimal re-renders
- Local storage integration for cart persistence
- Optimized selectors to prevent unnecessary updates

### Caching Strategy
- Server-side rendering for initial page loads
- Static generation for product pages where possible
- Sanity CDN caching for content delivery

## Troubleshooting

### Common Issues

#### Environment Variables Not Loading
**Problem**: Application fails to connect to Sanity or Clerk
**Solution**: 
- Ensure `.env.local` file exists in root directory
- Verify all required environment variables are set
- Restart the development server after adding variables
- Check that variable names match exactly (case-sensitive)

#### Cart Not Persisting
**Problem**: Cart items disappear on page refresh
**Solution**:
- Check browser local storage is enabled
- Clear browser cache and local storage
- Verify Zustand persist middleware is configured correctly

#### Images Not Loading
**Problem**: Product images show broken image icons
**Solution**:
- Verify image URLs in Sanity are accessible
- Check `next.config.ts` has correct remote patterns
- Ensure Sanity image URLs are properly formatted
- Check network tab for CORS or 404 errors

#### Authentication Issues
**Problem**: Sign in/sign up not working
**Solution**:
- Verify Clerk API keys are correct
- Check Clerk dashboard for application status
- Ensure middleware is properly configured
- Clear cookies and try again

#### Build Errors
**Problem**: `npm run build` fails
**Solution**:
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run lint`
- Verify all environment variables are set
- Check Node.js version compatibility (20+)

### Development Tips

1. **Hot Reload Issues**: If changes aren't reflecting, try:
   - Clear `.next` folder: `rm -rf .next`
   - Restart dev server
   - Hard refresh browser (Ctrl+Shift+R)

2. **Sanity Studio Access**: Access at `/studio` route, requires authentication

3. **Type Safety**: Run TypeScript check before committing:
   ```bash
   npx tsc --noEmit
   ```

4. **Debugging**: Use React DevTools and browser console for component debugging

## Data Import

The project includes a data import script for populating Sanity with products:

```bash
node scripts/importData.js
```

This script:
- Fetches products from an external API
- Uploads product images to Sanity
- Creates product documents in Sanity CMS

## Security Considerations

### Authentication
- Clerk handles all authentication securely
- Session management via HTTP-only cookies
- Protected routes with middleware

### Role-Based Access Control
- Admin dashboard protected by role checks
- Utility function `checkRole()` verifies user permissions
- Unauthorized users redirected to `/not-authorised`

### Environment Variables
- Never commit `.env` or `.env.local` files
- Use environment variables for all sensitive data
- Rotate API keys regularly

### Content Security
- Sanity API tokens should be kept secure
- Use read-only tokens for client-side queries
- Write tokens only in server-side code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus management for modals and popovers
- Responsive text sizing
- Color contrast compliance

## API Routes

### Available Endpoints

#### GET `/api/handler`
Fetches specific product data from Sanity CMS.

**Example Response:**
```json
{
  "_id": "product-id",
  "id": "blue-bed",
  "name": "Blue Bed",
  "imagePath": "https://...",
  "price": 299.99,
  "description": "Comfortable blue bed...",
  "category": "Bed",
  "stockLevel": 10,
  "rating": 4.5,
  "isFeaturedProduct": true,
  "discountPercentage": 15
}
```

### Data Fetching Functions

#### `getHomeProducts()`
Fetches products for homepage display (featured products by category).

#### `getHeroImage()`
Retrieves the hero section image for the homepage.

#### `customerReviews`
Static array of customer testimonials displayed on homepage.

## Routing Structure

### Public Routes
- `/` - Homepage with hero, featured products, and categories
- `/Shop` - Main shop page with all products
- `/Shop/[slug]` - Category-specific product listings (e.g., `/Shop/Chair`, `/Shop/Sofa`)
- `/ProductDetail/[slug]` - Individual product detail pages
- `/Search` - Search results page
- `/Cart` - Shopping cart page
- `/sign-in` - Authentication page

### Protected Routes
- `/admin-dashboard` - Admin panel (requires admin role)
- `/orders` - User order history (requires authentication)

### CMS Routes
- `/studio` - Sanity Studio content management interface

## Code Style & Conventions

### TypeScript
- Strict mode enabled
- Explicit type definitions for props and state
- Interface naming: `IComponentName` for interfaces
- Type naming: `TComponentName` for types

### Component Structure
```typescript
// 1. Imports
import React from 'react';
import { ComponentProps } from './types';

// 2. Type definitions
interface IComponentProps {
  prop1: string;
  prop2: number;
}

// 3. Component definition
const Component = ({ prop1, prop2 }: IComponentProps) => {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. Effects
  useEffect(() => {
    // effect logic
  }, []);
  
  // 6. Handlers
  const handleClick = () => {
    // handler logic
  };
  
  // 7. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 8. Export
export default Component;
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Utilities**: camelCase (e.g., `fetchProducts.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **CSS Classes**: kebab-case or Tailwind utilities

### File Organization
- Group related components in feature folders
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks
- Place types in dedicated `types` folders or files

## State Management Patterns

### Zustand Store Structure
```typescript
// Store definition
interface StoreState {
  data: DataType[];
  actions: {
    addItem: (item: DataType) => void;
    removeItem: (id: string) => void;
  };
}

// Usage with selectors
const data = useStore((state) => state.data);
const addItem = useStore((state) => state.actions.addItem);
```

### Local vs Global State
- **Global State (Zustand)**: Cart data, user preferences
- **Local State (useState)**: Form inputs, UI toggles, component-specific data
- **Server State (Sanity)**: Product data, orders, customer information

## SEO Optimization

### Metadata Configuration
Each page includes proper metadata:
```typescript
export const metadata: Metadata = {
  title: "Page Title - Timeless Timber",
  description: "Page description for SEO",
};
```

### Best Practices Implemented
- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Descriptive URLs with slugs
- Open Graph tags for social sharing
- Sitemap generation (can be added)
- Robots.txt configuration (can be added)

## Performance Metrics

### Target Metrics
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Techniques Used
- Image optimization with Next.js Image
- Code splitting by route
- Lazy loading for below-the-fold content
- Minimal JavaScript bundle size
- CSS optimization with Tailwind purge
- Server-side rendering for initial load

## Testing

### Manual Testing Checklist
- [ ] Product browsing and filtering
- [ ] Add to cart functionality
- [ ] Cart quantity updates
- [ ] Cart persistence across sessions
- [ ] Search functionality
- [ ] User authentication flow
- [ ] Responsive design on multiple devices
- [ ] Image loading and optimization
- [ ] Navigation and routing
- [ ] Admin dashboard access control

### Future Testing Implementation
Consider adding:
- Unit tests with Jest
- Component tests with React Testing Library
- E2E tests with Playwright or Cypress
- Visual regression tests

## Git Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches

### Commit Message Convention
```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example:**
```
feat(cart): add promo code functionality

Implemented promo code input and validation in cart page.
Integrated with discount calculation logic.

Closes #123
```

## Environment Setup for Team

### Required Tools
1. **Node.js** (v20+)
2. **npm/yarn/pnpm**
3. **Git**
4. **VS Code** (recommended) with extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - TypeScript and JavaScript Language Features

### Team Onboarding Steps
1. Clone repository
2. Copy `.env.example` to `.env.local`
3. Request environment variables from team lead
4. Run `npm install`
5. Run `npm run dev`
6. Access Sanity Studio at `/studio`
7. Review this README thoroughly

## Monitoring & Analytics

### Recommended Integrations
- **Google Analytics**: Track user behavior and conversions
- **Sentry**: Error tracking and monitoring
- **Vercel Analytics**: Performance monitoring
- **Hotjar**: User session recordings and heatmaps

### Key Metrics to Track
- Conversion rate (visitors to purchases)
- Cart abandonment rate
- Average order value
- Product page views
- Search queries
- User session duration

## Future Enhancements

Potential features for future development:
- Payment integration (Stripe/PayPal)
- Order tracking system
- Product reviews and ratings submission
- Wishlist functionality
- Advanced filtering and sorting
- Product comparison feature
- Email notifications
- Multi-language support
- Dark mode theme
- Progressive Web App (PWA) capabilities
- Inventory management system
- Customer support chat
- Product recommendations engine
- Social media integration
- Newsletter subscription

## FAQ

### General Questions

**Q: What is Timeless Timber?**  
A: Timeless Timber is a full-stack e-commerce platform for furniture, built with Next.js 15, React 19, and Sanity CMS. It was created for the GIAIC Marketplace Hackathon.

**Q: Is this project open source?**  
A: This project is currently private and was created for educational purposes as part of the GIAIC Marketplace Hackathon.

**Q: Can I use this project as a template for my own e-commerce site?**  
A: Yes, you can use this as a learning resource or template. Make sure to configure your own Sanity and Clerk accounts.

### Technical Questions

**Q: Why Next.js 15 and React 19?**  
A: Next.js 15 provides the latest App Router features, improved performance, and better developer experience. React 19 offers enhanced concurrent features and improved server components.

**Q: Why Zustand instead of Redux?**  
A: Zustand is lightweight, has a simpler API, requires less boilerplate, and is perfect for this project's state management needs. It also has built-in persistence support.

**Q: Why Sanity CMS?**  
A: Sanity provides a flexible, real-time content platform with excellent developer experience, powerful querying with GROQ, and seamless Next.js integration.

**Q: Can I use a different authentication provider?**  
A: Yes, but you'll need to replace Clerk with your chosen provider (Auth0, NextAuth, etc.) and update the middleware and protected routes accordingly.

**Q: Does this support payment processing?**  
A: The order schema includes Stripe fields (customer ID, payment intent ID), but payment integration is not fully implemented. This is listed as a future enhancement.

**Q: How do I add new product categories?**  
A: Add products with the new category name in Sanity Studio, then create corresponding routes in `/Shop/[slug]` if needed.

**Q: Can I deploy this to platforms other than Vercel?**  
A: Yes, you can deploy to any platform that supports Next.js (Netlify, AWS, Railway, etc.), but Vercel offers the best integration with Next.js.

### Development Questions

**Q: How do I add a new page?**  
A: Create a new folder in `src/app/(store)/` with a `page.tsx` file. Next.js will automatically create the route.

**Q: How do I modify the Sanity schema?**  
A: Edit the schema files in `src/sanity/schemaTypes/`, then restart your dev server. Changes will reflect in Sanity Studio.

**Q: Why are my changes not showing up?**  
A: Try clearing the `.next` folder, restarting the dev server, and hard refreshing your browser (Ctrl+Shift+R).

**Q: How do I add custom fonts?**  
A: Place font files in `src/app/(store)/fonts/`, import them in `layout.tsx` using `next/font/local`, and add them to your Tailwind config.

**Q: Can I use this with a different database?**  
A: The project is built around Sanity CMS. Switching to a different database would require significant refactoring of data fetching and schema definitions.

### Deployment Questions

**Q: What environment variables are required for production?**  
A: All Sanity configuration variables (project ID, dataset, API version) and Clerk authentication keys (publishable key, secret key).

**Q: How do I set up Sanity for production?**  
A: Create a production dataset in your Sanity project, update the `NEXT_PUBLIC_SANITY_DATASET` variable, and deploy your schema.

**Q: Do I need to configure CORS for Sanity?**  
A: Yes, add your production domain to the CORS origins in your Sanity project settings.

**Q: How do I handle image optimization in production?**  
A: Next.js automatically optimizes images. Ensure your `next.config.ts` includes all remote image domains you're using.

### Troubleshooting Questions

**Q: Why am I getting "Module not found" errors?**  
A: Run `npm install` to ensure all dependencies are installed. Check that import paths are correct and use absolute imports with `@/` prefix.

**Q: Why is the cart not persisting?**  
A: Check that browser local storage is enabled and not full. Clear local storage and try again.

**Q: Why can't I access the admin dashboard?**  
A: Ensure your user has the "admin" role in Clerk. Check the `checkRole` utility function is working correctly.

**Q: Images are not loading, what should I do?**  
A: Verify the image URLs are accessible, check `next.config.ts` remote patterns, and ensure Sanity image URLs are properly formatted.

## Project Roadmap

### Phase 1: Core Features ✅
- [x] Product catalog and browsing
- [x] Shopping cart functionality
- [x] User authentication
- [x] Responsive design
- [x] Sanity CMS integration
- [x] Admin dashboard structure

### Phase 2: Enhanced Features (In Progress)
- [ ] Payment integration (Stripe)
- [ ] Order management system
- [ ] Email notifications
- [ ] Product reviews submission
- [ ] Advanced search and filters
- [ ] Wishlist functionality

### Phase 3: Advanced Features (Planned)
- [ ] Real-time inventory tracking
- [ ] Customer support chat
- [ ] Product recommendations
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA capabilities
- [ ] Analytics dashboard
- [ ] Social media integration

### Phase 4: Optimization (Planned)
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Automated testing suite
- [ ] CI/CD pipeline
- [ ] Error monitoring
- [ ] A/B testing framework

## Contributing

This project was created for the GIAIC Marketplace Hackathon. Contributions, issues, and feature requests are welcome.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Update documentation for new features
- Test your changes thoroughly before submitting
- Ensure your code passes linting (`npm run lint`)

## License

This project is private and created for educational purposes as part of the GIAIC Marketplace Hackathon.

## Contact & Support

### Project Information
- **Project Name**: Timeless Timber
- **Version**: 0.1.0
- **Created For**: GIAIC Marketplace Hackathon
- **Built With**: Next.js, React, TypeScript, Sanity, Clerk

### Getting Help
- Check the [Troubleshooting](#troubleshooting) section
- Review the [FAQ](#faq) section
- Create an issue in the repository
- Refer to official documentation:
  - [Next.js Docs](https://nextjs.org/docs)
  - [Sanity Docs](https://www.sanity.io/docs)
  - [Clerk Docs](https://clerk.com/docs)
  - [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Content management by [Sanity](https://www.sanity.io)
- Authentication by [Clerk](https://clerk.com)
- UI components from [Radix UI](https://www.radix-ui.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/) and [Lucide React](https://lucide.dev)
- State management with [Zustand](https://zustand-demo.pmnd.rs)
- Fonts: Satoshi and Integral CF

### Special Thanks
- GIAIC for organizing the Marketplace Hackathon
- The Next.js team for an amazing framework
- The open-source community for incredible tools and libraries

---

**Made with ❤️ for the GIAIC Marketplace Hackathon**

*Last Updated: April 2026*
