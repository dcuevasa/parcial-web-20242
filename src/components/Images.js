import React, { useState, useEffect } from 'react';
import './Images.css';

function Images() {

    const [imageUrls, setImageUrls] = useState(["https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350"]);

    useEffect(() => {
        const fetchImages = async () => {
            const urls = [];
            for (let i = 0; i < 12; i++) {
                try {
                    const response = await fetch(`https://picsum.photos/350`);
                    urls.push(response.url);
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }
            setImageUrls(urls);
        };

        fetchImages();
    }, []);

    return (
      <div id="Images">
        {imageUrls.map((url, index) => (
          <img src={url} alt={`Random ${index}`} key={index} className="images" />
        ))}
      </div>
    );
}

export default Images;
