import { VStack, Box, Flex, Heading, Button } from "@chakra-ui/react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverArrow,
	PopoverCloseButton,
	Portal
} from "@chakra-ui/react";

import { memo, VFC, useState } from "react";

import theme from "../../theme/theme";
import sample from "../../sample.json";
import { Worddata } from "../../types/worddata";

export const FlashCard: VFC = memo(() => {
	const [flashCardTexts, setflashCardTexts] = useState([
		"test123",
		"test234",
		"test567"
	]);
	const answerText = ["123", "234", "567"];
	const tipsText = ["123", "234", "maji"];

	const [datas, setdatas] = useState<Worddata>(sample);
	console.log(datas.words[0]);
	datas.words.map((question, index) => {});

	const onClickFlashCard = (index: number) => {
		//再レンダリングさせるために実施。状態の現在の値と新しい値の両方が同じオブジェクトを参照しているかどうかが確認ポイント。
		const newFlashCardTexts = [...flashCardTexts];
		newFlashCardTexts.splice(index, 1, answerText[index]);
		setflashCardTexts(newFlashCardTexts);
	};
	const onClickDelete = (index: number) => {
		const newFlashCardTexts = [...flashCardTexts];
		newFlashCardTexts.splice(index, 1);
		setflashCardTexts(newFlashCardTexts);
	};

	return (
		<>
			{flashCardTexts.map((flashCardText, index) => {
				return (
					<VStack key={index} mt={0} spacing={150} align="stretch">
						<Flex
							gap={20}
							align="center"
							ml={100}
							height="5vh"
							mt={100}
							mr={50}
						>
							<Box>
								<Heading onClick={() => onClickFlashCard(index)}>
									{flashCardText}
								</Heading>
							</Box>
							<Button onClick={() => onClickDelete(index)}>OK</Button>
							<Button
								onClick={() => onClickDelete(index)}
								bg="teal.400"
								color="white"
							>
								NG
							</Button>
							<Popover>
								<PopoverTrigger>
									<Button bg="teal.400" color="white">
										TIPS
									</Button>
								</PopoverTrigger>
								<Portal>
									<PopoverContent>
										<PopoverArrow />
										<PopoverHeader>{tipsText[index]}</PopoverHeader>
										<PopoverCloseButton />
									</PopoverContent>
								</Portal>
							</Popover>
						</Flex>
					</VStack>
				);
			})}
			;
		</>
	);
});
