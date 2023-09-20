import React from 'react';

function ImageList() {
    const imageContextCat = require.context('../Images/Cat', false, /\.jpg$/);
    const catImages = imageContextCat.keys().map(imageContextCat);
    
    return (
        <div>
            {catImages.map((src, index) => {
                return <img key={index} src={src} alt={'CAT'}></img>
            })}
        </div>
    );
}

export default ImageList;
