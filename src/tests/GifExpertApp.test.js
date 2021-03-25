import { shallow } from "enzyme"
import React from 'react'
import {GifExpertApp} from "../GifExpertApp"


describe('Pruebas en el <GifExpertAPP/>',()=>{


    test('se debe mostrar correctamente',()=>{
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
        }
    )

    test('debe de mostrar una lista de categorias',()=>{
        const categories = ['Simpsons','godzilla']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
        }
    )


})