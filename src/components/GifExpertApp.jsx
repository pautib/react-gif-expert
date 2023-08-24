import React, {useState} from 'react'
import {AddCategory, GifGrid} from "./";
export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);
    const onAddCategory = (value) => {

        if (categories.includes(value)) {
            return;
        }

        setCategories([...categories, value]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)}/>

            {
                categories.map( (cat) => ( <GifGrid key={cat} category={cat} /> ) )
            }
        </>
    )
}
