import {Col, Form, Row} from "react-bootstrap";
import React from "react";
import {StatisticsPeriod, Periods} from "../../types/statistics.ts";

type StatisticPeriodPickerProps = {
    setPeriod: React.Dispatch<React.SetStateAction<StatisticsPeriod>>
}

export const StatisticPeriodPicker = ({setPeriod}: StatisticPeriodPickerProps) => {
    const isPeriodValid = (period: string): period is StatisticsPeriod => {
        return Periods.includes(period as StatisticsPeriod)
    }
    const handlePeriodChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (isPeriodValid(e.target.value)) {
            setPeriod(e.target.value)
        }
    }

    return (
        <>
            <Row className={"d-flex justify-content-center align-content-center"}>
                <Col>
                    <Form.Group controlId={"formStatisticsPeriod"}>
                        <Form.Label>Show statistics for:</Form.Label>
                        <Form.Select onChange={handlePeriodChange} name={"period"}>
                            {Periods.map(period => <option key={period} value={period}>{period}</option>)}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}