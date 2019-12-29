import React,{Component} from 'react';
import ListDisplay from './listDisplay'
import {View} from 'react-native';

class ListView extends Component{

    componentDidMount(){
        this.props.dispatch(getProduct())
    }
   
    render(){
        return(
            <View>
                <ListDisplay proddata={this.props.prod.items}></ListDisplay>
            </View> 
        ) 
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
        prod:state.products
    }
}

ListView.protoTypes={
    dispatch: PropTypes.func
}


export default connect(mapStateToProps)(ListItem);