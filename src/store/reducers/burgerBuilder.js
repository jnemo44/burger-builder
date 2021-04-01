import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../store/utility';

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

const addIngredient = (state, action) => {
    const updatedAIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
            const updatedAIngredients = updateObject(state.ingredients, updatedAIngredient)
            const updatedAState = {
                ingredients: updatedAIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
    return updateObject(state, updatedAState)
};

const removeIngredient = (state, action) => {
    const updatedRIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const updatedRIngredients = updateObject(state.ingredients, updatedRIngredient)
            const updatedRState = {
                ingredients: updatedRIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
    return updateObject(state, updatedRState)
};

const setIngredients = (state, action) => {
    return updateObject(state, {
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
    });
}


const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAIL: return updateObject(state, {error:true})
        default: return state;
    }
    
};


export default burgerBuilderReducer;