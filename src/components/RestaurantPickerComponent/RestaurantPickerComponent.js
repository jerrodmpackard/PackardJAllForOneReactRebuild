import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { fastFoodCall, pizzaCall, restaurantCall } from '../../services/DataService';

export default function RestaurantPickerComponent() {

    const [result, setResult] = useState('');

    const getFastFoodResult = async () => {
        const promise = await fastFoodCall();
        setResult(promise);
    }

    const getPizzaResult = async () => {
        const promise = await pizzaCall();
        setResult(promise);
    }

    const getRestaurantResult = async () => {
        const promise = await restaurantCall();
        setResult(promise);
    }

    return (
        <div>
            <Button as={Link} to={'/'} variant="primary" className='ms-3 mt-3'>Back to Main Menu</Button>{' '}

            <h1 className='d-flex justify-content-center pt-5'>Restaurant Picker</h1>
            <p className='d-flex justify-content-center pt-5'>Select an option below to randomly generate a restaurant</p>

            <p className='d-flex justify-content-center pt-5'>{result}</p>

            <Button onClick={() => getFastFoodResult()} variant="primary">Fast Food</Button>{' '}
            <Button onClick={() => getPizzaResult()} variant="primary">Pizza</Button>{' '}
            <Button onClick={() => getRestaurantResult()} variant="primary">Restaurant</Button>{' '}
        </div>
    )
}