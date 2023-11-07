import axios from 'axios'
import { GET_ALL_COUNTRIES } from './actions-types';


export const getAllCountries = ()=>{
    return async(dispatch)=>{
        const response = await axios('http://localhost:3001/countries')
        return dispatch({type: GET_ALL_COUNTRIES , payload: response.data})
    }
}








