import {ReportType} from "../../types/reports.ts";
import {Button, Table} from "react-bootstrap";
import axiosInstance from "../../axios/axiosInstance.ts";
import {useAppDispatch} from "../../hooks.ts";
import {setMessage} from "../../slices/messageSlice.ts";
import {ViewReport} from "./viewReport.tsx";
import {useState} from "react";

type ReportsListType = {
    reports: ReportType[]
}

export const ReportsList = ({reports}: ReportsListType) => {
    const dispatch = useAppDispatch();
    const [showViewReport, setShowViewReport] = useState<boolean>(false);
    const [activeReport, setActiveReport] = useState<ReportType|null>(null);

    if (reports.length === 0) {
        return <p>No reports for this date. Maybe try to choose a different date?</p>
    }

    const handleView = (report: ReportType) => {
        setActiveReport(report);
        setShowViewReport(true);
    }

    const handleDelete = (reportId: number, reportDate: string) => {
        if (confirm('Are you sure you want to delete this report?')) {
            axiosInstance.delete(`/report/${reportId}`).then(() => {
                dispatch(setMessage({
                    message: `Report for ${reportDate} has been deleted successfully`,
                    variant: 'success',
                }));
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <ViewReport show={showViewReport} setShow={setShowViewReport} report={activeReport} />
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Weight</th>
                    <th>Leg</th>
                    <th>Waist</th>
                    <th>Chest</th>
                    <th>Arm</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {reports.map((report, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{report.date}</td>
                            <td>{report.weight}</td>
                            <td>{report.leg}</td>
                            <td>{report.waist}</td>
                            <td>{report.chest}</td>
                            <td>{report.arm}</td>
                            <td>
                                <Button onClick={() => handleView(report)} variant={'primary'} className={"me-2"}>View</Button>
                                <Button onClick={() => handleDelete(report.id, report.date)} variant={'danger'}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    )
}