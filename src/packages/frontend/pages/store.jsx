import Seo from "components/Seo";
import MainLayout from "components/layouts/MainLayout";

export default function Store() {
    return (
        <div>
            <Seo />
            <MainLayout>
                <div>
                    <h1 className="title">Store</h1>
                </div>
            </MainLayout>
        </div>
    );
}
