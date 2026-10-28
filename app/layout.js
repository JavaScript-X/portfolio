import Navbar from "./components/navbar-fixed";
import Footer from "./components/footer";
import { SiteProvider } from "./components/site-provider";
import "./css/globals.scss";
import "./css/portfolio-v2.scss";

export const metadata = {
  metadataBase: new URL("https://www.taharchtioui.com"),
  title: "Tahar Chtioui | Développeur full stack et cybersécurité",
  description: "Portfolio of Tahar Chtioui: full-stack development, cybersecurity, self-hosted products and native systems experiments.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: { title: "Tahar Chtioui | Développeur et élève ingénieur", description: "Produits full stack, recherche en sécurité et systèmes atypiques.", type: "website" },
};

export default function RootLayout({ children }) {
  return <html lang="fr" data-theme="dark" suppressHydrationWarning><body><SiteProvider><Navbar /><main>{children}</main><Footer /></SiteProvider></body></html>;
}
