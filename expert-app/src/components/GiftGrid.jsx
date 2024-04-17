import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
