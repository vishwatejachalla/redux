import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import taxiLikeChangeButtonClickedAndDispatched from '../actions/taxiLikeChangeButtonClickedAction';
import taxiDislikeChangeButtonClickedAndDispatched from '../actions/taxiDislikeChangeButtonClickedAction';

class TaxiDetailContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            taxiDetail: this.props.showTaxiDetail
        }

        this.increaseLikes = this.increaseLikes.bind(this)
        this.decreaseLikes = this.decreaseLikes.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        console.log(prevState);
        if (nextProps.showTaxiDetail != null) {
            if (nextProps.showTaxiDetail.id !== prevState.id) {
                return {
                    taxiDetail: nextProps.showTaxiDetail
                }
            } else {
                return null
            }
        } else {
            return null
        }


    }

    increaseLikes = function () {
        //increase the value of likes by 1 in the taxiDetail state
        console.log("Changing likes in taxiDetail!");
        // eslint-disable-next-line
        this.setState(taxiDetail => (this.state.taxiDetail.likes = this.state.taxiDetail.likes + 1, taxiDetail))
        console.log(this.state.taxiDetail);
        //pass the taxiDetail state as a parameter to this.props.changeLikes
        this.props.changeLikes(this.state.taxiDetail)
    }

    decreaseLikes = function () {
        //decrease the value of dislikes by 1 in the taxiDetail state
        // eslint-disable-next-line
        console.log("Changing dislikes in taxiDetail!");
        // eslint-disable-next-line
        this.setState(taxiDetail => (this.state.taxiDetail.dislikes = this.state.taxiDetail.dislikes - 1, taxiDetail))
        console.log(this.state.taxiDetail);
        //pass the taxiDetail state as a parameter to this.props.changeDislikes
        this.props.changeDislikes(this.state.taxiDetail)
    }

    render() {
        console.log(this.state.taxiDetail);
        console.log(this.props.showTaxiDetail);
        if (this.state.taxiDetail === null) {
            return (
                <h4>Click on taxi name above to read details....</h4>
            )
        } else {
            return (
                <div>
                    <h4>Taxi details....</h4>
                    Taxi ID: {this.state.taxiDetail.id} <br />
                    Taxi Name: {this.state.taxiDetail.name} <br />
                    Taxi Likes: {this.state.taxiDetail.likes}
                                &nbsp;
                    <button
                        onClick={this.increaseLikes}>
                        Like
                                </button><br />
                    Taxi Dislikes: {this.state.taxiDetail.dislikes}
                                &nbsp; <button
                                onClick={this.decreaseLikes}>DisLike</button><br />
                    City Present: {this.state.taxiDetail.active_city} <br />
                    City Planning: {this.state.taxiDetail.city_planning} <br />
                    Reviews Count: {this.state.taxiDetail.reviews} <br />

                </div>
            );
        }
    }
}

function convertTaxiStoreToPropsForDetail(store) {
    console.log("Store Received for taxidetail container");
    console.log(store);
    return {
        showTaxiDetail: store.taxiClicked
    }
}

function mapFunctionPropsToActionAndDispatch(dispatch) {
    return bindActionCreators({
        changeLikes: taxiLikeChangeButtonClickedAndDispatched,
        changeDislikes:taxiDislikeChangeButtonClickedAndDispatched
    }, dispatch)
}

export default connect(convertTaxiStoreToPropsForDetail, mapFunctionPropsToActionAndDispatch)(TaxiDetailContainer);