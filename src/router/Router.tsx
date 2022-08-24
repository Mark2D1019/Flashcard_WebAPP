import { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { HeaderLayout } from "../templates/HeaderLayout";
import { FlashCards } from "../components/pages/FlashCards";

export const Router: VFC = memo(() => {
	return (
		<Routes>
			<Route path="/" element={<HeaderLayout />}>
				<Route path="/" element={<FlashCards />} />
			</Route>
		</Routes>
	);
});
