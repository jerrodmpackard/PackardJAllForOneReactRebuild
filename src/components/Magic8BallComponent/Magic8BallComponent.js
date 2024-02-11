import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { magic8BallCall } from '../../services/DataService';

export default function Magic8BallComponent() {

    const [question, setQuestion] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await magic8BallCall(question);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='ms-3 mt-3'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Magic 8 Ball</h1>
            <p className='d-flex justify-content-center pt-5'>Ask the Magic 8 Ball a question to receive a response</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <Form.Label htmlFor="question">Question</Form.Label>
            <Form.Control onChange={(e) => setQuestion(e.target.value)} id='question' type="text" />

            <Button onClick={() => getResult()} variant="primary">Submit</Button>{' '}
        </div>
    )
}
