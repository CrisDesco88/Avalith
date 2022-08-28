import React from 'react'
import { useContext } from 'react'
import { HeroesContext } from '../context/HeroesContext'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const { data, getHeroesByPublisher } = useContext(HeroesContext);
    const heroes = getHeroesByPublisher(publisher)
    console.log(data)
    

  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>       
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }     
    </div>
  )
}
