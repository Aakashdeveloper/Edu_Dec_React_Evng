import React,{Component} from 'react';
import { connect } from 'react-redux'
import {getFood} from '../actions';
import PropTypes from 'prop-types';
import Recipe from '../components/recipeListing'

class FoodItem extends Component {

    componentDidMount(){
        this.props.dispatch(getFood())
    }

    render(){
        return(
            <div>
                <Recipe foodData={this.props.recipe}></Recipe>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(">>>>",state.recipe)
    return{
        recipe:state.recipe
    }
}

FoodItem.protoTypes={
    dispatch:PropTypes.func
}

FoodItem = connect(mapStateToProps,null)(FoodItem)
export default FoodItem;