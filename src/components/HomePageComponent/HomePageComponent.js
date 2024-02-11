import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./HomePageComponent.css";


export default function HomePageComponent() {
    return (
        <div className='' >
            <h1 className='d-flex justify-content-center pt-5'>All For One</h1>
            <h3 className='d-flex justify-content-center pt-5'>Select an option below to continue</h3>

            <div className='container pt-5'>
                <Row>
                    <Col sm>
                    <Button as={Link} to={'SayHello'} variant="primary" className='fs-5 w-100'>Say Hello</Button>{' '}
                    </Col>

                    <Col sm>
                    <Button as={Link} to={'SumTwoNumbers'} variant="primary" className='fs-5 w-100'>Sum Two Numbers</Button>{' '}
                    </Col>

                    <Col sm>
                    <Button as={Link} to={'AskingQuestions'} variant="primary" className='fs-5 w-100'>Asking Questions</Button>{' '}
                    </Col>

                    <Col sm>
                    <Button as={Link} to={'GreaterOrLess'} variant="primary" className='fs-5 w-100'>Greater or Less</Button>{' '}
                    </Col>

                    <Col sm>
                    <Button as={Link} to={'MadLibs'} variant="primary" className='fs-5 w-100'>Mad Libs</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    <Button as={Link} to={'OddOrEven'} variant="primary" className='fs-5 w-100'>Odd or Even</Button>{' '}
                    </Col>

                    <Col sm>
                    <Button as={Link} to={'ReverseWords'} variant="primary" className='fs-5 w-100'>Reverse Words</Button>{' '}
                    </Col>

                    <Col sm>
                    <Button as={Link} to={'ReverseNumbers'} variant="primary" className='fs-5 w-100'>Reverse Numbers</Button>{' '}
                    </Col>

                    <Col sm>
                    <Button as={Link} to={'Magic8Ball'} variant="primary" className='fs-5 w-100'>Magic 8 Ball</Button>{' '}
                    </Col>

                    <Col sm>
                    <Button as={Link} to={'RestaurantPicker'} variant="primary" className='fs-5 w-100'>Restaurant Picker</Button>{' '}
                    </Col>
                </Row>
            </div>
        </div>
    )
}
