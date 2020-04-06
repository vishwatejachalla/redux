export default function taxiNameDoubleClickedAndActionReceived(state = null, action){
    console.log("Dispatched double click action is received!");
    console.log(action);
    switch (action.type) {
        case 'TAXI_NAME_DOUBLE_CLICKED':
            console.log("Taxi name is double clicked: " + JSON.stringify(action.payload));
            return action.payload    
        default:
            break;
    }


    return state

}