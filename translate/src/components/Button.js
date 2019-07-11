import React from "react";
// importing the context object
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  /*

    // hooking up a context object to a class component using a default value
    static contextType = LanguageContext;
    // ^ same as: Button.contextType = LanguageContext

    /* 
      even when we use the Provider to feed data into the context object,
      we can still use the contextType to access/pull out data from the context object 
    */

  render() {
    /*
      now have reference to the 'english'
      default value from LanguageContext.js
    */

    // console.log(this.context);

    /* 
      thanks to the default value of our context type (LanguageContect),
      we can access 'this.context', and assign it to text. But
      without a Provider, we would have to manually change the default
      value back in LanguageContext if we want a different language
      featured in the button
    */

    // const text = this.context === 'english' ? 'Submit' : '보내기';
    return (
      <ColorContext.Consumer>
      {(color) =>
        <button className={`ui button ${color}`}>
          {/* text is assigned the default value from context object (LanguageContext) */}
          {/* {text} */}

          {/* pulling out data from context object using the consumer method */}
          <LanguageContext.Consumer>
            {/* function below will be invoked by Consumer and value is from Provider (in App.js) */}
            {(value) => value === "english" ? "Submit" : "보내기"}
          </LanguageContext.Consumer>
        </button>
    }
      </ColorContext.Consumer>
    );
  }
}

export default Button;

/*

  if we don't want to have too much login in our function of the 
  Consumer component, we can create a helper function above the render
  method like so:

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : '보내기'
  }

  then, the function in Consumer will look like:
  {(value) => this.renderSubmit(value)}

*/

/*

  if we want to add another context object to colorize a button depending on a className

  above render method:

  colorSubmit(color) {
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {value => this.renderSubmit(value)}
      </LanguageContext.Consumer>
    </button>
  }

  then, inside our return:

  <ColorContext.Consumer>
    {color => this.colorSubmit(color)}
  </ColorContext.Consumer>

*/