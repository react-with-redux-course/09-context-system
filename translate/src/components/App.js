import React from 'react';
import UserCreate from './UserCreate';

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
                <UserCreate />
            </div>
        );
    }
};

export default App;