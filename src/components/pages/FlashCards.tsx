import { Box, Flex, Heading } from "@chakra-ui/react";
import { CircularProgressLabel, CircularProgress } from "@chakra-ui/react";
import { memo, VFC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FlashCard } from "../molecules/FlashCard";
import { useFlashCards } from "../../hooks/useFlashCards";

export const FlashCards: VFC = memo(() => {
	const location = useLocation();
	const navigate = useNavigate();
	const onClickHome = () => {
		navigate("/home");
	};
	const {
		tipsTexts,
		onClickFlashCard,
		onClickDelete,
		flashCardTexts,
		addNumber,
		setTimes
	} = useFlashCards();
	useEffect(() => addNumber(), []);

	return (
		<>
			<Flex
				align="center"
				justify="center"
				mt={10}
				gap={{ base: "300px", md: "600px" }}
			>
				<Box color="white" bg="teal.400" p={4} borderRadius="md" shadow="sm">
					<Heading
						fontSize="3xl"
						onClick={() => {
							onClickHome();
						}}
					>
						{location.state.bookName}
					</Heading>
				</Box>
				<CircularProgress value={setTimes} color="green.400" size="100px">
					<CircularProgressLabel>{setTimes}%</CircularProgressLabel>
				</CircularProgress>
			</Flex>
			<FlashCard
				flashCardTexts={flashCardTexts}
				onClickFlashCard={onClickFlashCard}
				onClickDelete={onClickDelete}
				tipsTexts={tipsTexts}
			/>
		</>
	);
});
