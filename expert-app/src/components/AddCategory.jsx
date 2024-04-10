import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
  const [category, setCategory] = useState('');
  const onSetCategory = (evt) => {
    setCategory(evt.target.value);
  };

  const onHandleAddCategory = () => {
    onAddCategory(category);
    setCategory('');
  };

  return (
    <>
      <input type="text" value={category} onChange={onSetCategory} />
      <button onClick={onHandleAddCategory}>Add Category</button>
    </>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
