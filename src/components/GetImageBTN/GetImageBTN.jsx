import React from 'react';
import { useState } from 'react';
import Image from '../Image/Image';

function GetImageBTN() {
    const [imageURL, setImageURL] = useState('')
    const [species, setSpecies] = useState('')

    
    function getImage() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(data => {                
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const imageURL = data.results[randomIndex].image;
                const species = data.results[randomIndex].species;
                setImageURL(imageURL)
                setSpecies(species)                
            })
            .catch(error => console.log(error));

    }

    return (
        <div>
            <div className="getImage">
                <button type="button" className="getImageBTN" onClick={getImage}>
                    GUESS!
                </button> 
            </div>
            <div className="image">
                {imageURL && <Image imageURL={imageURL} species={species}/>}
            </div>
        </div>        
    );
}

export default GetImageBTN;