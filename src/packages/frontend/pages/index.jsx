import Dashboard from 'components/Dashboard';
import RootLayout from 'components/layouts/RootLayout';

export default function HomeScreen() {
    return (
        <div className='p-4'>
            <h1 className='text-4xl font-bold'>Dashboard</h1>
            {/* {[...Array(100)].map((_, i) => (
                <Dashboard />
                ))} */}
            <Dashboard />
        </div>
    );
}

HomeScreen.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
