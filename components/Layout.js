import Footer from "./Footer";
import Config from './Config'

const Layout = ({ children, story }) => ( 
  <div>
    <Config blok={story.content} />
      {children}
    <Footer />
  </div>
);

export default Layout;
