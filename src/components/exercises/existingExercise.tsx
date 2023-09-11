import {Exercise} from "../../types/exercises.ts";
import {Button, Col, Form, Row} from "react-bootstrap";

type existingExerciseProps = {
    exercise: Exercise,
}

export const ExistingExercise = ({exercise}: existingExerciseProps) => {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseName">
                        <Form.Control name={"name"} type="text" placeholder="Exercise name" value={exercise.name} disabled={true} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseSets">
                        <Form.Control name={"sets"} type="number" min={1} max={100} placeholder="Number of sets" value={exercise.sets} disabled={true} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseReps">
                        <Form.Control name={"reps"} type="number" min={1} max={100} placeholder="Number of reps" value={exercise.reps} disabled={true} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseMinWeight">
                        <Form.Control name={"max_weight"} type="number" min={1} max={500} placeholder="Min rep weight" value={exercise.min_weight} disabled={true} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exerciseMaxWeight">
                        <Form.Control name={"min_weight"} type="number" min={1} max={500} placeholder="Max rep weight" value={exercise.max_weight} disabled={true} />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="secondary">Edit</Button>
                </Col>
            </Row>
        </Form>

    )
}