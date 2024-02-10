import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { sayHelloCall } from '../../services/DataService';


export default function SayHelloComponent() {

    const [username, setUserName] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await sayHelloCall(username);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='ms-3 mt-3'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Say Hello</h1>
            <p className='d-flex justify-content-center pt-5'>Enter your name below</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <div className='d-inline-flex flex-col justify-content-center pt-5'>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control onChange={(e) => setUserName(e.target.value)} id='name'  type="text" />
                <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
            </div>
        </div>
    )
}
