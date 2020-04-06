import React from 'react';
import TaxiContainer from './containers/taxi';
import TaxiDetailContainer from './containers/taxidetail';
import TaxiReviewContainer from './containers/taxireview';


class RootComponent extends React.Component {
    
    render() { 
        return ( 
            <div>
                <h1>React Redux App!!!!</h1>
                <hr />
                <TaxiContainer></TaxiContainer>
                <hr />
                <TaxiDetailContainer></TaxiDetailContainer>
                <hr />
                <TaxiReviewContainer></TaxiReviewContainer>
            </div>
         );
    }
}
 
export default RootComponent;