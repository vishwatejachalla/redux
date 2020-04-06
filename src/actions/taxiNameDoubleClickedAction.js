const taxiNameDoubleClickedActionAndDispatched = function(taxi){
    console.log("In double click action creator");
    console.log(taxi);
    return ({
        type:'TAXI_NAME_DOUBLE_CLICKED',
        payload: taxi
    })
}

export default taxiNameDoubleClickedActionAndDispatched