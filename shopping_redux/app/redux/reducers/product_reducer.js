export default function(state={}, action){
    switch(action.type){
        case 'GET_PRODUCT':
            return {...state, items:action.payload}
        default:
            return state
    }
}