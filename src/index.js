import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    //constructor
 

    state = {lat: null, errorMessage: ''};
    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude,errorMessage:null}),
            (error) => this.setState({lat:null,errorMessage:error.message})
            
        );
    }

    componentDidUpdate(){
        
    }

    /*
    Helper function to render content
    */
   renderContent(){

        if(this.state.errorMessage && !this.state.lat){
            return(
                <div>
                    
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay latProp={this.state.lat}/>;
        }
        else{
            return(
                <Spinner text="Waiting for user to allow location access!"/>
            );
        }

   }

    //mandatory render method
    render(){
        return(
           <div>
               {this.renderContent()}
           </div>
        );
        
        
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));