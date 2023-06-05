import React from 'react';
import { useState } from 'react';
import Image from '../Image/Image';

function GetImageBTN() {
    const [imageURL, setImageURL] = useState('')

    function getImage() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const randomURL = data.results[randomIndex].image;
                setImageURL(randomURL)
            })
            .catch(error => console.log(error));

    }

    return (
        <div>
            <div className="getImage">
                <button className="getImageBTN" onClick={getImage}>
                    GUESS!
                </button> 
            </div>
            <div className="image">
                {imageURL && <Image imageURL={imageURL} />}
            </div>
        </div>        
    );
}

export default GetImageBTN;