import axios from 'axios';
import { GET_RANDOM_CAT_FACT} from './action-types';

const URL = 'https://catfact.ninja/fact'; 

export const getRandomCatFact = () => dispatch => {
    axios.get(URL)
    .then(res => {
        dispatch({ type: GET_RANDOM_CAT_FACT, payload: res.data.fact})
    })
    .catch(err => {
    })
}