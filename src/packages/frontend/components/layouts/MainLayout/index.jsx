import React from "react";
import MainLayoutStyle from "./MainLayout.style";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
    return (
        <MainLayoutStyle className="w-full flex h-screen ">
            <Sidebar />
            <div className="w-4/5 h-full py-6 px-4">
                <div className="main-card shadow-2xl">
                    <main className="w-3/4 h-full p-10 pt-14 overflow-y-auto ">{children}</main>
                    <Profile />
                </div>
            </div>
        </MainLayoutStyle>
    );
}

export default MainLayout;
