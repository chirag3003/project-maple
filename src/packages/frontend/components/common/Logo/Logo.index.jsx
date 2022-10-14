export default function Logo(props) {
    const propsData = {
        classNames: {
            root: props?.classNames?.root || '',
            image: props?.classNames?.image || '',
            text: props?.classNames?.text || '',
        },
        onClicks: {
            root: props?.onClicks?.root || (() => {}),
            image: props?.onClicks?.image || (() => {}),
            text: props?.onClicks?.text || (() => {}),
        },
        isOpen: props?.isOpen,
    };

    return (
        <>
            <div
                onClick={propsData?.onClicks?.root}
                className={`flex cursor-pointer flex-row items-center gap-2 ${propsData?.classNames?.root}`}
            >
                <img
                    onClick={propsData?.onClicks?.image}
                    className={`${propsData?.classNames?.image}  w-12 h-12`}
                    src='/logo.svg'
                    alt='logo'
                />
                <text
                    onClick={propsData?.onClicks?.text}
                    className={`text-2xl ${
                        propsData?.isOpen && 'lg:hidden'
                    } font-bold text-center text-orange-500  ${
                        propsData?.classNames?.text
                    }`}
                >
                    Project maple
                </text>
            </div>
        </>
    );
}
