/**
 * Created by sertac.turkel on 13/07/2017.
 */
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import sample from "./reducers/sampleReducer";


export default createStore(
    combineReducers({
        sample
    }),
    {},
    applyMiddleware(logger));
