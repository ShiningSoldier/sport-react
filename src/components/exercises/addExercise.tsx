import {Button, Col, Form, Row} from "react-bootstrap";
import React from "react";
import axiosInstance from "../../axios/axiosInstance.ts";
import {useError} from "../../hooks/useError.ts";
import {useRef} from "react";

type addExerciseProps = {
    dayNumber: number,
    setRefreshFlag: (flag: boolean) => void,
    refreshFlag: boolean,
}

export const AddExercise = ({dayNumber, setRefreshFlag, refreshFlag}: addExerciseProps) => {
    const {handleRequestError} = useError()
    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        formData.append('day_number', dayNumber.toString())

        axiosInstance.post("/exercises/add", formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(() => {
            formRef.current?.reset()
            setRefreshFlag(!refreshFlag)
        }).catch(error => {
            handleRequestError(error)
        })
    }

    return (
        <Form onSubmit={handleSubmit} ref={formRef}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseName">
                        <Form.Control name={"name"} type="text" placeholder="Exercise name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseSets">
                        <Form.Control name={"sets"} type="number" min={1} max={100} placeholder="Number of sets" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseReps">
                        <Form.Control name={"reps"} type="number" min={1} max={100} placeholder="Number of reps" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseMinWeight">
                        <Form.Control name={"min_weight"} type="number" min={1} max={500} placeholder="Min rep weight" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseMaxWeight">
                        <Form.Control name={"max_weight"} type="number" min={1} max={500} placeholder="Max rep weight" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">Add</Button>
                </Col>
            </Row>
        </Form>
    )
}