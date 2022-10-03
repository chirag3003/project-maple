import { LineChart } from "@tremor/react";
import React from "react";
import DashboardStyle from "./Dashboard.style";
const chartdata = [
    {
        time: "10:00",
        "Cpu Usage": 1.74,
    },
    {
        time: "12:00",
        "Cpu Usage": 1.93,
    },
    {
        time: "14:00",
        "Cpu Usage": 1.9,
    },
    {
        time: "16:00",
        "Cpu Usage": 1.98,
    },
    {
        time: "18:00",
        "Cpu Usage": 1,
    },
];
const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

function Dashboard() {
    return (
        <DashboardStyle>
            <div className="row ">
                <div className="w-1/2 pr-5">
                    <div className="card w-full shadow h-full min-h-min bg-gradient-to-br from-green-200 to-green-500"></div>
                </div>
                <div className="w-1/2 pr-5 ">
                    <div className="card w-full shadow h-full min-h-min">
                        <LineChart
                            data={chartdata}
                            dataKey="time"
                            categories={["Cpu Usage"]}
                            colors={["green"]}
                            valueFormatter={dataFormatter}
                            yAxisWidth="w-10"
                        />
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="w-1/2 pr-5">
                    <div className="card w-full shadow h-full min-h-min"></div>
                </div>
                <div className="w-1/2 pr-5 ">
                    <div className="card  w-full shadow h-full min-h-min"></div>
                </div>
            </div>
        </DashboardStyle>
    );
}

export default Dashboard;
