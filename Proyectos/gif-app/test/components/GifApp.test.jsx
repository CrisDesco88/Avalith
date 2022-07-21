import {React, useState} from 'react'
import { render, screen, fireEvent, renderHook, getAllByRole} from '@testing-library/react'
import { GifApp } from '../../src/GifApp.jsx'
import '@testing-library/jest-dom/extend-expect'
import { GifGrid } from "../../src/components/GifGrid"
// import { useFetchGif } from "../../src/hooks/useFetchGif"

// jest.mock("../../src/hooks/useFetchGif")

describe('Test en <GifApp/>', () => { 

    beforeEach(() => {
        render(<GifApp />)
      })

    test('Should Render main title', () => {

        const title = screen.getByRole('heading', {level: 1})
        expect(title).toHaveTextContent('GifApp')

    })

    test('Should render search input', ()=>{
        const input = screen.getByPlaceholderText(/buscar gif/i)
        expect(input).toBeInTheDocument()
    })

    test('Should render RESSET ALL! button', ()=>{
        const button = screen.getByRole("button", {name: "RESET ALL!"})
        expect(button).toBeInTheDocument()
    })

    test('Inital state of categories should be []', ()=> {

        const {result} = renderHook( () => useState([]))

        const categories = result.current

        expect(categories[0]).toEqual([])
    })

    test('Should render proper category title',()=>{
        screen.debug()
        const input = screen.getByPlaceholderText(/buscar gif/i)
        const form = screen.getByRole('form');
        
        fireEvent.change(input, {target:{value: "goku"}})
        fireEvent.submit(form)
 
        screen.debug()
        const categoryTitle = screen.getByRole('heading', {name: "Category: goku"})
        expect(categoryTitle).toBeInTheDocument()
        screen.debug()

    })


})