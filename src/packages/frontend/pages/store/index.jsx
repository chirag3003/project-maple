import Files from 'components/Files';
import RootLayout from 'components/layouts/RootLayout';

export default function StoreScreen() {
    return (
        <div className='p-4'>
            <h1 className='text-4xl font-bold'>My Files</h1>
            <Files />
        </div>
    );
}

StoreScreen.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
