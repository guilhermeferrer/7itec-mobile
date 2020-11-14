const initialState = {
    users: []
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case '@USERS/GET_ALL_USERS':
            return {
                ...state,
                loading: true,
                user: []
            }
        case '@USERS/GET_ALL_USERS_SUCCESS':
            return {
                ...state,
                users: action.response.data[0],
                loading: false
            }
        default:
            return state;
    }
} 