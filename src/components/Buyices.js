import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { buyice } from '../redux/store'

// we are using the hooks , so no need to use the connect()


const Buyices = () => {
    const numofices = useSelector(state => state.reducersice.numofices)
    const dispatch = useDispatch()
    return (
        <div>
              <div>
            <h1>hello welcome to website with hooks ices {numofices} </h1>
            <button onClick={ () => dispatch(buyice())}>Buyices</button>
        </div>
        </div>
    )
}

export default Buyices
