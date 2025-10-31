import { Outlet,useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Side from "../SideBar/Side";
import "./Root.css";


const Root = () => {

  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location)

}

export default function Root() {
  return (
    <div className="root-container">
      <Header /> 
      <div className="main-content">
        <Side />
        {isNavigating && <span>Loading...</span>} 
        <Outlet /> 
        <Footer />
      </div>
    </div>
  );
}
