import { VStack, Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverArrow,
	PopoverCloseButton,
	Portal,
	CircularProgressLabel,
	CircularProgress
} from "@chakra-ui/react";

import { memo, VFC, useState, useEffect } from "react";

import theme from "../../theme/theme";
import sample from "../../sample.json";
import { Worddata } from "../../types/worddata";

export const FlashCard: VFC = memo(() => {
	const [datas, setdatas] = useState<Worddata>(sample);
	const newFlashCardTexts: string[] = [];
	const newTipsTexts: string[] = [];
	const newAnswerTexts: string[] = [];
	for (var item in datas.words) {
		newFlashCardTexts.push(datas.words[item]?.question);
		newAnswerTexts.push(datas.words[item]?.answer);
		newTipsTexts.push(datas.words[item]?.tips);
	}

	//パラメータのアップデート用処理
	const [topSize, setTopSize] = useState<number>(0);
	const [parameter, setParameter] = useState<number>(0);
	const buttomSize: number = newFlashCardTexts.length;
	let setTimes: number = parameter;
	const addNumber = () => {
		setTopSize(topSize + 1);
		setParameter((topSize / buttomSize) * 100);
		setTimes = (topSize / buttomSize) * 100;
	};
	useEffect(() => addNumber(), []);

	//単語帳更新用処理
	const [flashCardTexts, setFlashCardTexts] = useState(newFlashCardTexts);
	const [tipsTexts, setTipsTexts] = useState(newTipsTexts);
	const [answerTexts, setAnswerTexts] = useState(newAnswerTexts);

	const onClickFlashCard = (index: number) => {
		//再レンダリングさせるために実施。状態の現在の値と新しい値の両方が同じオブジェクトを参照しているかどうかが確認ポイント。
		const newFlashCardTexts = [...flashCardTexts];
		const newAnswerTexts = [...answerTexts];
		const newTipsTexts = [...tipsTexts];
		newFlashCardTexts.splice(index, 1, answerTexts[index]);
		setFlashCardTexts(newFlashCardTexts);
		newAnswerTexts.splice(index, 1, answerTexts[index]);
		setAnswerTexts(newAnswerTexts);
		newTipsTexts.splice(index, 1, tipsTexts[index]);
		setTipsTexts(newTipsTexts);
	};
	const onClickDelete = (index: number) => {
		const newFlashCardTexts = [...flashCardTexts];
		const newAnswerTexts = [...answerTexts];
		const newTipsTexts = [...tipsTexts];

		newFlashCardTexts.splice(index, 1);
		setFlashCardTexts(newFlashCardTexts);
		newAnswerTexts.splice(index, 1);
		setAnswerTexts(newAnswerTexts);
		newTipsTexts.splice(index, 1);
		setTipsTexts(newTipsTexts);
		addNumber();
	};

	return (
		<>
			<Flex align="center" justify="center" mt={10} gap={400}>
				<Box bg="green.200" w="18%" p={4} borderRadius="md" shadow="sm">
					<Heading fontSize="md">ノート名</Heading>
					<Text fontSize="xl">{datas.notename}</Text>
				</Box>
				<CircularProgress value={setTimes} color="green.400" size="100px">
					<CircularProgressLabel>{setTimes}%</CircularProgressLabel>
				</CircularProgress>
			</Flex>
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
										<PopoverHeader>{tipsTexts[index]}</PopoverHeader>
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