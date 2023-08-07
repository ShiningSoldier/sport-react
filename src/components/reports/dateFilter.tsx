import {Col, Form, Row} from "react-bootstrap";
import {months, years} from "../../helpers/reportsHelper.ts";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {setReportsDate} from "../../slices/reportsDateSlice.ts";

export const DateFilter = () => {
    const dispatch = useAppDispatch();
    const year = useAppSelector((state) => state.reportsDateHandler.year);
    const month = useAppSelector((state) => state.reportsDateHandler.month);
    const monthsOptions = Object.entries(months).map(([key, value]) => {
        return <option key={key} value={key}>{value}</option>
    });
    const yearsOptions = Object.entries(years()).map(([key, value]) => {
        return <option key={key} value={key}>{value}</option>
    });

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Select
                        name={"year"}
                        aria-label="Choose a year"
                        value={year}
                        onChange={(e) => {
                            const year = parseInt(e.currentTarget.value);
                            dispatch(setReportsDate({year, month}));
                        }}
                    >
                        {yearsOptions}
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select
                        name={"month"}
                        aria-label="Choose a month"
                        value={month}
                        onChange={(e) => {
                            const month = e.currentTarget.value;
                            dispatch(setReportsDate({year, month}));
                        }}
                    >
                        {monthsOptions}
                    </Form.Select>
                </Col>
            </Row>
        </Form>
    )
}