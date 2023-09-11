import {Row} from "react-bootstrap";
import {AddExercise} from "./addExercise.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../../axios/axiosInstance.ts";
import {useError} from "../../hooks/useError.ts";
import {Exercise} from "../../types/exercises.ts";
import {ExistingExercise} from "./existingExercise.tsx";

type exerciseByDayProps = {
    day: number,
}

export const ExerciseByDay = ({day}: exerciseByDayProps) => {
    const {handleRequestError} = useError()
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [refreshFlag, setRefreshFlag] = useState<boolean>(false)
    useEffect(() => {
        axiosInstance.post("/exercises", {
            dayNumber: day
        }).then(response => {
            setExercises(response.data)
        }).catch(error => {
            handleRequestError(error)
        })

    }, [refreshFlag])
    return (
        <Row>
            <h2>Day {day}</h2>
            {exercises.map((exercise, index) => {
                return (
                    <ExistingExercise key={index} exercise={exercise} />
                )
            })}
            <AddExercise dayNumber={day} setRefreshFlag={setRefreshFlag} refreshFlag={refreshFlag} />
        </Row>
    )
}