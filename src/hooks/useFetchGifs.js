import { useState, useEffect } from "react"

import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    })

    //Solo se dispara una vez cuando el componente se renderiza por primera vez
    //se hace una validacion en los [] para saber cuando se renderiza de nuevo
    //los efectos no pueden ser asincronos
    useEffect( () => {
        getGifs(category).then(imgs => {
            setState({
                    data: imgs,
                    loading: false
                })
            }
        )
        
    }, [category]) //Si la categoria cambia, entonces se volvera a ejecutar el useEffect
    

    return state //{ data: [], loading: true }
}