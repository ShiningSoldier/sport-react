import {redirect} from "react-router-dom";
import {Row} from "react-bootstrap";
import {StatisticPeriodPicker} from "../components/statistics/statisticPeriodPicker.tsx";
import {StatisticsChartsList} from "../components/statistics/statisticsChartsList.tsx";
import {ReportType} from "../types/reports.ts";
import {StatisticsPeriod} from "../types/statistics.ts";
import axiosInstance from "../axios/axiosInstance.ts";
import {useEffect, useState} from "react";

export const Statistics = () => {
    const [period, setPeriod] = useState<StatisticsPeriod>("week")
    const [statisticsData, setStatisticsData] = useState<ReportType[]>([])
    useEffect(() => {
        console.log(period)
        axiosInstance.get(`/statistics/${period}`)
            .then(response => {
                setStatisticsData(response.data)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    redirect("/login")
                }
            })
    }, [period])

    return (
        <>
            <Row className={"mb-3"}>
                <StatisticPeriodPicker setPeriod={setPeriod} />
            </Row>
            <Row>
                <h1>Statistics</h1>
                {statisticsData.length > 0 ? <StatisticsChartsList statisticsData={statisticsData} /> : <p>No data for this period</p>}
            </Row>
        </>
    )
}