import { AddCategory } from "../../components/AddCategory"
import React from 'react'
import { shallow } from "enzyme"
import '@çtesting-library/jest-dom'

describe('Pruebas eb el componente',()=>{

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    beforeEach(() =>{
        //Limpiar los mocks, se usa si creamos funciones y otros mocks
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('debe de mostrarse correctamente',()=>{
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto',()=>{
        const input = wrapper.find('input')
        const value = 'hola mundo'
        //Pasando parametro a la funcion
        input.simulate('change',{
            target: { value: value }
        })

        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('no debe de postear la informacion onSubmit',()=>{
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        })
        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategories y limpiar la caja de texto',() => {
        // Simular el input change
        const value = 'Hola Mundo'
        wrapper.find('input').simulate('change',{target:{
            value: value
        }})
        // Simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault(){} })
        // SetCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))//evaluar que se haya llamado con una funcion
        // El valor del input debe de estar vacio
        expect(wrapper.find('input').prop('value')).toBe('')
    })
})