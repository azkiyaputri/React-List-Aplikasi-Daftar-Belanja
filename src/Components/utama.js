import React from 'react'
import {Switch, Route} from 'react-router-dom';


import List from './List';

const Utama = () => (
    <Switch>
        
        <Route path="/list" component={List} />
    </Switch>
    
)
export default Utama;