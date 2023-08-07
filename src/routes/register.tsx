import {Button, Container, Form} from "react-bootstrap";
import React from "react";
import {setMessage} from "../slices/messageSlice.ts";
import ShowMessage from "../components/layouts/showMessage.tsx";
import {MessageTypes} from "../types/common.ts";
import {useAppDispatch} from "../hooks.ts";
import {useNavigate} from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.ts";
import {LinkContainer} from "react-router-bootstrap";

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            await axiosInstance.post(
                '/register',
                Object.fromEntries(formData.entries())
            );

            navigate('/login')
        } catch (e: any) {
            dispatch(setMessage({message: e.message, type: MessageTypes.DANGER}))
        }
    }

    return (
        <Container>
            <ShowMessage />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="registerName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name={"name"} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name={"email"} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name={"password"} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Register</Button>
            </Form>
            <p>Already registered? Please, <LinkContainer to={'/login'}><a href={'/login'}>log in</a></LinkContainer></p>
        </Container>

    )
}

export default Register;