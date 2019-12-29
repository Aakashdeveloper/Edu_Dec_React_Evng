import React,{Component} from 'react';
import ListDisplay from './listDisplay';
import { connect } from 'react-redux';
import {View} from 'react-native';
import { fetchProduct } from '../actions/index'
import PropTypes from 'prop-types'
import { bindActionCreators} from 'redux';

class ListView extends Component{

    componentDidMount() {
        this.props.fetchProduct()
         
      }
   
    render(){
        return(
            <View>
                <ListDisplay proddata={this.props.product}></ListDisplay>
            </View> 
        ) 
    }
}

const mapStateToProps = (state => (
    console.log(state),
    {
    product: state.products.data,
    requesting: state.products.requesting,
    error: state.products.error,
  }));

const mapDispatchToProps = {
    fetchProduct
};

/*
function mapStateToProps(state){
    console.log("<<<",state)
    return{
        prod:state.products
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getProduct}, dispatch)
}
*/

ListView.propTypes = {

    fetchProduct: PropTypes.func.isRequired
  };
  
/*ListView.protoTypes={
    dispatch: PropTypes.func
}*/



export default connect(mapStateToProps,mapDispatchToProps)(ListView);