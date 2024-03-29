import React, { useMemo } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { HeroesContext } from '../context/HeroesContext';
// import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {

  const { heroId } = useParams();

  const { isLoading, getHeroById} = useContext(HeroesContext);

  const hero = useMemo(() => getHeroById( parseInt(heroId) ), [heroId])

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }
    
  return (
		<>
			{!isLoading && (
				<div className="row mt-5">
					<div className="col-4 animate__animated animate__fadeInLeft">
						<img
							src={`/assets/heroes/${heroId}.jpg`}
							alt={hero.superhero}
							className="img-thumbnail"
						/>
					</div>
					<div className="col-8">
						<h3>{hero.superhero}</h3>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<b>Alter ego: </b>
								{hero.alter_ego}
							</li>
							<li className="list-group-item">
								<b>Publisher: </b>
								{hero.publisher}
							</li>
							<li className="list-group-item">
								<b>First Appareance ego: </b>
								{hero.first_appearance}
							</li>
						</ul>
						<p>{hero.characters}</p>

						<button
							className="btn btn-outline-primary"
							onClick={onNavigateBack}
						>
							Back...
						</button>
					</div>
				</div>
			)}
		</>
	);
}
