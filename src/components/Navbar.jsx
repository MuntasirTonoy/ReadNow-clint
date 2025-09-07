// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaHome, FaBook, FaUser, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Dummy auth state
  const isLoggedIn = true; // change for testing
  const userRole = "librarian"; // "user" | "admin" | "librarian"

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="drawer">
      {/* Hidden checkbox for drawer */}
      <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Main content */}
      <div className="drawer-content">
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            scrolled ? "bg-base-100 shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2">
                  <GiBookshelf className="text-primary" />
                  ReadNow
                </Link>
              </div>

              {/* Desktop Links */}
              <div className="hidden lg:flex space-x-6 items-center">
                <Link to="/" className="btn btn-ghost btn-sm flex items-center gap-1">
                  <FaHome /> Home
                </Link>
                <Link to="/browse" className="btn btn-ghost btn-sm flex items-center gap-1">
                  <FaBook /> Browse Books
                </Link>
                {isLoggedIn && userRole === "user" && (
                  <Link to="/borrowed" className="btn btn-ghost btn-sm flex items-center gap-1">
                    <FaBook /> Borrowed
                  </Link>
                )}
                {isLoggedIn && userRole === "librarian" && (
                  <Link to="/librarian-dashboard" className="btn btn-ghost btn-sm flex items-center gap-1">
                    <FaTachometerAlt /> Dashboard
                  </Link>
                )}
                {isLoggedIn && userRole === "admin" && (
                  <Link to="/admin-dashboard" className="btn btn-ghost btn-sm flex items-center gap-1">
                    <FaTachometerAlt /> Admin
                  </Link>
                )}
              </div>

              {/* Right: Auth/Profile */}
              <div className="flex items-center">
                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/login"
                      className="btn btn-outline btn-sm mx-1 transition-colors flex items-center gap-1"
                    >
                      <FaUser /> Login
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-primary btn-sm mx-1 transition-colors flex items-center gap-1"
                    >
                      <FaUser /> Register
                    </Link>
                  </>
                ) : (
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img src="/assets/images/user.jpg" alt="User Avatar" className="object-cover" />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
                    >
                      <li>
                        <Link to="/profile">
                          <FaUser /> Profile
                        </Link>
                      </li>
                      {userRole === "user" && (
                        <li>
                          <Link to="/borrowed">
                            <FaBook /> My Borrowed
                          </Link>
                        </li>
                      )}
                      {userRole === "librarian" && (
                        <li>
                          <Link to="/librarian-dashboard">
                            <FaTachometerAlt /> Dashboard
                          </Link>
                        </li>
                      )}
                      {userRole === "admin" && (
                        <li>
                          <Link to="/admin-dashboard">
                            <FaTachometerAlt /> Admin
                          </Link>
                        </li>
                      )}
                      <li>
                        <button className="text-red-500 flex items-center gap-1">
                          <FaSignOutAlt /> Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Mobile Hamburger */}
                <div className="lg:hidden ml-2">
                  <label htmlFor="mobile-drawer" className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Drawer / Sidebar */}
      <div className="drawer-side">
        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
        <ul className="menu py-16 w-64 bg-base-100">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/browse"><FaBook /> Browse</Link></li>
          {isLoggedIn && <li><Link to="/profile"><FaUser /> Profile</Link></li>}
          {isLoggedIn && userRole === "user" && <li><Link to="/borrowed"><FaBook /> Borrowed</Link></li>}
          {isLoggedIn && userRole === "librarian" && <li><Link to="/librarian-dashboard"><FaTachometerAlt /> Dashboard</Link></li>}
          {isLoggedIn && userRole === "admin" && <li><Link to="/admin-dashboard"><FaTachometerAlt /> Admin</Link></li>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
