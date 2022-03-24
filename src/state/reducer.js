import { GET_RANDOM_CAT_FACT } from "./action-types";

const intialState = {
    facts: []
};

function reducer(state=intialState, action) {
    switch (action.type){
        case GET_RANDOM_CAT_FACT:
            return {
                ...state,
                facts:
                action.payload
            }
        default:
            return state
    }
}

export default reducer;