import { PlusIcon } from '@heroicons/react/24/outline';
import File from './File';
import FilesStyle from './Files.style';

function Files() {
    return (
        <FilesStyle>
            <button className='flex items-center p-2 px-4 mb-5 font-medium text-white rounded-lg background'>
                Add File <PlusIcon height={16} width={16} />
            </button>
            <div className='w-full h-auto file-list '>
                <File />
                <File />
                <File />
            </div>
        </FilesStyle>
    );
}

export default Files;
