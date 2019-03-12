import * as ActionTypes from './ActionTypes'
const DEFAULT_STATE = { isLoading: true, errMess: null, products: [], selectedProducts: [] }

export const products = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTS:
            return { ...state, isLoading: false, errMess: null, products: action.payload }

        case ActionTypes.ADD_PRODUCT:
			const product = {...action.payload, id: state.products.length + 1};
            return {
                ...state,
                products: [...state.products, product]
            }

        case ActionTypes.PRODUCTS_LOADING:
            return { ...state, isLoading: true, errMess: null, products: [] }

        case ActionTypes.PRODUCTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload }
			
		case ActionTypes.UPDATE_PRODUCT:
			const updatedProducts = [...state.products];
			const productToUpdate = updatedProducts.findIndex(x => x.id == action.payload.id);
			updatedProducts[productToUpdate] = action.payload.product;
			return {
				products: updatedProducts
			}

        default:
            return state
    }
}