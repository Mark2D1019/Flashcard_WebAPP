import { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { CheckWord } from "../components/pages/CheckWord";
import { FlashCard } from "../components/pages/FlashCard";

export const Router: VFC = memo(() => {
	return (
		<Routes>
			{/* <Route path="/" element={<CheckWord />} /> */}
			<Route path="/" element={<FlashCard />} />
		</Routes>
	);
});
