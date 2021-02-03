
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () =>{


    const [categories, setCategories] = useState(['Simpsons'])

    /*const handleAdd = () => {
        //Mantengo las categorias anteriores y agrego una nueva
        setCategories([...categories,'El pepe'])
        //setCategories( (cats) => [...categories,'el pepe']) //es lo mismo de arriba
    }*/
    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {
                <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                            key = {category}
                            category = {category} />
                    ))
                }
                </ol>
            }
        </>
    )

}