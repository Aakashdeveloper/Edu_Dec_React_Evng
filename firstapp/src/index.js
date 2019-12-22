import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';

const App = () => {
    return(
        <div className="maindiv">
           <Home/>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))