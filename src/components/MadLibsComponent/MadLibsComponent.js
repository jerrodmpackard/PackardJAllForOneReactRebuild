import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { madLibsCall } from '../../services/DataService'
import "./MadLibsComponent.css";


export default function MadLibsComponent() {

    const [heroName, setHeroName] = useState('');
    const [planetName, setPlanetName] = useState('');
    const [speciesName, setSpeciesName] = useState('');
    const [pluralNoun, setPluralNoun] = useState('');
    const [singularNoun1, setSingularNoun1] = useState('');
    const [singularNoun2, setSingularNoun2] = useState('');
    const [verb1, setVerb1] = useState('');
    const [verb2, setVerb2] = useState('');
    const [adj1, setAdj1] = useState('');
    const [adj2, setAdj2] = useState('');

    const [result, setResult] = useState('');

    const getResult = async () => {
        const promise = await madLibsCall(heroName, planetName, speciesName, pluralNoun, singularNoun1, singularNoun2, verb1, verb2, adj1, adj2);
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='mainMenuMargin fs-5'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Mad Libs</h1>
            <p className='d-flex justify-content-center text-center pt-5'>Follow the prompts below to create a Mad Lib</p>

            <p className='d-flex justify-content-center text-center py-5'>{result}</p>

            <div className='container px-3 mx-5 d-flex flex-column justify-content-center mx-auto gap-3'>
                <Row>
                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="heroName">Hero Name</Form.Label>
                    <Form.Control onChange={(e) => setHeroName(e.target.value)} id='heroname' className='' size='lg' type="text" />
                    </Col>

                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="planetName">Planet Name</Form.Label>
                    <Form.Control onChange={(e) => setPlanetName(e.target.value)} id='planetName' className='' size='lg' type="text" />
                    </Col>

                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="speciesName">Species name</Form.Label>
                    <Form.Control onChange={(e) => setSpeciesName(e.target.value)} id='speciesName' className='' size='lg' type="text" />
                    </Col>

                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="pluralNoun">Plural Noun</Form.Label>
                    <Form.Control onChange={(e) => setPluralNoun(e.target.value)} id='pluralNoun' className='' size='lg' type="text" />
                    </Col>

                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="singularNoun1">Singular Noun</Form.Label>
                    <Form.Control onChange={(e) => setSingularNoun1(e.target.value)} id='singularNoun1' className='' size='lg' type="text" />
                    </Col>
                </Row>
                
                <Row>
                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="singularNoun2">Singular Noun</Form.Label>
                    <Form.Control onChange={(e) => setSingularNoun2(e.target.value)} id='singularNoun2' className='' size='lg' type="text" />
                    </Col>

                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="verb1">Verb</Form.Label>
                    <Form.Control onChange={(e) => setVerb1(e.target.value)} id='verb1' className='' size='lg' type="text" />
                    </Col>

                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="verb2">Verb</Form.Label>
                    <Form.Control onChange={(e) => setVerb2(e.target.value)} id='verb2' className='' size='lg' type="text" />
                    </Col>

                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="adj1">Adjective</Form.Label>
                    <Form.Control onChange={(e) => setAdj1(e.target.value)} id='adj1' className='' size='lg' type="text" />
                    </Col>

                    <Col sm>
                    <Form.Label className='fs-5' htmlFor="adj1">Adjective</Form.Label>
                    <Form.Control onChange={(e) => setAdj2(e.target.value)} id='adj1' className='' size='lg' type="text" />
                    </Col>
                </Row>




                <Button onClick={() => getResult()} variant="primary" className='fs-5 mt-auto mx-auto submitSize px-3'>Submit</Button>{' '}
            </div>

        </div>
    )
}
