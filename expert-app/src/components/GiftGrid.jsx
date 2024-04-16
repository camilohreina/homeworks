import PropTypes from 'prop-types';
import { useEffect } from 'react';

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=z3CViMAMJ5ltyBhUHxUaAMve2e6G7p0B`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
};

export const GiftGrid = ({ category }) => {
  useEffect(() => {
    //getGifs(category);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <p>Hello World</p>
    </>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
