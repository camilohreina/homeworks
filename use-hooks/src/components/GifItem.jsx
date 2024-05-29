import { useState, useEffect } from "react"
import getGifs from "./getGifs"
import propTypes from 'prop-types'; 

export const GifItem = ({gif}) => {
    return (
        <div className="gif-grid">
            <img src={gif.url} alt={gif.title} />
        </div>
    );
};