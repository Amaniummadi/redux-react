import React from 'react'
import {connect} from 'react-redux'
import {buycake } from '../redux/store'

const BuyCake = (props) => {
    console.log("buycake compnent");
    return (
        <div>
            <h1>hello welcome to website {props.numofcakes} </h1>
            <button onClick={props.buycake}>Buycake</button>
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
        buycake : () =>dispatch(buycake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BuyCake)
