import React, { useState } from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { buycake } from '../redux/store'

// we are using the hooks , so no need to use the connect()


const BuycakeswithHooks = () => {
    const [number, setNumber] = useState(2)

    const numofices = useSelector(state => state.reducerscake.numofcakes)
    const dispatch = useDispatch()
    return (
        <div>
              <div>
            <h1>hello welcome to website with hooks {numofices} </h1>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>

            <button onClick={ () => dispatch(buycake(number))}>Buycake</button>

            {/* <button onClick={ (number) => dispatch(buycake(number))}>Buycake</button>  // this line is not correct  */}
        </div>
        </div>
    )
}

export default BuycakeswithHooks
