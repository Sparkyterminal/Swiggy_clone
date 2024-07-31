import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-400 shadow-lg m-2 rounded-md">
      <div className="logocontainer">
        <img className="w-15 rounded-md" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-6 gap-10">
          <li className="flex">
            Online Status: {onlineStatus === true ? <p>✅</p> : <p>🔴</p>}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn border border-solid border-gray-400 px-1 py-1 bg-white rounded-lg"
            onClick={() =>
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login")
            }
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
