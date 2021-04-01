import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../store/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
    
}

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedAIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
            const updatedAIngredients = updatedObject(state.ingredients, updatedAIngredient)
            const updatedState = {
                ingredients: updatedAIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedState)

        case actionTypes.REMOVE_INGREDIENT:
            const updatedRIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const updatedRIngredients = updatedObject(state.ingredients, updatedRIngredient)
            const updatedState = {
                ingredients: updatedRIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedState)

        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                //ingredients: action.ingredients,
                // Specify the order of the ingredients
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                totalPrice: 4,
                error: false
            };

        case actionTypes.FETCH_INGREDIENTS_FAIL:
            return {
                ...state,
                error: true
            };

        default:
            return state;

    }
    
};


export default burgerBuilderReducer;