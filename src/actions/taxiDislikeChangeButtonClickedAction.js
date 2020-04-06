const taxiDislikeChangeButtonClickedAndDispatched = function(taxi){
    console.log("In Disike change action creator");
    console.log(taxi);
    return ({
        type:'TAXI_DISLIKE_CHANGE',
        payload: taxi
    })
}

export default taxiDislikeChangeButtonClickedAndDispatched