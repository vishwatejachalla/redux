const taxiLikeChangeButtonClickedAndDispatched = function(taxi){
    console.log("In like change action creator");
    console.log(taxi);
    return ({
        type:'TAXI_LIKE_CHANGE',
        payload: taxi
    })
}

export default taxiLikeChangeButtonClickedAndDispatched