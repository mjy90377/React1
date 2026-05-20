import { useState } from "react";
import {galleryImages} from "./imgData.jsx";
import style from "./Carousel.module.css"

export default function Carousel(){
    const [index, setIndex] = useState(0);

    function handleNext(){
        if(index === galleryImages.length - 1){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }
        console.log(index);
    }

    function handlePrevious(){
        if(index === 0){
            setIndex(galleryImages.length - 1);
        }else{
            setIndex(index - 1);
        }
        console.log(index);
    }

    let slide = galleryImages[index];
    
    return (
        <section className={style.wrapper}>   
            <h2>
                <i>{slide.name}</i>
                by {slide.artist}
            </h2>
            <h3>
                ({index + 1} of {galleryImages.length})
            </h3>
            <img src={slide.url} alt={slide.alt} />
            <button onClick={handlePrevious} className={style.button}>Previous</button>
            <button onClick={handleNext} className={style.button}>Next</button>
            <p>{slide.description}</p>
        </section>
    )
}