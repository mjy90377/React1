import { useState } from "react";
import {galleryImages} from "./imgData.jsx";


export default function Carousel(){
    const [index, setIndex] = useState(0);

    function handleClick(){
        setIndex(index + 1);
        console.log(index);
    }

    let slide = galleryImages[index];
    
    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2>
                <i>{slide.name}</i>
                by {slide.artist}
            </h2>
            <h3>
                ({index + 1} of {galleryImages.length})
            </h3>
            <img src={slide.url} alt={slide.alt} />
            <p>{slide.description}</p>
        </>
    )
}