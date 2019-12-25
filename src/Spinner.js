import React from 'react';

const Spinner = (props) =>{

    return(
        <div className="ui active dimmer">
            <div className="ui text loader">{props.text}</div>
        </div>
    );
};

/*Default Props in case the user forgets to 
pass the loading message when using this component.
*/
Spinner.defaultProps = {
    text: 'Loading..'
};


export default Spinner;