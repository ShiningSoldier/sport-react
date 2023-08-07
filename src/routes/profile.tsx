import {useLoaderData} from "react-router-dom";
import {Goal, ActivityLevel, UserType, GoalKeys, ActivityLevelKeys} from "../types/user.ts";
import {Button, Form, FormGroup} from "react-bootstrap";
import {useState} from "react";
import {userGoalDescriptionMapper, userActivityLevelDescriptionMapper} from "../helpers/userDataHelper.ts";
import axiosInstance from "../axios/axiosInstance.ts";
import {useAppDispatch} from "../hooks.ts";
import {MessageTypes} from "../types/common.ts";
import {setMessage} from "../slices/messageSlice.ts";

const Profile = () => {
    const dispatch = useAppDispatch();
    const {data} = useLoaderData() as {data: UserType}

    const [goalText, setGoalText] = useState<string>(
        userGoalDescriptionMapper(data.goal)
    )
    const [activityLevelText, setActivityLevelText] = useState<string>(
        userActivityLevelDescriptionMapper(data.activity_level)
    )
    const goalsOptions = Object.entries(Goal).map(([key, value]) => {
       return <option key={key} value={key}>{value}</option>
    })
    const activityLevelOptions = Object.entries(ActivityLevel).map(([key, value]) => {
        return <option key={key} value={key}>{value}</option>
    })

    const showGoalDescription = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const goalValue = e.target.value as GoalKeys
        setGoalText(userGoalDescriptionMapper(goalValue))
    }

    const showActivityLevelDescription = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const activityLevelValue = e.target.value as ActivityLevelKeys
        setActivityLevelText(userActivityLevelDescriptionMapper(activityLevelValue))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            await axiosInstance.post('/user/update', Object.fromEntries(formData.entries()));
            dispatch(setMessage({message: 'User data updated successfully', type: MessageTypes.SUCCESS}))
        } catch (e: any) {
            console.log(e)
            dispatch(setMessage({message: e.message, type: MessageTypes.DANGER}))
        }
    }

    return (
        <>
            <h1>Welcome, {data.name}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicBirthDate">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control name={'birth_date'} type="date" placeholder="Choose your birth date" defaultValue={
                        data.birth_date ? data.birth_date : undefined
                    }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicHeight">
                    <Form.Label>Height</Form.Label>
                    <Form.Control name={'height'} type="number" placeholder="Enter your height" step={0.1} defaultValue={data.height}/>
                </Form.Group>
                <FormGroup className="mb-3" controlId="formBasicGoal">
                    <Form.Label>Goal</Form.Label>
                    <Form.Select name={'goal'} aria-label="Your goal" defaultValue={data.goal} onChange={showGoalDescription}>
                        {goalsOptions}
                    </Form.Select>
                    <Form.Text className="text-muted">
                        {goalText}
                    </Form.Text>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicActivityLevel">
                    <Form.Label>Activity Level</Form.Label>
                    <Form.Select name={'activity_level'} aria-label="Your activity level" defaultValue={data.activity_level} onChange={showActivityLevelDescription}>
                        {activityLevelOptions}
                    </Form.Select>
                    <Form.Text className="text-muted">
                        {activityLevelText}
                    </Form.Text>
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Profile;