import React from "react";
import { File as FileIcon, Menu as MenuIcon } from "react-feather";

function File() {
    return (
        <div className="file w-full my-1 p-3 px-6 bg-white drop-shadow-md rounded-xl flex items-center">
            <div className="icon p-2  border-2 rounded-lg text-orange-500 bg-orange-50 border-orange-500">
                <FileIcon />
            </div>
            <div className="file-name flex-1 px-4">
                <p className=" text-md">File Name.pdf</p>
            </div>
            <div className="btns text-gray-400">
                <button className="p-2 rounded-lg">
                    {" "}
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}

export default File;
