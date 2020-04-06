import { combineReducers } from "redux";
import taxiService from "./reducer-taxiservice";
import taxiNameClickedAndActionReceived from "./reducer-taxiname_clicked";
import taxiNameDoubleClickedAndActionReceived from "./reducer-taxiname_doubleclicked";
import taxiLikeChangeAndActionReceived from "./reducer-taxilikechange";
import taxiDislikeChangeAndActionReceived from "./reducer-taxidislikechange"
import getRemoteUsers from "./reducer-remoteuser";

const allTaxiReducers = combineReducers({
    alltaxinames: taxiLikeChangeAndActionReceived,
    alltaxiservices: taxiService,
    taxiClicked:taxiNameClickedAndActionReceived,
    taxiDoubleClicked: taxiNameDoubleClickedAndActionReceived,
    taxiLikeChange: taxiLikeChangeAndActionReceived,
    taxiDislikeChange:taxiDislikeChangeAndActionReceived,
    remoteUsers: getRemoteUsers
})

export default allTaxiReducers