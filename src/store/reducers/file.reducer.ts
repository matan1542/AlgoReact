const initialState = {
    files: null
};
export function fileReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_FILES':
            return { ...state, files: action.files }
        default:
            return state
    }
}
