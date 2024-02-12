import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { reverseNumbersCall } from '../../services/DataService';
import "./ReverseNumbersComponent.css";


export default function ReverseNumbersComponent() {

    const [number1, setNumber1] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await reverseNumbersCall(number1);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='mainMenuMargin fs-5'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center text-center pt-5'>Reverse Numbers</h1>
            <p className='d-flex justify-content-center text-center pt-5'>Enter a number below to see it reversed</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <div className='container px-5 mx-5 d-flex flex-column justify-content-center mx-auto gap-3 flex-sm-row'>
                <div className='d-flex flex-column mx-auto mx-sm-0 justify-content-center'>
                    <Form.Label className='fs-5' htmlFor="number">Number</Form.Label>
                    <Form.Control onChange={(e) => setNumber1(e.target.value)} id='number' className='inputSize' type="text" />
                </div>

                <Button onClick={() => getResult()} variant="primary" className='fs-5 mt-auto mx-auto mx-sm-0 submitSize px-3'>Submit</Button>{' '}
            </div>

        </div>
    )
}
