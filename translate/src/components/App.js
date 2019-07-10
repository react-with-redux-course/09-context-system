import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language: language });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag kr" onClick={() => this.onLanguageChange('korean')}/>
                </div>
                {/*
                    the value prop with context is a reserved keyword.
                    whatever the value of "value" prop is, will be passed
                    to the context object. We're not limited to strings.
                    DON'T have to make use of the state system for the 
                    value property
                */}
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
};

export default App;