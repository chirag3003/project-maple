import Seo from "components/Seo";
import MainLayout from "components/layouts/MainLayout";
import Files from "components/Files";

export default function Store() {
    return (
        <div>
            <Seo />
            <MainLayout>
                <div>
                    <h1 className="title">My Files</h1>
                    <Files />
                </div>
            </MainLayout>
        </div>
    );
}
