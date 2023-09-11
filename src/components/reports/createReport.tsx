import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {getCurrentDay, getCurrentMonth, getCurrentYear} from "../../helpers/reportsHelper.ts";
import {FormEvent} from "react";
import axiosInstance from "../../axios/axiosInstance.ts";
import {setReportsDate} from "../../slices/reportsDateSlice.ts";
import {useAppDispatch} from "../../hooks.ts";
import {setMessage} from "../../slices/messageSlice.ts";
import {useError} from "../../hooks/useError.ts";

type CreateReportProps = {
    show: boolean,
    setShow: (show: boolean) => void,
}

export const CreateReport = ({show, setShow}: CreateReportProps) => {
    const {handleRequestError} = useError()
    const dispatch = useAppDispatch();
    const currentDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`;
    const handleClose = () => setShow(false);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const rawDate = formData.get('date');
        if (rawDate) {
            const date = new Date(rawDate.toString());
            axiosInstance.post('/report/create', formData).then(() => {
                dispatch(setReportsDate({
                    year: date.getFullYear(),
                    month: date.toLocaleString('default', { month: '2-digit' })
                }));
                dispatch(setMessage({
                    message: `Report for ${date} has been created successfully`,
                    variant: 'success',
                }));
                handleClose();
            }).catch((error) => {
                handleRequestError(error)
            });
        }
    }
    return (
        <Modal
            centered
            size={"lg"}
            show={show}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create new report</Modal.Title>
            </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formReportDate">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control name={"date"} min={"2020-01-01"}
                                                  max={currentDate} defaultValue={currentDate}
                                                  type="date" placeholder="Enter date" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formReportWeight">
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control name={"weight"} type="number" step={0.1} placeholder="Your weight" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formReportLeg">
                                    <Form.Label>Leg</Form.Label>
                                    <Form.Control name={"leg"} type="number" step={0.1} placeholder="Leg size" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formReportWaist">
                                    <Form.Label>Waist</Form.Label>
                                    <Form.Control name={"waist"} type="number" step={0.1} placeholder="Waist size" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formReportChest">
                                    <Form.Label>Chest</Form.Label>
                                    <Form.Control name={"chest"} type="number" step={0.1} placeholder="Chest size" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formReportArm">
                                    <Form.Label>Arm</Form.Label>
                                    <Form.Control name={"arm"} type="number" step={0.1} placeholder="Arm size" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formReportPhotoFront">
                                    <Form.Label>Front photo</Form.Label>
                                    <Form.Control
                                        name={"photo_front"}
                                        type="file"
                                        accept={"image/jpeg, image/png"}
                                        placeholder="Upload your photo from the front"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formReportPhotoBack">
                                    <Form.Label>Back photo</Form.Label>
                                    <Form.Control
                                        name={"photo_back"}
                                        type="file"
                                        accept={"image/jpeg, image/png"}
                                        placeholder="Upload your photo from the back"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type={"submit"}>Save</Button>
                    </Modal.Footer>
                </Form>
        </Modal>
    )
}