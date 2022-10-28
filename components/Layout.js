import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div>
    <Navigation
    />
    {children}
    <Footer />
  </div>
);

export default Layout;
