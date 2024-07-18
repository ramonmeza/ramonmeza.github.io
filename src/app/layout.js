import "./globals.css"

export const metadata = {
  title: "Ramon Meza",
  description: "My website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950">
        {children}
      </body>
    </html>
  );
}