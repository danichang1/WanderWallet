import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>  
      <div className="inline">

        {/* navbar at top of every page */}
        <Navbar/>

        {/* page content */}
        <div className="px-5 py-10">
          <Outlet/>
        </div>
        
        {/* footer at bottom of every page */}
        <div className="pt-80">
          <Footer/>
        </div>
      </div>
      
    </>
  );
}

export default Layout;