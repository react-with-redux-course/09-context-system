import React from "react";
// importing the context object
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  /*

    // hooking up a context object to a class component using a default value
    static contextType = LanguageContext;
    // ^ same as: Button.contextType = LanguageContext

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
          <LanguageContext.Consumer>
            {value => (value === "english" ? "Submit" : "보내기")}
          </LanguageContext.Consumer>
        </button>
    }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
