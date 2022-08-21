import { memo, ReactNode, VFC } from "react";

import { Button } from "@chakra-ui/react";

type Props = {
	onClick: (id: number) => void;
	children: ReactNode;
};

export const SimpleButton: VFC<Props> = memo((props) => {
	const { children, onClick } = props;
	return (
		<Button
			w={150}
			h={70}
			bg="teal.400"
			color="white"
			_hover={{ opacity: 0.8 }}
			onClick={onClick}
		>
			{children}
		</Button>
	);
});
