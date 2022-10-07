import React from "react";
import MainLayoutStyle from "./MainLayout.style";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
    return (
        <MainLayoutStyle className="w-full flex h-screen">
            <Sidebar />
            <div className="w-full pl-96 flex-col">
                <div className="text-2xl font-regular pt-14 pb-10">Welcome, Chirag Bhalotia</div>
                <div className="main-card rounded-tl-3xl shadow-xl w-full">
                    <main className="w-full pl-12 overflow-y-auto">{children}</main>
                    {/* <Profile /> */}
                </div>
            </div>
        </MainLayoutStyle>
    );
}

export default MainLayout;
