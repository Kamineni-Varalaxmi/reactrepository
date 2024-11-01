import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState:{
        veg : [
            { name:'tomato', price:200.5},
            {name:'Potato', price:100.8},
        ],
        nonveg : [
            {name:'Chicken', price:800.0},
            {name:'Fish', price:1000.0},
        ],
    },
    reducers:{}
});


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const status= state.find(state=>state.name===action.payload.name);
            if(status){
                items.quantity +=1;
            }
            else{
                state.push({...action.payload,quantity :1});
            }
        },
        increment:(state,action)=>{
            const item= state.find(item=>item.name===action.payload.name);
            if(item)
                {item.quantity +=1;}   
            else{
                state.push({...action.payload.quantity +=1})
            }    
        },
        decreament:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item && item.quantity>1)
            {item.quantity -=1;}
            else
            {
                return state.filter(item=>item.name !== action.payload.name)}
        },

        remove:(state,action)=>{
        if(item)
        {return state.filter(item=>item.name !== action.payload.name)}
    }
    }
})

export const {addToCart, increment, decreament, remove} = cartSlice.actions;

const store = configureStore({
    reducer : 
    {
        products : productSlice.reducer,
    cart :cartSlice.reducer,
    }
})
export default store