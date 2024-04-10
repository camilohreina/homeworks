import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ]);

  const onHandleAdd = (category) => {
    setCategories((list) => [...list, category]);
  };

  return (
    <>
      <h1>Gift Expert</h1>
      <AddCategory onAddCategory={onHandleAdd} />
      <ol>
        {categories.map((category, index) => (
          <GiftGrid key={index} category={category} />
        ))}
      </ol>
    </>
  );
};
