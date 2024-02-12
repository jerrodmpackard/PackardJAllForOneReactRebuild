import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { greaterOrLessCall } from '../../services/DataService';
import "./GreaterOrLessComponent.css";


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
            <Button as={Link} to={'/'} variant="primary" className='mainMenuMargin fs-5'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Greater or Less</h1>
            <p className='d-flex justify-content-center text-center pt-5'>Enter two numbers below to see which is greater</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <div className='container px-5 mx-5 d-flex flex-column justify-content-center mx-auto gap-3 flex-sm-row'>
                <div className='d-flex flex-column mx-auto mx-sm-0 justify-content-center'>
                    <Form.Label className='fs-5' htmlFor="number1">Number 1</Form.Label>
                    <Form.Control onChange={(e) => setNumber1(e.target.value)} id='number1' className='inputSize' type="text" />
                </div>

                <div className='d-flex flex-column mx-auto mx-sm-0 justify-content-center'>
                    <Form.Label className='fs-5' htmlFor="number2">Number 2</Form.Label>
                    <Form.Control onChange={(e) => setNumber2(e.target.value)} id='number2' className='inputSize' type="text" />
                </div>


                <Button onClick={() => getResult()} variant="primary" className='fs-5 mt-auto mx-auto mx-sm-0 submitSize px-3'>Submit</Button>{' '}
            </div>

        </div>
    )
}
