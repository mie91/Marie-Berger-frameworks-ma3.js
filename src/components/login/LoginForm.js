import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "../login/ErrorMessage";


const schema = yup.object().shape({

    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
                 .min(4, "Password must be longer than 4 characters")
});



function LoginForm() {
    const {register, handleSubmit, errors} = useForm({
            validationSchema: schema
        });

        function onSubmit(data) {
            console.log("data", data);
        }

        return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name ="username" placeholder ="Username" ref={register}/>
                    {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" placeholder="Password" ref={register}/>
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </Form.Group>

                <Button type="submit">Enter</Button>
            </Form>
        );
}

export default LoginForm;