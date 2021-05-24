import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

function OrderSummary(props) {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
              <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
                {props.ingredients[igKey]}
              </li>
            );
        })
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A Delicious Burger with the following Ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger"  clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
        </Auxiliary>
    )
}

export default OrderSummary
