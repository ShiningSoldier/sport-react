import {Modal, Table} from "react-bootstrap";
import {ReportType} from "../../types/reports.ts";

type ViewReportProps = {
    show: boolean,
    setShow: (show: boolean) => void,
    report: ReportType|null,
}

export const ViewReport = ({show, setShow, report}: ViewReportProps) => {
    const handleClose = () => {
        setShow(false);
    }
    return (
        <>
            {report && (
                <Modal
                    centered
                    size={"lg"}
                    show={show}
                    onHide={handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table responsive>
                            <tbody>
                            <tr>
                                <td>Date</td>
                                <td>{report.date}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{report.weight}</td>
                            </tr>
                            <tr>
                                <td>Leg size</td>
                                <td>{report.leg}</td>
                            </tr>
                            <tr>
                                <td>Waist size</td>
                                <td>{report.waist}</td>
                            </tr>
                            <tr>
                                <td>Chest size</td>
                                <td>{report.chest}</td>
                            </tr>
                            <tr>
                                <td>Arm size</td>
                                <td>{report.arm}</td>
                            </tr>
                            <tr>
                                <td>Photos</td>
                                <td>1, 2</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            )}
        </>

    )
}