import { useState } from "react";

export const GiftExpertApp = () => {

    const [categories,setCategories] = useState([]);
    const [category,setCategory] = useState('');

    const onAddCategory = () => {
        setCategories(list => [...categories,category])
        setCategory('');
    }
    const onSetCategory = (event) => {
        setCategory(event.target.value);
    }

    return (
    <>
        <h1> GiftExpert </h1>
        <input type="text" value={category} onChange={(evt) => onSetCategory(evt)} />
        <button onClick={() => onAddCategory() }> Add category </button>
        <ol>
            {
                categories.map(
                    (category,key) =>
                    {
                        return <li key={key}> {category } </li>
                    }
                )
            }
        </ol>
    </>
    )
}
export default GiftExpertApp;