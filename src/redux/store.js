import {createStore,combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';   // devtools
import logger from 'redux-logger' //logger

const BUY_CAKE='BUY_CAKE'   //action
const BUY_ICE = 'BUY_ICE'

export function buycake( number = 1 ){    // default value of the number is 1  --> if you wont define the default value at the time we can get the error
    console.log("buycake function");
    return {
        type:BUY_CAKE,
        payload:number
    }
}
export function buyice() {
    console.log("buycake function");
    return {
        type:BUY_ICE
        
    }
}

const initialSate={
    numofcakes:11
   
}
const initialSateice={
    numofices:11
   
}
const reducerscake = (state =initialSate,action ) => {
    console.log("reducers from store",state);
            switch(action.type){
                case BUY_CAKE:
                    return { ...state,
                        numofcakes:state.numofcakes - action.payload
                        // action.payload we are geting from the funciton.
                }
                
                default:
                    return state
            }
}

const reducersice = (state =initialSateice,action ) => {
    console.log("reducers from store",state);
            switch(action.type){
                case BUY_ICE:
                    return { ...state,
                        numofices:state.numofices-1
                }
                default:
                    return state
            }
}
const rootreducer=combineReducers({
    reducerscake:reducerscake,
    reducersice:reducersice
})

const store = createStore(rootreducer,composeWithDevTools(applyMiddleware(logger)))

export default store