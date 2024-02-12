import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { magic8BallCall } from '../../services/DataService';
import "./Magic8BallComponent.css";


export default function Magic8BallComponent() {

    const [question, setQuestion] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await magic8BallCall(question);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='mainMenuMargin fs-5'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Magic 8 Ball</h1>
            <p className='d-flex justify-content-center text-center pt-5'>Ask the Magic 8 Ball a question to receive a response</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <div className='container px-5 mx-5 d-flex flex-column justify-content-center mx-auto gap-3 flex-sm-row'>
                <div className='d-flex flex-column mx-auto mx-sm-0 justify-content-center'>
                    <Form.Label className='fs-5' htmlFor="question">Question</Form.Label>
                    <Form.Control onChange={(e) => setQuestion(e.target.value)} id='question' className='inputSize' size='lg' type="text" />
                </div>

                <Button onClick={() => getResult()} variant="primary" className='fs-5 mt-auto mx-auto mx-sm-0 submitSize px-3'>Submit</Button>{' '}
            </div>

        </div>
    )
}
