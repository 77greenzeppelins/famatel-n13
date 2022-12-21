/**Components*/
import Head from './head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /**JSX*/
  return (
    <html>
      <head>
        <Head />
      </head>
      <body>{children}</body>
    </html>
  );
}
