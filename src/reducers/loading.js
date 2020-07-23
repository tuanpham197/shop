import * as types from '../constants/ActionType';

var initialState = {
    loading : false
}

const load = (state = initialState,action)=>{
    switch(action.type){
        case types.SHOW_LOADING:
            console.log("loading....");
            state.loading = true;
            return {...state};
        case types.HIDE_LOADING:
            state.loading = false;
            return {...state};
        default :
            return {...state};
    }
}

export default load;