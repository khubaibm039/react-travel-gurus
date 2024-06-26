import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navLink = (
        <>
            <li>
                <NavLink to={"/"}>NEWS</NavLink>{" "}
            </li>
            <li>
                <NavLink to={"/destination"}>DESTINATION</NavLink>
            </li>
            <li>
                <NavLink to={"/blog"}>BLOG</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>CONTACT</NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLink}
                        </ul>
                    </div>

                    <img className="btn btn-ghost text-xl" src={logo} alt="" />
                </div>

                <div className="navbar-end">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{navLink}</ul>
                    </div>{" "}
                    {user ? (
                        <button onClick={handleLogout} className="btn">
                            Logout
                        </button>
                    ) : (
                        <Link to={"/login"} className="btn">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
