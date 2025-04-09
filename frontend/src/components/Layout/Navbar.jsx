import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) =>
        location.pathname === path ? "text-blue-600 dark:text-blue-400 font-semibold" : "";

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4 fixed top-0 z-50 w-full">
            <div className="flex justify-between items-center relative">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">Feedback App</h1>

                <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-gray-300">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="hidden md:flex space-x-4">
                    <Link to="/" className={`hover:text-blue-500 dark:text-gray-300 ${isActive("/")}`}>
                        Submit Feedback
                    </Link>
                    <Link to="/admin" className={`hover:text-blue-500 dark:text-gray-300 ${isActive("/admin")}`}>
                        Admin View
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
            {menuOpen && (
                <div className="absolute top-16 right-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg px-4 py-3 space-y-2 w-48 transition-all duration-300 z-40 overflow-hidden">
                    <Link
                        to="/"
                        onClick={toggleMenu}
                        className={`block hover:text-blue-500 dark:text-gray-300 ${isActive("/")}`}
                    >
                        Submit Feedback
                    </Link>
                    <Link
                        to="/admin"
                        onClick={toggleMenu}
                        className={`block hover:text-blue-500 dark:text-gray-300 ${isActive("/admin")}`}
                    >
                        Admin View
                    </Link>
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;