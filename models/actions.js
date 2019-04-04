import * as ServerApi from '../services/ServerApi' ;

export const FETCH_ALL_COORDINATES_TYPE = "FETCH_COORDINATES_TYPE";
const ActionFetchAllCoordinates = ()=> {
    return {
        type : FETCH_ALL_COORDINATES_TYPE,
    }
};
export const FETCH_ALL_COORDINATES_SUCCESS_TYPE = "FETCH_COORDINATES_SUCCESS_TYPE";

const ActionFetchAllCoordinatesSuccess = (coordinates)=> {
    return {
        type : FETCH_ALL_COORDINATES_SUCCESS_TYPE,
        coordinates : coordinates
    }
};

export const FETCH_ALL_COORDINATES_ERROR_TYPE = "FETCH_COORDINATES_ERROR_TYPE";

const ActionFetchAllCoordinatesError = (errorMsg)=> {
    return {
        type : FETCH_ALL_COORDINATES_ERROR_TYPE,
        error: errorMsg
    }
};

export const FetchAllCoordinates = ()=>{
    return (dispatch) => {
       dispatch(ActionFetchAllCoordinates());
        ServerApi.getAllCoordinates().then((coordinates) =>
            dispatch(ActionFetchAllCoordinatesSuccess(coordinates))
        ).catch((errorMsg)=>
            dispatch(ActionFetchAllCoordinatesError(errorMsg))
        );
    };
};