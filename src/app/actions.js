export const ADD_TO_CART = 'ADD_TO_CART'
export const PROCEED_TO_CHECKOUT = 'PROCEED_TO_CHECKOUT'
export const PAYMENT_STATUS_UPDATE = 'PAYMENT_STATUS_UPDATE'
export const REMOVE_FROM_CART = 'ADD_TO_CART'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const SET_AVAILABILITY_FILTER = 'SET_AVAILABILITY_FILTER'
export const SET_CHECKOUT_STATUS = 'SET_CHECKOUT_STATUS'

export const AvailabilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    IN_STOCK: 'IN_STOCK'
}

export const AvailabilityStatus = {
    IN_STOCK: 'IN_STOCK',
    OUT_OF_STOCK: 'OUT_OF_STOCK'
}

export const PaymentStatus = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
}

export const addToCart = catalogItemData => ({
    type: ADD_TO_CART,
    payload: {
        pid: catalogItemData.pid,
        price: catalogItemData.price,
        title: catalogItemData.title,
        image: catalogItemData.images[0]
    }
})

export const proceedToCheckout = checkoutData => ({
    type: PROCEED_TO_CHECKOUT,
    payload: checkoutData
})

export const paymentStatusUpdate = paymentStatusData => ({
    type: PAYMENT_STATUS_UPDATE,
    payload: paymentStatusData
})

export function addProduct(product) {
    return { type: ADD_PRODUCT, product }
}

export function removeFromCart(productId) {
    return { type: REMOVE_FROM_CART, productId }
}

export function setAvailabilityFilter(filter) {
    return { type: SET_AVAILABILITY_FILTER, filter }
}

export function setCheckoutStatus(status) {
    return { type: SET_CHECKOUT_STATUS, status }
}