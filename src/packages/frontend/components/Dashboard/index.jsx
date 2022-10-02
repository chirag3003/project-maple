import React from "react";
import DashboardStyle from "./Dashboard.style";

function Dashboard() {
    return (
        <DashboardStyle>
            <div className="row ">
                <div className="w-1/2 pr-5">
                    <div className="card w-full shadow h-full min-h-min"></div>
                </div>
                <div className="w-1/2 pr-5 ">
                    <div className="card h-20 w-full shadow"></div>
                </div>
            </div>
            <div className="row ">
                <div className="w-1/2 pr-5">
                    <div className="card w-full shadow h-full min-h-min"></div>
                </div>
                <div className="w-1/2 pr-5 ">
                    <div className="card h-20 w-full shadow"></div>
                </div>
            </div>
        </DashboardStyle>
    );
}

export default Dashboard;
