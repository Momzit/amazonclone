export const initialState = {
    basket: [],
    user: null,
};

//This can be replaced with a reducer function that does the total in one line :)
//Which is in the reducer.js
export const total = (basket) => {
    let Sum = 0;
    for (const product of basket) {
        Sum += product.price
    }
    return Sum
}

//Nice reducer function to sum up the basket items
export const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn (
                    `Product with (id: ${action.id}) is not in the cart`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
};

export default reducer;