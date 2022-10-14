import PasteBin from 'components/PasteBin/PasteBin';

import RootLayout from 'components/layouts/RootLayout';

export default function PasteBinScreen() {
    return (
        <div className='p-4'>
            <h1 className='text-4xl font-bold'>Paste Bin</h1>
            <PasteBin />
        </div>
    );
}

PasteBinScreen.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
