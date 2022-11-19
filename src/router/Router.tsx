import { VFC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { HeaderLayout } from "../templates/HeaderLayout";
import { FlashCards } from "../components/pages/FlashCards";
import { FlashCardsLists } from "../components/pages/FlashCardsLists";

export const Router: VFC = memo(() => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<HeaderLayout />}>
				<Route path="/home" element={<FlashCardsLists />} />
				<Route path="/home/Flashcard" element={<FlashCards />} />
			</Route>
		</Routes>
	);
});
