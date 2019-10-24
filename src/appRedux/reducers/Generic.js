import { GET_GENERIC_SUCCESS } from '../../constants/ActionTypes';
export default function (state = {}, action) {
	switch (action.type) {
		case GET_GENERIC_SUCCESS:
			return { ...state, [action.payload.type]: action.payload[action.payload.type] };
	}
	return state;
}