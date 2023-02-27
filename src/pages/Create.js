import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';


import axios from 'axios'

import "../App.css";


function Create() {

    const [name, setName] = useState(['']);
    const [email, setEmail] = useState(['']);
    const [password, setPassword] = useState(['']);


    useEffect(() => {
        // Update the document title using the browser API
        postUser();
    }, []);

    useEffect(() => {
        // Update the document title using the browser API
        console.log(name);
    }, [name]);

    useEffect(() => {
        // Update the document title using the browser API
        console.log(email);
    }, [email]);

    useEffect(() => {
        // Update the document title using the browser API
        console.log(password);
    }, [password]);

    const postUser = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)

        await axios.post('http://127.0.0.1:8000/api/create-user', formData).then(({ }) => {

        }).catch(({ response }) => {
            if (response.status === 422) {
            } else {
               
            }
        })
    }


    return (
        <Container className='h' >

            <Card className="text-left h">
                <Card.Header className='text-center h '>Create</Card.Header>
                <Card.Body>
                    <Card.Title>Silahkan tambahkan data</Card.Title>
                    <Form onSubmit={postUser}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control type="name" placeholder="Enter nama" value={name} onChange={(e) => setName(e.target.value)} />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>


        </Container>


    )
}


export default Create;