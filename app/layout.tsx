export const metadata = { title: "The IRIS — Charlottetown" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0}}>{children}</body>
    </html>
  );
}
