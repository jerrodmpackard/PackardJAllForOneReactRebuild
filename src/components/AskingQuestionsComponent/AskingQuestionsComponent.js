import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { askingQuestionsCall } from '../../services/DataService';
import "./AskingQuestionsComponent.css";



export default function AskingQuestionsComponent() {

    const [userName, setUserName] = useState('');
    const [wakeUpTime, setWakeUpTime] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await askingQuestionsCall(userName, wakeUpTime);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='mainMenuMargin fs-5'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center text-center pt-5'>Asking Questions</h1>
            <p className='d-flex justify-content-center text-center pt-5'>Enter your name and the time you woke up below</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <div className='container px-5 mx-5 d-flex flex-column justify-content-center mx-auto gap-3 flex-sm-row'>
                <div className='d-flex flex-column mx-auto mx-sm-0 justify-content-center'>
                    <Form.Label className='fs-5' htmlFor="name">Name</Form.Label>
                    <Form.Control onChange={(e) => setUserName(e.target.value)} id='name' className='inputSize' type="text" />
                </div>

                <div className='d-flex flex-column mx-auto mx-sm-0 justify-content-center'>
                    <Form.Label className='fs-5' htmlFor="wakeUpTime">Wake Up time</Form.Label>
                    <Form.Control onChange={(e) => setWakeUpTime(e.target.value)} id='wakeUpTime' className='inputSize' type="text" />
                </div>

                <Button onClick={() => getResult()} variant="primary" className='fs-5 mt-auto mx-auto mx-sm-0 submitSize px-3'>Submit</Button>{' '}
            </div>

        </div>
    )
}
