import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart]=useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">      
        <Link to="/" className="navbar-brand">
          🔛OniShop
        </Link>
        <SearchInput />
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-secondary ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              
              {!auth?.user ? (
                <>
                  {/* #1 */}
                  <li className="nav-item dropdown">
                  <li
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      user
                  </li>
                  <ul className="dropdown-menu" >
                    <li>
                    <NavLink to="/login" className="dropdown-item">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="dropdown-item">
                      Register
                    </NavLink>
                  </li>
                  </ul>
                </li>
                  {/* 2 */}
                  {/* <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li> */}
                </>
              ) : (
                <>
                <li className="nav-item dropdown">
                  <li
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                  </li>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                    </li>
                    {!auth?.user?.role ? (
                        <>
                          <li>
                          <NavLink
                            to="/dashboard/user/profile"
                            className=" dropdown-item"
                          >
                          My Profile
                          </NavLink>
                        </li>
                        <li>
                        <NavLink
                          to="/dashboard/user/orders"
                          className="dropdown-item"
                        >
                          Orders
                        </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="dropdown-item"
                          >
                            Logout
                          </NavLink>
                        </li>
                        </>
                    ):(
                      <>
                      <li>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                      </li>
                      </>
                      
                    )}
                    {/* <li>
                      <NavLink
                        to="/dashboard/user/profile"
                        className=" dropdown-item"
                      >
                      Profile
                      </NavLink>
                    </li>
                    <li>
                    <NavLink
                      to="/dashboard/user/orders"
                      className="dropdown-item"
                    >
                      Orders
                    </NavLink>
                    </li> */}
                    {/* <li>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </li> */}
                  </ul>
                </li>
                </>
              )}
              {!auth?.user?.role ? (
              <>
                 <li className="nav-item">
                  <Badge count={cart?.length} showZero>
                    <NavLink to="/cart" className="nav-link">
                      Cart 🛍️
                    </NavLink>
                  </Badge>
              </li>
              </>
              ):(
                <>
                  
                </>
              )}
              {/* <li className="nav-item">
                  <Badge count={cart?.length} showZero>
                    <NavLink to="/cart" className="nav-link">
                      Cart 🛍️
                    </NavLink>
                  </Badge>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;