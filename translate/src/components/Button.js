import React from 'react';
// importing the context object
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    // hooking up a context object to a class component
    static contextType = LanguageContext; // Button.contextType = LanguageContext

    render() {
        console.log(this.context); // now have reference to the 'english' default value from LanguageContext.js
        return (
            <button className="ui button primary">
                Submit
            </button>
        )
    }
}

export default Button;