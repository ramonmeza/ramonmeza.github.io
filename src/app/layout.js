import "./globals.css"

export const metadata = {
  title: "Ramon Meza | Computer Scientist, Musician, Artist",
  description: "Hi! I'm Ramon Meza and this is a site where I share my hobbies and projects!",
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