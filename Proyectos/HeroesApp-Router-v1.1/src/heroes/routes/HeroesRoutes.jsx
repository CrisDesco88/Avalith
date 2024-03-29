import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { HeroesProvider } from "../context/HeroesProvider";
import { HeroesByPublisherPage } from "../pages/HeroesByPublisherPage";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
	return (
		<>
			<HeroesProvider>
				<Navbar />

				<div className="container">
					<Routes>
						<Route path="/:publisher" element={<HeroesByPublisherPage />} />
						<Route path="search" element={<SearchPage />} />
						<Route path="hero/:heroId" element={<HeroPage />} />

						<Route path="/" element={<Navigate to="/marvel" />} />
					</Routes>
				</div>
			</HeroesProvider>
		</>
	);
};
