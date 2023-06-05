import React, { useState, useEffect } from 'react';


function Image({imageURL}) {
    const [image, setImage] = useState(null);

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
                <button>Human</button>
                <button>Alien</button>
            </div>
            
        </div>
    );
}

export default Image;