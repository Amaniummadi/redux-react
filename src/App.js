import React from 'react';
import {Provider} from 'react-redux'
import BuyCake from './components/BuyCake'
import store from './redux/store'
// import store from './redux/apistore'
import BuycakeswithHooks from './components/BuycakeswithHooks';
import Buyices from './components/Buyices';
import Newcakecontainer from './components/Newcakecontainer';
// import UserDetailwithApi from './components/UserDetailwithApi';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <BuyCake/>
          <BuycakeswithHooks/>
          <Buyices/>
          <Newcakecontainer/>
          {/* <UserDetailwithApi/> */}
        </Provider>
    </div>
  );
}

export default App;
