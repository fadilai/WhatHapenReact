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

    const postUser = async (e) => {
        e.preventDefault();

        await axios.post('http://127.0.0.1:8000/api/create-user', {
            name: name,
            email: email,
            password: password,
        }).then(function (response) {

        }).catch(({ response }) => {
            if (response.status === 422) {
            } else {

            }
        })
    }


    return (
        <div>
            <section>
                <Container className='h' >

                    <Card className="text-left text2">
                        <Card.Header className='text-center h2 '>Create</Card.Header>
                        <Card.Body>
                            <Card.Title>Silahkan tambahkan data</Card.Title>
                            <Form>
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

                                <Button variant="primary" onClick={postUser} type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>


                </Container>
            </section>
        </div>



    )
}


export default Create;