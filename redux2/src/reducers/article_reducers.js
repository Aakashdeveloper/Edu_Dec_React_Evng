export default function(state={},action){
        switch(action.type){
            case 'GET_LATEST':
                return {...state,latest:action.payload}
            case 'GET_ARTICLES':
                return {...state,artdata:action.payload}
            default:
                return state
        }
}


