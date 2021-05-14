import React, { Component } from 'react'
import Auxiliary from "../../hoc/Auxiliary"
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

export default class BurgerBulider extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0, 
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        Purchasable: false,
    }

    updatePurchaseState = () => {
      const ingredients = {...this.state.ingredients}
      const sum = Object.keys(ingredients)
        .map((igkey) => {
          return ingredients[igkey];
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
        console.log(sum)
    }
    handleIncrement = (type) => {
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const PriceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PriceAddition;
        this.setState({
          totalPrice: newPrice,
          ingredients: updatedIngredients,
        });
    }

    handleDecrement = (type) => {
        const oldCount = this.state.ingredients[type];
         if(oldCount <= 0)
            return;
         const updatedIngredients = { ...this.state.ingredients };
         updatedIngredients[type] = oldCount - 1;
         const PriceDeduction  = INGREDIENTS_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice - PriceDeduction ;
         this.setState({
           totalPrice: newPrice,
           ingredients: updatedIngredients,
         });
    }

    render() {
        const disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
    this.updatePurchaseState();

        return (
          <Auxiliary>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              ingredientAdded={this.handleIncrement}
              ingredientRemoved={this.handleDecrement}
              disabled={disabledInfo}
              price={this.state.totalPrice}
            />
          </Auxiliary>
        );
    }
}