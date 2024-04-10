import { useState } from 'react';

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
