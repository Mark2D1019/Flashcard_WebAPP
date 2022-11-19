import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CircularProgressLabel, CircularProgress } from "@chakra-ui/react";
import { memo, VFC, useEffect } from "react";
import { useLocation } from "react-router-dom";

import theme from "../../theme/theme";

import { FlashCard } from "../molecules/FlashCard";

//import { FlashCard } from "./FlashCardsLists";
import { useFlashCards } from "../../hooks/useFlashCards";
import { useDatas } from "../../hooks/useDatas";

export const FlashCards: VFC = memo((props) => {
	const location = useLocation();
	const { datas } = useDatas();
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
					<Heading fontSize="3xl">{location.state.bookName}</Heading>
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
