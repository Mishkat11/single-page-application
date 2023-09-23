import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between shadow-lg py-5 px-8">
          <div>
          <h1 className="text-xl font-semibold">Amajhon</h1>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <NavLink  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline bg-green-400" : ""
  }>HOMe</NavLink>
              </li>
              <li>
                <NavLink  to="/products"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline bg-green-400" : ""
  }>Products</NavLink>
              </li>
              <li>
                <NavLink  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline bg-green-400" : ""
  }>DashBoard</NavLink>
              </li>
            </ul>
          </div>
        </div>
    );
};

export default Header;