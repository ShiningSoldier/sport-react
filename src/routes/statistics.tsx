import {Row} from "react-bootstrap";
import {StatisticPeriodPicker} from "../components/statistics/statisticPeriodPicker.tsx";
import {StatisticsChartsList} from "../components/statistics/statisticsChartsList.tsx";
import {ReportType} from "../types/reports.ts";
import {StatisticsPeriod} from "../types/statistics.ts";
import axiosInstance from "../axios/axiosInstance.ts";
import {useEffect, useState} from "react";
import {useError} from "../hooks/useError.ts";

export const Statistics = () => {
    const {handleRequestError} = useError()
    const [period, setPeriod] = useState<StatisticsPeriod>("week")
    const [statisticsData, setStatisticsData] = useState<ReportType[]>([])
    useEffect(() => {
        axiosInstance.get(`/statistics/${period}`)
            .then(response => {
                setStatisticsData(response.data)
            })
            .catch(error => {
                handleRequestError(error)
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