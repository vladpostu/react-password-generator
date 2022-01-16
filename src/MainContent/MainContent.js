import React, { Component } from 'react';
import './MainContent.css';

import ResizedArea from '../hoc/ResizedArea/ResizedArea';
import PasswordDisplay from '../PasswordDisplay/PasswordDisplay';

class MainContent extends Component {

    state = {
        // default values 
        length: 8, 
        includeUpperLetters: false,
        includeNumbers: false,
        includeSpecialChars: false,
    }

    render() {

        const handleLength = (lengthValue) => {
            this.setState({
                length: lengthValue
            })
        }

        const handleUpperLetters = (status) => {
            this.setState({
                includeUpperLetters: status,
            }, () => {
                console.log("Include upper letters: " + this.state.includeUpperLetters)
            })
        }

        const handleNumbers = (status) => {
            this.setState({
                includeNumbers: status,
            }, () => {
                console.log("Include upper numbers: " + this.state.includeNumbers)
            })
        }

        return (
            <ResizedArea>
                <h3 className='mt-3'>Fill the module</h3>
                <div className='flex flex-column option'>
                    <label>Length - {this.state.length}</label> 
                    <input name='length' type='range' min='4' max='16' value={this.state.length} onChange={(e) => handleLength(e.target.value)} />
                </div>
                <div>
                    <label>Include upper case letters</label>
                    <input type='checkbox' name='uppercase' checked={this.state.includeUpperLetters} onChange={(e) => handleUpperLetters(e.target.checked)}/>
                </div>
                <div>
                    <label>Include numbers</label>
                    <input type='checkbox' name='numbers' checked={this.state.includeNumbers} onChange={(e) => handleNumbers(e.target.checked)}/>
                </div>
                <div>
                    <label>Include special characters</label>
                    <input type='checkbox' name='specialChars'/>
                </div>
                
                <button>Generate</button>
                
                <PasswordDisplay password='' />
            </ResizedArea>
        )
    }
}

export default MainContent;