import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';



import "../App.css";
import axios from 'axios'



function Update() {

  const [DataUser, setDataUser] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([])
  let { idUser } = useParams();
  console.log(idUser)

  React.useEffect(() => {
    dataUser()
  }, [])





  function dataUser() {
    axios.get(`http://127.0.0.1:8000/api/detail-user/${idUser}`).then(function (response) {
      // console.log('response :>> ', response.data.data);
      // setDataUser(response.dataUser)

      setName(response.data.data.name);
      setEmail(response.data.data.email);
      setPassword(response.data.data.password);

    }).catch(({ response: { data } }) => {
      console.fire({
        text: data.message,
        icon: "error"
      })
    })




  }


  const updateUser = () => {
    axios.post(`http://127.0.0.1:8000/api/update-user/${idUser}`, {
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
            <Card.Header className='text-center h '>Update</Card.Header>
            <Card.Body className=''>
              <Card.Title>Silahkan ubah data</Card.Title>

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

                <Button variant="primary" type="button" onClick={updateUser}>
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


export default Update;