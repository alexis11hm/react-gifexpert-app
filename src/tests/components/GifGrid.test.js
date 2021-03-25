import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"

import '@testing-library/jest-dom'

//fingir cualquier llamada al archivo y controlar la informacion que respondra
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el <GifGrid />',()=>{

    const category = 'One punch'

    test('debe de mostrarse correctamente',()=>{

        //cuando se llama el hook en el componente regresa el valor
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} /> )
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs',() => {
        
        const gifs = [
        {
            id:'abc',
            title:'titulo',
            url:'https://localhost/any.png'
        },
        {
            id:'def',
            title:'titulo',
            url:'https://localhost/any.png'
        }
    ]

        //cuando se llama el hook en el componente regresa el valor
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} /> )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })

})