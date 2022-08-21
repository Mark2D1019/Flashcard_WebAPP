import { ReactNode, memo, VFC } from "react";

import { Flex, Heading, Box } from "@chakra-ui/react";

type Props = {
	children: ReactNode;
};

export const AnswerCard: VFC<Props> = memo((props) => {
	const { children } = props;

	return (
		// <Flex align="center" justify="center" height="1vh">
		<Box mt={0} bg="white" w="60%" p={10} borderRadius="md" shadow="md">
			<Heading as="h2" size="lg" textAlign="center">
				{children}
			</Heading>
		</Box>
		// </Flex>
	);
});
