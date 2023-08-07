import {Row, Col, Button} from 'react-bootstrap';
import {DateFilter} from "../components/reports/dateFilter.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../axios/axiosInstance.ts";
import {useNavigate} from "react-router-dom";
import {ReportType} from "../types/reports.ts";
import {ReportsList} from "../components/reports/reportsList.tsx";
import {CreateReport} from "../components/reports/createReport.tsx";
import {useAppSelector} from "../hooks.ts";

const Reports = () => {
    const navigate = useNavigate();
    const year = useAppSelector((state) => state.reportsDateHandler.year);
    const month = useAppSelector((state) => state.reportsDateHandler.month);
    const message = useAppSelector((state) => state.messageHandler.message);
    const [reports, setReports] = useState<ReportType[]>([]);
    const [showReportModal, setShowReportModal] = useState<boolean>(false);
    useEffect(() => {
        const reportDateString = `${year}-${month}`;
        axiosInstance.get(`/report/${reportDateString}`).then((res) => {
            setReports(res.data)
        }).catch((err) => {
            console.log(err);
            navigate('/login');
        })
    }, [navigate, year, month, message])
    return (
        <>
            <CreateReport show={showReportModal} setShow={setShowReportModal} />
            <h1>Your reports</h1>
            <Row className={"mb-3"}>
                <Col sm={10}>
                    <DateFilter />
                </Col>
                <Col sm={2}>
                    <Button variant={"secondary"} onClick={() => setShowReportModal(true)}>Create new report</Button>
                </Col>
            </Row>
            <Row>
                <ReportsList reports={reports} />
            </Row>
        </>
    )
}

export default Reports;