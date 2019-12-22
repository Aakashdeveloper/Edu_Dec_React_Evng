import React, {Component} from 'react';
const MyContext = React.createContext();


class MyProvider extends Component {
    state={
        city:'London'
    }


    render(){
        return(
            <MyContext.Provider value={{
                state:this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


class City extends Component{

    render(){
        return(
            <div className="city">
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi to {context.state.city}</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

class City1 extends Component{
    render(){
        return(
            <div className="city">
                <MyContext.Consumer>
                    {(context) => (
                        <p>Hi to {context.state.city} 2</p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

const Country = (props) => {
    return(
        <div className="country">
           <City/> 
           <City1/>
        </div>
    )
}


class ContextComponent extends Component {
    render(){
        return(
            <MyProvider>
                <div>
                    <p>This is Context Component</p>
                    <Country/>
                </div>
            </MyProvider>
        )
    }
}


export default ContextComponent;