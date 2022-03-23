import { GET_RANDOM_CAT_FACT } from "./action-types";

const intialState = {
    facts: []
};

function reducer(state=intialState, action) {
    switch (action.type){
        case GET_RANDOM_CAT_FACT:
            debugger
            return {
                ...state,
                facts:
                action.payload
            }
        default:
            debugger
            return state
    }
}

export default reducer;