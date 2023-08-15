import {Row, Col} from "react-bootstrap";
import {ReportType} from "../../types/reports.ts";
import {StatisticsChart} from "./statisticsChart.tsx";

type StatisticsChartsProps = {
    statisticsData: ReportType[];
}

export const StatisticsChartsList = ({statisticsData}: StatisticsChartsProps) => {
    return (
        <>
            <Row className={"mb-2"}>
                <StatisticsChart title={"Weight"} dataKey={"weight"} data={statisticsData} />
            </Row>
            <Row>
                <Col>
                    <StatisticsChart title={"Leg size"} dataKey={"leg"} data={statisticsData} />
                </Col>
                <Col>
                    <StatisticsChart title={"Waist size"} dataKey={"waist"} data={statisticsData} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <StatisticsChart title={"Chest size"} dataKey={"chest"} data={statisticsData} />
                </Col>
                <Col>
                    <StatisticsChart title={"Arm size"} dataKey={"arm"} data={statisticsData} />
                </Col>
            </Row>
        </>

    )
}