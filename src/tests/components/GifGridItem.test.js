import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />',()=>{

    const title = 'un titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow( <GifGridItem title={title} url={url} />)

    test('debe de mostrar el componente correctamente',()=>{
        
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener un parrafo con el title',()=>{
        const parrafo = wrapper.find('p')
        expect(parrafo.text().trim()).toBe(title)
    })

    test('debe de tener la imagen igual al url y al de los props',()=>{
        const imagen = wrapper.find('img')
        //prop de la etiqueta img
        expect(imagen.prop('src')).toBe(url)
        expect(imagen.prop('alt')).toBe(title)
    })
    
    test('debe de tener animate_fadeIn en el className',()=>{

        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes(div.prop('className'))).toBe(true)
    })
})
