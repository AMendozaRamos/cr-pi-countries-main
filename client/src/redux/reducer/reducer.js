import { GET_ALL_COUNTRIES } from "../actions/actions-types";

let initialState = { getCountries: [] }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { ...state, getCountries: action.payload }
        default:
            return state;
    }


}

export default reducer;


