import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="font-sans bg-blue-400">{children}</body>
    </html>
  );
}
