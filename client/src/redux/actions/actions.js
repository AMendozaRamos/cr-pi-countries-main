import axios from 'axios'
import { GET_ALL_COUNTRIES, GET_BY_NAME, GET_BY_ID, POST_ACTIVITY } from './actions-types';
import {FILTER , ORDER} from './actions-types';


export const getAllCountries = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/countries')
        return dispatch({ type: GET_ALL_COUNTRIES, payload: response.data })
    }
}

export const getByName = (name) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/?name=${name}`)
        return dispatch({ type: GET_BY_NAME, payload: [response.data] })
    }
}

export const getById = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({ type: GET_BY_ID, payload: [response.data] })
    }
}

export const postActivity = (activity) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:3001/activities`, activity)
        return dispatch({ type: POST_ACTIVITY, payload: [response.data] })
    }
}

export const filterContinent = (continent) => {
    return { type: FILTER, payload: continent };
}

export const orderCountries = (order) => {
    return { type: ORDER, payload: order };
}














