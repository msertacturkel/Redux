/**
 * Created by sertac.turkel on 17/07/2017.
 */
const sampleReducer = (state = {
    x: " Default Value"
}, action) => {
    switch (action.type) {
        case "SET_TEXT":
            state = {
                ...state,
                x: action.payload
            };

            break;
        default:
            break;
    }
    return state;
};

export default sampleReducer;