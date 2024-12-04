# Responsive Typography System

A responsive typography system for React, allowing dynamic font sizing with Tailwind CSS. Easily reusable for various HTML elements like headers, paragraphs, and more, with customizable styles.

## Features
- Dynamic font sizing with `clamp()`
- Reusable `Typography` component for elements like `h1`, `h2`, `p`, etc.
- Customizable via Tailwind CSS classes
- Fully responsive across different screen sizes

## Usage

```tsx
import Typography from './Typography';

const App: React.FC = () => (
  <div className="p-8">
    <Typography variant="h1" className="text-blue-500">
      This is a responsive H1
    </Typography>
    <Typography variant="p" className="text-gray-700">
      This is a responsive paragraph.
    </Typography>
  </div>
);
