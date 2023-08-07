import {Form, Button, Container} from 'react-bootstrap'
import React from "react";
import ShowMessage from "../components/layouts/showMessage.tsx";
import {useAppDispatch} from "../hooks.ts";
import {setMessage} from "../slices/messageSlice.ts";
import {MessageTypes} from "../types/common.ts";
import {useNavigate} from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.ts";
import {LinkContainer} from "react-router-bootstrap";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);

            await axiosInstance.post(
                '/login',
                Object.fromEntries(formData.entries())
            );

            navigate('/')
        } catch (e: any) {
            dispatch(setMessage({message: e.message, type: MessageTypes.DANGER}))
        }
    }

    return (
        <Container>
            <ShowMessage />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name={"email"} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name={"password"} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
            </Form>
            <p>Don't have an account yet? Please, <LinkContainer to={'/register'}><a href={'/register'}>register</a></LinkContainer></p>
        </Container>

    )
}

export default Login;