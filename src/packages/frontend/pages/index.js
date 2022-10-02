import Seo from "components/Seo";
import MainLayout from "components/layouts/MainLayout";
import Dashboard from "components/Dashboard";

export default function Home() {
    return (
        <div>
            <Seo />
            <MainLayout>
                <div>
                    <h1 className="title ">Dashboard</h1>
                    <Dashboard />
                </div>
            </MainLayout>
        </div>
    );
}
