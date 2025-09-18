# AI V5 React App

A modern React application built with Vite, Tailwind CSS, and Storybook.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 19](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 📚 [Storybook](https://storybook.js.org/) - Tool for building UI components in isolation
- 🔥 Hot Module Replacement (HMR)
- 📦 Optimized build with Rollup

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:
- Node.js (version 20 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Storybook

To run Storybook for component development:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Datepicker.jsx   # Date picker component
│   └── Datepicker.stories.tsx  # Storybook stories
├── stories/             # Example Storybook stories
├── assets/              # Static assets
├── App.jsx              # Main App component
├── main.jsx             # Application entry point
└── index.css            # Global styles with Tailwind
```

## Components

### Datepicker

Interactive date picker component with:
- Calendar popup
- Month navigation
- Date selection
- Tailwind CSS styling

See Storybook for component documentation and examples.

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Storybook** - Component development environment
- **ESLint** - Code linting

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Storybook Documentation](https://storybook.js.org/)

## License

This project is licensed under the MIT License.
