import RootLayout from 'components/layouts/RootLayout';

export default function CreateScreen() {
    return (
        <div className='p-4'>
            <h1 className='text-4xl font-bold'>Create</h1>
        </div>
    );
}

CreateScreen.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
