import React from 'react';
import { Provider } from 'mobx-react';
import './style.scss';
import store from './store';
import RootRoute from './rootRoute/index';

class App extends React.PureComponent{
    constructor(){
        super()
    }

    render() {
        return (
            <Provider store={new store()}>
                <RootRoute/>
            </Provider>
        )
    }
}

export default App;