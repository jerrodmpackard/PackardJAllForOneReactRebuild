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
            <Button as={Link} to={'/'} variant="primary" className='ms-3 mt-3 fs-5'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Asking Questions</h1>
            <p className='d-flex justify-content-center pt-5'>Enter your name and the time you woke up below</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control onChange={(e) => setUserName(e.target.value)} id='name' type="text" />

            <Form.Label htmlFor="wakeUpTime">Wake Up time</Form.Label>
            <Form.Control onChange={(e) => setWakeUpTime(e.target.value)} id='wakeUpTime' type="text" />

            <Button onClick={() => getResult()} variant="primary" className='fs-5'>Submit</Button>{' '}
        </div>
    )
}
