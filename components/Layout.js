// import Footer from "./Footer";
import Config from './Config'
 
const Layout = ({ children, story }) => ( 
  <>
    <Config blok={story.content} />
    {children}
  </>
);
 
export default Layout;