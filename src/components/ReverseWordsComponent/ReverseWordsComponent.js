import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { reverseWordsCall } from '../../services/DataService';
import "./ReverseWordsComponent.css";


export default function ReverseWordsComponent() {

    const [something, setSomething] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await reverseWordsCall(something);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='mainMenuMargin fs-5'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Reverse Words</h1>
            <p className='d-flex justify-content-center text-center pt-5'>Enter something below to see it reversed</p>

            <p className='d-flex justify-content-center text-center py-5'>{result}</p>

            <div className='container px-5 mx-5 d-flex flex-column justify-content-center mx-auto gap-3 flex-sm-row'>
                <div className='d-flex flex-column mx-auto mx-sm-0 justify-content-center'>
                    <Form.Label className='fs-5' htmlFor="something">Something</Form.Label>
                    <Form.Control onChange={(e) => setSomething(e.target.value)} id='something' className='inputSize' size='lg' type="text" />
                </div>

                <Button onClick={() => getResult()} variant="primary" className='fs-5 mt-auto mx-auto mx-sm-0 submitSize px-3'>Submit</Button>{' '}
            </div>

        </div>
    )
}
