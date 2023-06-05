import React from 'react';
import { useSelector } from 'react-redux';

function IncorrectAnswers() {
    const incorrectAnswers = useSelector(store => store.incorrectStore)
    return (
        <div>
            <h2>Incorrect Answers</h2>
            {incorrectAnswers.map((imageURL, index) => (
            <img src={imageURL} alt="Incorrect" key={index} />
            ))}
        </div>
    );
}

export default IncorrectAnswers;