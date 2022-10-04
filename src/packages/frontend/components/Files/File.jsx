import React from "react";
import { File as FileIcon, Menu as MenuIcon } from "react-feather";

function File() {
    return (
        <div className="file w-full my-1 p-3 px-6 bg-white shadow rounded-xl flex items-center">
            <div className="icon p-2  border-2 rounded-lg text-cyan-400 bg-cyan-50 border-cyan-400">
                <FileIcon />
            </div>
            <div className="file-name flex-1 px-4">
                <p className=" text-md">File Name.pdf</p>
            </div>
            <div className="btns">
                <button className="p-2 bg-gray-50 rounded-lg">
                    {" "}
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}

export default File;
