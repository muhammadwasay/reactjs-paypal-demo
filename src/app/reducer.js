import { combineReducers } from 'redux'
import {
    SET_AVAILABILITY_FILTER,
    ADD_TO_CART,
    ADD_PRODUCT,
    PROCEED_TO_CHECKOUT,
    AvailabilityFilters,
    PAYMENT_STATUS_UPDATE,
    PaymentStatus
} from './actions'
const { SHOW_ALL } = AvailabilityFilters

function cart(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                {
                    pid: action.payload.pid,
                    price: action.payload.price,
                    title: action.payload.title,
                    image: action.payload.image
                }
            ]
        default:
            return state
    }
}

function checkout(state = {}, action) {
    switch (action.type) {
        case PROCEED_TO_CHECKOUT:
            return action.payload
        default:
            return state
    }
}

function availabilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_AVAILABILITY_FILTER:
            return action.filter
        default:
            return state
    }
}


function products(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    pid: action.pid,
                    price: action.price,
                    title: action.title,
                    image: action.image
                }
            ]
        default:
            return state
    }
}

function paymentStatus(state = {}, action) {
    switch (action.type) {
        case PAYMENT_STATUS_UPDATE:
            //todo clear cart based on payment status
            return action.payload
        default:
            return state
    }
}

const shoppingCartReducer = combineReducers({
    availabilityFilter: availabilityFilter,
    cart: cart,
    checkout: checkout,
    products: products,
    paymentStatus: paymentStatus
})

export default shoppingCartReducer