import { useState } from "react"
import { useEffect } from "react"
import getGifs from "./getGifs"
import {GifItem} from "./GifItem"
import propTypes from "prop-types" 

export const GifGrid = ({category}) =>{
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const gifsData = await getGifs(category);
        setGifs(gifsData);
        console.log("List of Gifs:", gifsData); 
        };
            fetchData();
            }, [category]);
        
        
        return(
            <>
                <div className="category-title">{category}</div> 
                {gifs.map((gif) => (
                <GifItem key={gif.id} gif={gif} />
        ))}
           </>
        );
};

export default GifGrid