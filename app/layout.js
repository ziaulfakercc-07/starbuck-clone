import './globals.css';

export const metadata = {
  title: 'Starbucks Coffee Company',
  description: 'Inspiring and nurturing the human spirit — one person, one cup and one neighborhood at a time.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
