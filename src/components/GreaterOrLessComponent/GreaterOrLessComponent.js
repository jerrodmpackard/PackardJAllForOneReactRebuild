import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { greaterOrLessCall } from '../../services/DataService';

export default function GreaterOrLessComponent() {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await greaterOrLessCall(number1, number2);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='ms-3 mt-3'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Greater or Less</h1>
            <p className='d-flex justify-content-center pt-5'>Enter two numbers below to see which is greater</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <Form.Label htmlFor="number1">Number 1</Form.Label>
            <Form.Control onChange={(e) => setNumber1(e.target.value)} id='number1' type="text" />

            <Form.Label htmlFor="number2">Number 2</Form.Label>
            <Form.Control onChange={(e) => setNumber2(e.target.value)} id='number2' type="text" />

            <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
        </div>
    )
}
