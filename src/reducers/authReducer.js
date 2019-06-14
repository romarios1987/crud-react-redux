import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    if (action.type === SET_CURRENT_USER) {
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        };
    } else {
        return state;
    }
}
