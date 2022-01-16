import React from 'react'
import './MainContent.css';

import ResizedArea from '../hoc/ResizedArea/ResizedArea';
import PasswordDisplay from '../PasswordDisplay/PasswordDisplay';
import { Component } from 'react/cjs/react.production.min';

class MainContent extends Component {

    state = {
        length: 8, // default value
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

        const handleUpperLetters = () => {
            this.setState({
                includeUpperLetters: !this.includeUpperLetters,
            });
            console.log("Include upper case: " + this.state.includeUpperLetters)
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
                    <input type='checkbox' name='uppercase' onChange={() => handleUpperLetters()}/>
                </div>
                <div>
                    <label>Include numbers</label>
                    <input type='checkbox' name='numbers'/>
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