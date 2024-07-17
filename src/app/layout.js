import "./globals.css"

export const metadata = {
  title: "Ramon Meza",
  description: "My website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}