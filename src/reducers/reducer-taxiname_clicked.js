export default function taxiNameClickedAndActionReceived(state = null, action){
    console.log("Dispatched click action is received!");
    console.log(action);
    switch (action.type) {
        case 'TAXI_NAME_CLICKED':
            console.log("Taxi name is clicked: " + JSON.stringify(action.payload));
            return action.payload
       
        default:
            break;
    }


    return state

}