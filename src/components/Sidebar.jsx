import { AiOutlineUser } from "react-icons/ai"; 
import { MdOutlineFastfood } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${
      isActive
        ? "text-black bg-white font-extrabold"
        : "text-gray-600 hover:text-white hover:bg-purple-700 hover:font-extrabold"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-gradient-to-b p-10 shadow-lg" // Assuming bg-gradient-to-b provides the desired background
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins text-[48px] text-white">
          <MdOutlineFastfood className="" />
          Sedap{" "}
          <b
            id="logo-dot"
            className="text-hijau" // Assuming 'text-hijau' is defined in your Tailwind config or CSS
          >
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* {List Menu} */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/users" className={menuClass}>
            <AiOutlineUser className="mr-4 text-xl" />
              User
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/orders" className={menuClass}>
              <AiOutlineShoppingCart className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/customers" className={menuClass}>
              <BsFillPersonFill className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-error400" to="/error/400" className={menuClass}>
              <span className="mr-4 text-xl">400</span>
              Error 400
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-error401" to="/error/401" className={menuClass}>
              <span className="mr-4 text-xl">401</span>
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-error403" to="/error/403" className={menuClass}>
              <span className="mr-4 text-xl">403</span>
              Error 403
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-white px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-black text-sm mr-4">
            {" "}
            {/* Added margin for spacing */}
            <span>Please organize your menus through button below!</span>
            {/* Consider making this button functional or removing if just placeholder */}
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-gray-200 rounded-md space-x-2 cursor-pointer hover:bg-gray-300"
            >
              {" "}
              {/* Adjusted styling */}
              <span
                id="add-menu-button.span"
                className="text-gray-600 flex items-center font-medium"
              >
                Add Menus
              </span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 h-20 rounded-full object-cover" // Added h-20 and object-cover
            src="https://avatar.iran.liara.run/public/28"
            alt="User Avatar" // Added alt text
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
