import RootLayoutBodyHeader from './Header/Header.index';

export default function RootLayoutBody({ children }) {
    return (
        <div className='flex flex-col w-full h-full gap-3 overflow-hidden overflow-y-scroll'>
            <div>
                <RootLayoutBodyHeader />
            </div>
            <div
                className={`w-full min-h-full h-max bg-white lg:rounded-tl-3xl `}
            >
                {children}
            </div>
        </div>
    );
}
