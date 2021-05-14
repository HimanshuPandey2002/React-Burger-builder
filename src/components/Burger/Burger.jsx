import React from 'react'
import './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients type={igKey} key={igKey+i} />
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    
    // console.log(transformedIngredient)
    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please Start adding Ingredients</p>
    }

    return (
      <div className="Burger">
        <BurgerIngredients type="bread-top" />
        {transformedIngredient}
        <BurgerIngredients type="bread-bottom" />
      </div>
    );
}

export default Burger
