
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";


import { getBlogName } from "@/lib/requests";



export async function generateMetadata() {
  const data = await getBlogName();

  return {
    title: data.displayTitle || data.title,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getBlogName();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={data.favicon || "/favicon.ico"} />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <NewsletterCard />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}