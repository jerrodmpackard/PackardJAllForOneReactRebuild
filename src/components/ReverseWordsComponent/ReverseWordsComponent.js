import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { reverseWordsCall } from '../../services/DataService';

export default function ReverseWordsComponent() {

    const [something, setSomething] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await reverseWordsCall(something);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='ms-3 mt-3'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Reverse Words</h1>
            <p className='d-flex justify-content-center pt-5'>Enter something below to see it reversed</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <Form.Label htmlFor="something">Something</Form.Label>
            <Form.Control onChange={(e) => setSomething(e.target.value)} id='something' type="text" />

            <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
        </div>
    )
}