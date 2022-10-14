import RootLayout from 'components/layouts/RootLayout';

export default function ServicesScreen() {
    return (
        <div className='p-4'>
            <h1 className='text-4xl font-bold'>Services</h1>
        </div>
    );
}

ServicesScreen.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
