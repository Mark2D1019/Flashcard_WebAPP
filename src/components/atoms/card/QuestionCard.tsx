import { ReactNode, memo, VFC } from "react";

import { Flex, Heading, Box } from "@chakra-ui/react";

type Props = {
	children: ReactNode;
	onClick: () => void;
};

export const QuestionCard: VFC<Props> = memo((props) => {
	const { onClick, children } = props;

	return (
		// <Flex align="center" justify="center" height="30vh">
		<Box bg="white" w="60%" p={10} borderRadius="md" shadow="md">
			<Heading as="h2" size="lg" textAlign="center" onClick={onClick}>
				{children}
			</Heading>
		</Box>
		// </Flex>
	);
});
