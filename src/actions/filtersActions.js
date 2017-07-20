/**
 * Created by sertac.turkel on 19/07/2017.
 */
export function catchClick(isClicked){
    return {
        type:"CATCH_CLICK",
        payload: isClicked
    };
}
export function catchReportsClick(isClicked){
    return {
        type:"CATCH_REPORTS_CLICK",
        payload: isClicked
    };
}

