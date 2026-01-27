import '../styles/globals.css';

export const metadata = {
  title: 'Portfolio - Full Stack Developer',
  description: 'Professional portfolio showcasing modern web development projects and skills.',
  keywords: 'developer, portfolio, web development, React, Next.js, JavaScript',
  authors: [{ name: 'Your Name' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}