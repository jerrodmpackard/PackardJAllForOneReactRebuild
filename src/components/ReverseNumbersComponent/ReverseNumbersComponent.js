import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { reverseNumbersCall } from '../../services/DataService';

export default function ReverseNumbersComponent() {

    const [number1, setNumber1] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await reverseNumbersCall(number1);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='ms-3 mt-3'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Reverse Numbers</h1>
            <p className='d-flex justify-content-center pt-5'>Enter a number below to see it reversed</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <Form.Label htmlFor="number">Number</Form.Label>
            <Form.Control onChange={(e) => setNumber1(e.target.value)} id='number' type="text" />

            <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
        </div>
    )
}
