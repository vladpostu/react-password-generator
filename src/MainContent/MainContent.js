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
        includeSpecialCharacters: false,
        password: '',
    }

    repository = {
        lowers: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        uppers: [],
        numbers: [],
        specials: []
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
                this.state.includeUpperLetters ? this.repository.uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] : this.repository.uppers = [];
                console.log("Uppers: " + this.repository.uppers);
            })
        }

        const handleNumbers = (status) => {
            this.setState({
                includeNumbers: status,
            }, () => {
                this.state.includeNumbers ? this.repository.numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] : this.repository.numbers = [];
                console.log("Include upper numbers: " + this.state.includeNumbers)
            })
        }

        const handleSpecialCharacters = (status) => {
            this.setState({
                includeSpecialCharacters: status,
            }, () => {
                this.state.includeSpecialCharacters ? this.repository.specials = ['!', '$', '%', '&', '=', 'ç', '#'] : this.repository.specials = [];
                console.log("Include special characters: " + this.state.includeSpecialCharacters);
            })
        }

        const handlePassword = (pas) => {
            this.setState({
                password: pas,
            }, () => {
                console.log("Password: " + this.state.password);
            })
        }

        const getRandomNumber = (max) => {
          let randomNumber = Math.floor(Math.random() * (max));
          //console.log("Random number: " + randomNumber);

          return randomNumber;
        };

        const getRandomPassword = () => {
          let passwordGenerated = "";
          
          let  i=0;
          while(i<this.state.length) {
            let randomCategory = getRandomNumber(Object.values(this.repository).length);

            if(Object.values(this.repository).at(randomCategory).length != 0) {
                let randomRepository = Object.values(this.repository).at(randomCategory);
                passwordGenerated += Object.values(this.repository).at(randomCategory)[getRandomNumber(randomRepository.length)];
                i++;
            }
          }
        
          return passwordGenerated;  
        };

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
                    <input type='checkbox' name='specialCharacters' checked={this.state.includeSpecialCharacters} onChange={(e) => handleSpecialCharacters(e.target.checked)}/>
                </div>
                
                <button onClick={() => handlePassword(getRandomPassword())}>Generate</button>
                
                <PasswordDisplay key={this.state.password} password={this.state.password} />
            </ResizedArea>
        )
    }
}

export default MainContent;