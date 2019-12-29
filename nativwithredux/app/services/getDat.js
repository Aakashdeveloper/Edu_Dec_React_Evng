const url = 'https://eduapiprod.herokuapp.com/api/getProduct'

/*export const getProduct = () => (
    fetch(url, {
      method: 'GET',
    })
  );*/


  import * as base from '../utils/base-service';
  
  const getProduct = () => base.get(url);
  
  export default getProduct;