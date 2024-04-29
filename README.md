# Next.js Project Documentation

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Overview

This project is a web application developed using Next.js. The application provides services related to event planning, including decoration packages, client testimonials, and subscription management.

## File Structure

The project follows a structured file organization for better maintainability and scalability:

- **Components**: Reusable React components used throughout the application.
- **Constants**: Files containing constants such as navigation items, included features, reviews, and services offered.
- **Lib**: Contains utility functions and actions used by the application, including functions to interact with the server and database.
- **Styles**: Global stylesheets and utility classes using Tailwind CSS.
- **Store**: Contains context providers and custom hooks for managing application state.

## Key Components

### Header.js

- Defines the navigation links displayed in the application header.

### Footer.js

- Displays footer information such as copyright.

### HeroSection.js

- Renders the hero section of the landing page with a background image and call-to-action buttons.

### Pricing.js

- Displays information about decoration packages and their pricing.

### Review.js

- Shows client testimonials with their comments and avatars.

### Services.js

- Lists the different services offered by the business with accompanying images.

### ChooseUs.js

- Displays reasons to choose business event planning service.

### Subscribe.js

- Manages the subscription form for users to join the mailing list.

### ModalProvider.js

- Provides a context for managing modal state across the application.

### useForm.js

- Handles form validation and submission logic for contact forms.

### useModal.js

- Custom hook to access modal context for showing and hiding modals.

### Contacts.js

- Contains server-side functions to save contact information and subscriptions to the database.

### contacts.db

- SQLite database file to store contact and subscription information.

## Dependencies

Key dependencies used in the project include:

- Next.js: React framework for server-rendered applications.
- Tailwind CSS: Utility-first CSS framework for styling components.
- Better SQLite3: SQLite library for Node.js used for database operations.

## Conclusion

The Next.js project provides a robust foundation for building a scalable and maintainable web application for event planning services. With its server-side rendering capabilities and rich ecosystem, it enables efficient development and deployment of modern web applications.
