import { memo, VFC } from "react";
import { VStack, Box, Flex, Heading } from "@chakra-ui/react";
import { Container, SimpleGrid } from "@chakra-ui/react";

import { useBookNameListsDatas } from "../../hooks/useBookNameListsDatas";
import { useNavigate } from "react-router-dom";

export const FlashCardsLists: VFC = memo(() => {
	const { bookNameLists } = useBookNameListsDatas();
	let navigate = useNavigate();
	const onClickBookName = (name: string) => {
		navigate(`/home/Flashcard`, { state: { bookName: name } });
	};

	return (
		<>
			<Box p={2}>
				<Container maxW={"6xl"} mt={10}>
					<SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} spacing={10}>
						{bookNameLists.map((bookName) => (
							<VStack align="center">
								<Flex gap={5} align="center" mt={10}>
									<Box
										bg="white"
										w={{ base: "250px", md: "250px" }}
										p={10}
										borderRadius="md"
										shadow="md"
									>
										<Heading
											as="h2"
											size="lg"
											textAlign="center"
											onClick={() => onClickBookName(bookName)}
										>
											{bookName}
										</Heading>
									</Box>
								</Flex>
							</VStack>
						))}
					</SimpleGrid>
				</Container>
			</Box>
		</>
	);
});
