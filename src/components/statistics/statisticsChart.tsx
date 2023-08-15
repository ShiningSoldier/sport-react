import {LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip, ResponsiveContainer} from "recharts";
import {ReportType} from "../../types/reports.ts";

type StatisticsChartProps = {
    title: string,
    dataKey: string,
    data: ReportType[],
}

export const StatisticsChart = ({title, dataKey, data}: StatisticsChartProps) => {
    return (
        <>
            <h2>{title}</h2>
            <ResponsiveContainer aspect={2.5}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}