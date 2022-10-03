import { LineChart } from "@tremor/react";
import React from "react";
import DashboardStyle from "./Dashboard.style";
const cpuData = [
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

const ramData = [
    {
        time: "10:00",
        "Ram Usage": 1.74,
    },
    {
        time: "12:00",
        "Ram Usage": 1.93,
    },
    {
        time: "14:00",
        "Ram Usage": 1.9,
    },
    {
        time: "16:00",
        "Ram Usage": 1.98,
    },
    {
        time: "18:00",
        "Ram Usage": 1,
    },
];
const dataFormatter = (number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

function Dashboard() {
    return (
        <DashboardStyle>
            <div className="row ">
                <div className="w-1/2 pr-5">
                    <div className="card w-full shadow h-full min-h-min ">
                        <div className="name">
                            <h2 className="text-2xl font-bold">Chirag{"'"}s Server</h2>
                            <ul className="mt-2 text-xl stats-list font-medium">
                                <li>
                                    <span>OS version: </span> <span>Ubuntu 20.2</span>{" "}
                                </li>
                                <li>
                                    <span>Maple Version:</span>
                                    <span>20.2</span>
                                </li>
                                <li>
                                    <span>CPU Usage:</span>
                                    <span> 20.2%</span>
                                </li>
                                <li>
                                    <span>RAM Usage: </span>
                                    <span>12%</span>
                                </li>
                                <li>
                                    <span>Storage Usage:</span>
                                    <span> 43% </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="w-1/2 pr-5 ">
                    <div className="card w-full shadow h-full min-h-min">
                        <LineChart
                            data={cpuData}
                            dataKey="time"
                            categories={["Cpu Usage"]}
                            colors={["green"]}
                            valueFormatter={dataFormatter}
                            yAxisWidth="w-10"
                        />
                    </div>
                </div> */}
            </div>
            {/* <div className="row ">
                <div className="w-1/2 pr-5">
                    <div className="card w-full shadow h-full min-h-min">
                        <LineChart
                            data={ramData}
                            dataKey="time"
                            categories={["Ram Usage"]}
                            colors={["blue"]}
                            valueFormatter={dataFormatter}
                            yAxisWidth="w-10"
                        />
                    </div>
                </div>
                <div className="w-1/2 pr-5 ">
                    <div className="card  w-full shadow h-full min-h-min"></div>
                </div>
            </div> */}
        </DashboardStyle>
    );
}

export default Dashboard;
