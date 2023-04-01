import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";

export default function ResultsPageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body >
          <div className="main-wrapper flex flex-col min-h-screen">
            <TopMenu />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    );
  }