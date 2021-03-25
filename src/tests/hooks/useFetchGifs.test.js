import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook personalizado',() => {

    test('debe retornar el estado inicial', async () => {
        
        //Rs necesario cuando se habla de hooks
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifs('King kong'))
        const {data,loading} = result.current
        await waitForNextUpdate()
        expect(data).toEqual([])
        expect(loading).toBe(true)

    })

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const {result,waitForNextUpdate} = renderHook( () => useFetchGifs('King kong'))
        await waitForNextUpdate()
        const {data,loading} = result.current
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

})