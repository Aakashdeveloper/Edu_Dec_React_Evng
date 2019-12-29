const url = 'http://localhost:8900/products'

export function getProduct(){
    const output = fetch(url, {method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_PRODUCT',
        payload: output
    }
}