import { useState } from 'react';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ]);
  const [category, setCategory] = useState('');

  const onHandleAdd = () => {
    setCategories((list) => [...list, category]);
    setCategory('');
  };
  const onSetCategory = (evt) => {
    setCategory(evt.target.value);
  };

  return (
    <>
      <h1>Gift Expert</h1>
      <input type="text" value={category} onChange={onSetCategory} />
      <button onClick={onHandleAdd}>Add Category</button>
      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </>
  );
};
