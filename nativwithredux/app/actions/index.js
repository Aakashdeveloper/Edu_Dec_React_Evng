/*const url = 'https://ngapi4.herokuapp.com/api/getProducts'

export function getProduct () {
    return {
      type: 'GET_PRODUCT',
      payload: {
        promise: fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          }).then(function(response) {
              return response.json()
          }).catch(function(err) {
            return err;
          })
      }
    }
  }*/

import getProduct from '../services/getDat';

const productActions = {
  PENDING: 'FETCH_PRODUCT_PENDING',
  FULFILLED: 'FETCH_PRODUCT_FULFILLED',
  REJECTED: 'FETCH_PRODUCT_REJECTED',
};

const fetchProduct = () => (dispatch) => {
  dispatch({ type: productActions.PENDING });

  getProduct()
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: productActions.FULFILLED, payload: responseJSON }))
    .catch(error => dispatch({ type: productActions.REJECTED, payload: error }));
};


export {
    productActions,
    fetchProduct
};


  