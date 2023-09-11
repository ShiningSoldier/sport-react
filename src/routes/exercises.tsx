import {ExerciseByDay} from "../components/exercises/exerciseByDay.tsx";

export const Exercises = () => {
    const days = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            {days.map((day, index) => {
                return (
                    <ExerciseByDay key={index} day={day} />
                )
            })}
        </>
    )
}