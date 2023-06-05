import React from 'react';
import GetImageBTN from '../GetImageBTN/GetImageBTN';
import CorrectAnswers from '../CorrectAnswers/CorrectAnswers';
import IncorrectAnswers from '../ImcorrectAnswers/IncorrectAnswers';

function Main() {
    return (
        <div>
            <h1>Rick and Morty Guessing Game</h1>      
            <GetImageBTN/> 
            <CorrectAnswers/>   
            <IncorrectAnswers/>
        </div>
    );
}

export default Main;