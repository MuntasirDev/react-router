import { Outlet, Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer></Footer>

    </div>
  );
}
 