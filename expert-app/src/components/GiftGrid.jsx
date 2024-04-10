import PropTypes from 'prop-types';
export const GiftGrid = ({ category }) => {
  return <li>{category}</li>;
};

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
