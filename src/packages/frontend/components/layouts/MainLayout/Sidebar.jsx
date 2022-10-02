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
        <SidebarStyle className="w-1/5 bg-red h-full py-14 flex flex-col">
            <div className="title p-6 xl:pl-8 pl-2 flex items-center">
                <img
                    src="/logo.svg"
                    alt="logo"
                    className="xl:h-14 xl:w-14 lg:h-12 lg:w-12 h-10 w-10 "
                />
                <h1 className="font-bold xl:text-2xl lg:text-xl text-lg ml-5">Project Maple</h1>
            </div>
            <div className="items w-full  xl:px-7 px-3 flex-1 pt-14">
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
                <button className="outline-none border-none flex items-center p-2 w-full text-lg font-medium ">
                    <ArrowRightOnRectangleIcon className="h-8 w-8 mr-4" /> Log Out
                </button>
            </div>
        </SidebarStyle>
    );
}

export default Sidebar;
