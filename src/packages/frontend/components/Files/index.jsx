import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import FilesStyle from "./Files.style";
import File from "./File";

function Files() {
    return (
        <FilesStyle>
            <button className="p-2 px-4 mb-5 flex items-center font-medium rounded-lg bg-yellow-100 text-yellow-500 border-2 border-yellow-500">
                Add File <PlusIcon height={16} width={16} />
            </button>
            <div className="file-list h-auto w-full ">
                <File />
                <File />
                <File />
            </div>
        </FilesStyle>
    );
}

export default Files;
