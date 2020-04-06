import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import taxiNameClickedActionAndDispatched from '../actions/taxiNameClickedAction';
import taxiNameDoubleClickedActionAndDispatched from '../actions/taxiNameDoubleClickedAction';

class TaxiContainer extends React.Component {

    renderTaxiNames = function(){
        console.log(this.props.taxinames);
        return this.props.taxinames.map( taxi => {
            console.log(taxi);
           

            return(
                <li key={taxi.id} 
                    onClick={()=>this.props.clickTaxi(taxi)} 
                    onDoubleClick={()=>this.props.doubleClickTaxi(taxi)}>
                     {taxi.name} &nbsp; +{taxi.likes} &nbsp; -{taxi.dislikes}
                </li>
            )
        })
    }

    
    render() { 
        return ( 
            <div>
                <h4>Taxi Names: </h4>
                <ol>
                   {this.renderTaxiNames()}
                </ol>
            </div>
         );
    }
}
 

function convertTaxiStoreToProps(taxi_store_received){
    console.log("Taxi Store Received in taxi container");
    console.log(taxi_store_received);
    return {
        taxinames: taxi_store_received.alltaxinames
    }
}

function mapPropsFunctionToActionAndDispatch(dispatch){
    return bindActionCreators({
        clickTaxi: taxiNameClickedActionAndDispatched,
        doubleClickTaxi: taxiNameDoubleClickedActionAndDispatched
    }, dispatch)
}

export default connect(convertTaxiStoreToProps, mapPropsFunctionToActionAndDispatch)(TaxiContainer);