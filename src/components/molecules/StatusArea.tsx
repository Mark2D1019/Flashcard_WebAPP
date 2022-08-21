import { memo, VFC } from "react";

import {
	Flex,
	Heading,
	Box,
	Text,
	CircularProgress,
	CircularProgressLabel
} from "@chakra-ui/react";

export const StatusArea: VFC = memo(() => {
	return (
		<Flex align="center" justify="center" mt={10} gap={400}>
			<Box bg="green.200" w="18%" p={4} borderRadius="md" shadow="sm">
				<Heading fontSize="md">ノート名</Heading>
				<Text fontSize="xl">xxx</Text>
			</Box>
			<CircularProgress value={40} color="green.400" size="100px">
				<CircularProgressLabel>40%</CircularProgressLabel>
			</CircularProgress>
		</Flex>
	);
});
