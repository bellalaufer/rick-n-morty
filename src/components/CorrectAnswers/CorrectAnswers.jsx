import React from 'react';
import { useSelector } from 'react-redux';

function CorrectAnswers() {
    const correctAnswers = useSelector((store) => store.correctStore);
    
    return (
        <div>
            <h2>Correct Answers</h2>            
            {correctAnswers.map((imageURL, index) => (
                <img key={index} src={imageURL} alt="Correct" />
        ))}
        </div>
    );
}

export default CorrectAnswers;