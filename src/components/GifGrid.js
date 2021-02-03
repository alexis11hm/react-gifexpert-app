import React/*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    //data cambian al nombre de images, pero el contenido es lo mismo
    const {data:images, loading} = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {loading && 'Loading...'}
            <div className="card-grid">
                    {
                        //{..img} es como pasar los atributos de img [id,title, url] y su valor como props, pero de manera corta
                        images.map( (img) => (
                            <GifGridItem 
                                key={ img.id } 
                                { ...img }
                            /> 
                            )
                        )
                    }
            </div>
        </>
    )
}
