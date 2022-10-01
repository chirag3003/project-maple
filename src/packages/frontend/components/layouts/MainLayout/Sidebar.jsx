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
                    <li className="item">
                        <button>
                            <Squares2X2Icon className="h-8 w-8 mr-4" />
                            Dashboard
                        </button>
                    </li>
                    <li className="item">
                        <button>
                            <CircleStackIcon className="h-8 w-8 mr-4" />
                            Store
                        </button>
                    </li>
                    <li className="item">
                        <button>
                            <PlusCircleIcon className="h-8 w-8 mr-4" />
                            Create
                        </button>
                    </li>
                    <li className="item">
                        <button>
                            <ClipboardDocumentIcon className="h-8 w-8 mr-4" />
                            Logs
                        </button>
                    </li>
                    <li className="item">
                        <button>
                            <Cog8ToothIcon className="h-8 w-8 mr-4" />
                            Services
                        </button>
                    </li>
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
