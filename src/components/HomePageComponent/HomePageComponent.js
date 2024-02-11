import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function HomePageComponent() {
    return (
        <div className='' >
            {/* This will be the home page and house all 10 buttons */}
            <h1 className='d-flex justify-content-center pt-5'>All For One</h1>
            <h3 className='d-flex justify-content-center pt-5'>Select an option below to continue</h3>

            <div className='d-flex justify-content-center pt-5'>
                <Button as={Link} to={'SayHello'} variant="primary">Say Hello</Button>{' '}
                <Button as={Link} to={'SumTwoNumbers'} variant="primary">Sum Two Numbers</Button>{' '}
                <Button as={Link} to={'AskingQuestions'} variant="primary">Asking Questions</Button>{' '}
                <Button as={Link} to={'GreaterOrLess'} variant="primary">Greater or Less</Button>{' '}
                <Button as={Link} to={'MadLibs'} variant="primary">Mad Libs</Button>{' '}
                <Button as={Link} to={'OddOrEven'} variant="primary">Odd or Even</Button>{' '}
                <Button as={Link} to={'ReverseWords'} variant="primary">Reverse Words</Button>{' '}
                <Button as={Link} to={'ReverseNumbers'} variant="primary">Reverse Numbers</Button>{' '}
                <Button as={Link} to={'Magic8Ball'} variant="primary">Magic 8 Ball</Button>{' '}
                <Button as={Link} to={'RestaurantPicker'} variant="primary">Restaurant Picker</Button>{' '}
            </div>
        </div>
    )
}
