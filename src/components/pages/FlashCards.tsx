import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CircularProgressLabel, CircularProgress } from "@chakra-ui/react";
import { memo, VFC, useEffect } from "react";

import theme from "../../theme/theme";

import { FlashCard } from "../molecules/FlashCard";
import { useFlashCards } from "../../hooks/useFlashCards";
import { useDatas } from "../../hooks/useDatas";

export const FlashCards: VFC = memo(() => {
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
			<Flex align="center" justify="center" mt={10} gap={400}>
				<Box bg="green.200" w="18%" p={4} borderRadius="md" shadow="sm">
					<Heading fontSize="2xl">ノート名</Heading>
					<Text fontSize="2xl">{datas.notename}</Text>
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
