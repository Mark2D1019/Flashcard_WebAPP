import { memo, VFC } from "react";

import { Header } from "../organisms/layout/Header";
import { Outlet } from "react-router-dom";

export const HeaderLayout: VFC = memo(() => {
	return (
		<>
			<Header />
			{/* {children} */}
			<Outlet />
		</>
	);
});
