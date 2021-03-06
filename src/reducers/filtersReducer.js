/**
 * Created by sertac.turkel on 19/07/2017.
 */
const filtersReducer = (state = {
    isClicked: true,
    isReportsClicked: true
}, action) => {
    switch (action.type) {
        case "CATCH_CLICK":
            state = {
                ...state,
                isClicked: action.payload
            };

            break;
        case "CATCH_REPORTS_CLICK":
            state = {
                ...state,
                isReportsClicked: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};

export default filtersReducer;