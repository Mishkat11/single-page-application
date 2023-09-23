import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (<>
<Header></Header>
    <div className="min-h-screen py-10">
    <Outlet></Outlet>
    </div>
     <Footer></Footer>
     </>
    );
};

export default MainLayout;