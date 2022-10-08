import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartCount: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {

			let length = state.products.length 
			let newProduct =  true

			if (length > 0) {
				for( let i = 0; i< length ; i++) {
					if(action.payload._id === state.products[i]._id) {
						state.products[i].quantity += action.payload.quantity
						state.cartCount += action.payload.quantity
						newProduct= false 
						break 
					} 
				}
				if (newProduct) {
				state.cartCount += action.payload.quantity
				state.products.push(action.payload)
				}
			} else {
				/*first product*/	
				state.products.push(action.payload)
				state.cartCount += action.payload.quantity
			} 
      state.total += action.payload.price * action.payload.quantity 
    },

		removeProduct: (state, action) => {
			state.products = state.products.filter((value)=> value._id !== action.payload._id)
			state.cartCount -= action.payload.quantity
      state.total -= action.payload.price * action.payload.quantity 
		},

		dscQuantity : (state, action) => {
			state.products = state.products.filter((value)=>{
				if(value.quantity >1 && value._id === action.payload._id){
					console.log('found')
					value.quantity -= 1
					console.log (value.quantity)
				}
				return(value)
			})
			state.cartCount -= 1
      state.total -= action.payload.price 
		},

		ascQuantity : (state, action) => {
			state.products = state.products.filter((value)=>{
				if(value.quantity >1 && value._id === action.payload._id){
					console.log('found')
					value.quantity += 1
					console.log (value.quantity)
				}
				return(value)
			})
			state.cartCount += 1
      state.total += action.payload.price 
		},
  },
})

export const { addProduct, removeProduct, dscQuantity, ascQuantity} = cartSlice.actions;
export default cartSlice.reducer;
