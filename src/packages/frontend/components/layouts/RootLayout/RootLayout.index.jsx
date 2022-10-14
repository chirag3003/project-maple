import React from 'react';
import RootLayoutBody from './Body/Body.index';
import RootLayoutSidebar from './Sidebar/Sidebar.index';

export default function RootLayout({ children }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className='relative flex flex-col w-screen h-screen lg:flex-row '>
            <div
                className={`  w-full  ${isOpen ? 'lg:w-[90px]' : ' lg:w-1/6 '}`}
            >
                <RootLayoutSidebar
                    data={{
                        isOpen,
                        setIsOpen,
                    }}
                />
            </div>
            <div
                className={`w-full overflow-hidden  ${
                    !isOpen && ' lg:w-5/6 lg:h-full'
                }`}
            >
                <RootLayoutBody children={children} />
            </div>
        </div>
    );
}
