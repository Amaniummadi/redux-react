import React, { useState } from 'react'
import {connect} from 'react-redux'
import {buycake } from '../redux/store'
const Newcakecontainer = (props) => {
    const [number, setNumber] = useState(1)
    console.log("buycake compnent");
    return (
        <div>
            <h1>hello welcome to website {props.numofcakes} </h1>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buycake(number)}>Buycake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    console.log("mapStateToprops",state);
    return{
        numofcakes:state.reducerscake.numofcakes
    }
   
}

const mapDispatchToProps = dispatch =>{
    console.log("mapDispatchToProps", dispatch(buycake()));
    return {
        buycake : number =>dispatch(buycake(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Newcakecontainer)  



// action payload example
