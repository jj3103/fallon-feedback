import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from 'react'
import Footer from "./Footer";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden bg-white dark:bg-gray-900">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout