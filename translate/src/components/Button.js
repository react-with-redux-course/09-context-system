import React from "react";
// importing the context object
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  /*

    // hooking up a context object to a class component
    static contextType = LanguageContext;
    // ^ same as: Button.contextType = LanguageContext

    */

  render() {
    /*
            now have reference to the 'english'
            default value from LanguageContext.js
        */
    // console.log(this.context);

    // const text = this.context === 'english' ? 'Submit' : '보내기';
    return (
      <ColorContext.Consumer>
      {(color) =>
        <button className={`ui button ${color}`}>
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
