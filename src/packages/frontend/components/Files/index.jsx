import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import FilesStyle from "./Files.style";
import File from "./File";

function Files() {
    return (
        <FilesStyle className="z-10 relative">
            <button className="add-button p-2 px-4 mb-5 flex items-center font-medium rounded-lg text-white">
                Add File &nbsp; <PlusIcon height={20} width={20} />
            </button>
            <div className="file-list h-auto w-full">
                <File />
                <File />
                <File />
            </div>
        </FilesStyle>
    );
}

export default Files;
