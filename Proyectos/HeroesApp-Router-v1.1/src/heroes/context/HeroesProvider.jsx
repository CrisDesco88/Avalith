import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { HeroesContext } from "./HeroesContext";

export const HeroesProvider = ({ children }) => {
	const { data, isLoading } = useFetch("https://akabab.github.io/superhero-api/api/all.json");

	const getPublishers = () => {
		const publishers = data
			?.map((hero) => hero.biography.publisher)
			.filter(
				(currentValue, index, array) =>
					array.indexOf(currentValue) === index && currentValue != null
			);
		return publishers;
	};

	const getHeroesByPublisher = (publisher) => {
		publisher = publisher.toLowerCase().trim();
		if (publisher.length < 1) return [];
		console.log(data);
		return data?.filter((hero) => {
			return hero.biography?.publisher?.toLowerCase().includes(publisher);
		});
	};

	return (
		<HeroesContext.Provider
			value={{
				data,
				isLoading,
				getPublishers,
				getHeroesByPublisher,
			}}
		>
			{children}
		</HeroesContext.Provider>
	);
};
