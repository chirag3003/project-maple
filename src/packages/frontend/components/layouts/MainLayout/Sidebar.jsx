import React from "react";
import {
    Squares2X2Icon,
    CircleStackIcon,
    PlusCircleIcon,
    Cog8ToothIcon,
    ClipboardDocumentIcon,
    ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import SidebarStyle from "./Sidebar.style";
import Link from "next/link";

const sidebarList = [
    {
        title: "Dashboard",
        route: "/",
        icon: Squares2X2Icon,
    },
    {
        title: "Store",
        route: "/store",
        icon: CircleStackIcon,
    },
    {
        title: "Create",
        route: "/create",
        icon: PlusCircleIcon,
    },
    {
        title: "Logs",
        route: "/logs",
        icon: ClipboardDocumentIcon,
    },
    {
        title: "Services",
        route: "/services",
        icon: Cog8ToothIcon,
    },
];

function Sidebar() {
    return (
        <SidebarStyle className="w-72 rounded-r-3xl h-full pt-8 flex flex-col bg-white shadow-xl fixed">
            <div className="title p-6 flex flex-col items-center ">
                <img
                    src="/logo.svg"
                    alt="logo"
                    className="xl:h-14 xl:w-14 lg:h-12 lg:w-12 h-10 w-10"
                />
                <h1 className="font-semibold xl:text-2xl lg:text-xl text-lg text-orange-500 pt-4" >Project Maple</h1>
            </div>
            <div className="items w-full xl:px-7 px-3 flex-1 pt-14 font-regular text-gray-400">
                <ul className="items">
                    {sidebarList.map((item, index) => (
                        <li key={index} className="item">
                            <Link href={item.route}>
                                <button>
                                    <item.icon className="h-8 w-8 mr-4" />
                                    {item.title}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="logout xl:px-7 px-3 item mb-10">
                <button className="outline-none border-none flex items-center mb-5 w-full text-lg font-regular text-orange-500">
                    <ArrowRightOnRectangleIcon className="h-8 w-8 mr-4" /> Log Out
                </button>
            </div>
        </SidebarStyle>
    );
}

export default Sidebar;
