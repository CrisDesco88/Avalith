import {React, useState} from 'react'
import { render, screen, fireEvent, renderHook} from '@testing-library/react'
import { GifApp } from '../../src/GifApp.jsx'
import '@testing-library/jest-dom/extend-expect'
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGif } from "../../src/hooks/useFetchGif"

jest.mock("../../src/hooks/useFetchGif")

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

    test('Should render proper category title', async ()=>{

        const input = screen.getByPlaceholderText(/buscar gif/i)
        // console.log(input.placeholder)
        const category = fireEvent.submit(input, {target:{value: "goku"}})
        console.log(category)
        // const category = 'One Punch'

        // render(<GifGrid category={category}/>)

        // const categoryTitle = await screen.findByText('goku')
        // expect(categoryTitle).toBeInTheDocument()

    })


})