import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveCorrectAC, saveIncorrectAC } from '../../store/actions/mainActions';


function Image({imageURL, species}) {
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    


    function saveAnswer(event) {
        const selectedSpecies = event.target.value;
        if (selectedSpecies === species) {
            dispatch(saveCorrectAC(image));
            console.log('correct')
        } else {
            dispatch(saveIncorrectAC(image));
            console.log('incorrect')
        }    

    }

    useEffect(() => {
        fetch(imageURL)
            .then((res) => res.blob())
            .then((blob) => {
            const objectURL = URL.createObjectURL(blob);
            setImage(objectURL);
            })
            .catch((error) => console.log(error));
        }, [imageURL]);

    return (
        <div>
            {image && <img src={image} alt="Character" />}
            <div className="buttons">
                <button onClick={saveAnswer} value="Human">Human</button>
                <button onClick={saveAnswer} value="Alien">Alien</button>
            </div>
            
        </div>
    );
}

export default Image;