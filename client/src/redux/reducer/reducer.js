import { GET_ALL_COUNTRIES, GET_BY_NAME, GET_BY_ID, POST_ACTIVITY } from "../actions/actions-types";
import {FILTER , ORDER} from "../actions/actions-types";

let initialState = { getCountries: [], countriesCopy: [], create: [] }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { ...state, getCountries: action.payload, countriesCopy: action.payload }

        case GET_BY_NAME:
            return { ...state, getCountries: action.payload }

        case GET_BY_ID:
            return { ...state, getCountries: action.payload }

        case POST_ACTIVITY:
            return { ...state, create: action.payload }


        case FILTER:
            const filterByContinent = state.countriesCopy.filter((country) => country.continent === action.payload);
            return { ...state, getCountries: filterByContinent }

        case ORDER:
            if (action.payload == "Ascendente") {
                const orderUp = [...state.getCountries].sort((a, b) => a.name.localeCompare(b.name));
                return { ...state, getCountries: orderUp }
            }
            if (action.payload == "Descendente") {
                const orderDown = [...state.getCountries].sort((a, b) => b.name.localeCompare(a.name));
                return { ...state, getCountries: orderDown }
            }

            if (action.payload == "Population") {
                const orderPopulation = [...state.getCountries].sort((a, b) => (a.population - b.population));
                return { ...state, getCountries: orderPopulation }
            }

        default:
            return state;
    }


}

export default reducer;


