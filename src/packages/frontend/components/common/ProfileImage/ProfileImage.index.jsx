export default function ProfileImage(props) {
    const propsData = {
        size: props?.size || '50px',
        src: props?.src || 'https://picsum.photos/200/200',
        alt: props?.alt || `${new Date().getTime()}`,
    };

    return (
        <>
            <img
                style={{
                    width: propsData?.size,
                    height: propsData?.size,
                }}
                className={`
                aspect-square rounded-full
            `}
                src={propsData?.src}
                alt={propsData?.alt}
            />
        </>
    );
}
