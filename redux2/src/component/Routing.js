import React, {Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';

import Header from './Header';
import Footer from './Footer';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                        <Route exact path="/" component={Home}></Route>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing