import { memo, VFC } from "react";
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
import { CheckIcon, CloseIcon, QuestionOutlineIcon } from "@chakra-ui/icons";

type Props = {
	flashCardTexts: string[];
	tipsTexts: string[];
	onClickFlashCard: (index: number) => void;
	onClickDelete: (index: number) => void;
};

export const FlashCard: VFC<Props> = memo((props) => {
	const { flashCardTexts, onClickFlashCard, onClickDelete, tipsTexts } = props;

	return (
		<>
			{flashCardTexts.map((flashCardText, index) => {
				return (
					<VStack key={index} mt={0} spacing={150} align="stretch">
						<Flex gap={5} align="center" ml={100} height="5vh" mt={100} mr={50}>
							<Box
								bg="white"
								w={600}
								p={10}
								mr={5}
								borderRadius="md"
								shadow="md"
							>
								<Heading
									as="h2"
									size="lg"
									textAlign="center"
									onClick={() => onClickFlashCard(index)}
								>
									{flashCardText}
								</Heading>
							</Box>
							<Button
								w={150}
								h={70}
								bg="blue.400"
								color="white"
								_hover={{ opacity: 0.8 }}
								onClick={() => onClickDelete(index)}
							>
								<CheckIcon w={8} h={8} />
							</Button>
							<Button
								onClick={() => onClickDelete(index)}
								w={150}
								h={70}
								bg="red.400"
								color="white"
								_hover={{ opacity: 0.8 }}
							>
								<CloseIcon w={8} h={8} />
							</Button>
							<Popover>
								<PopoverTrigger>
									<Button
										w={150}
										h={70}
										bg="teal.400"
										color="white"
										_hover={{ opacity: 0.8 }}
									>
										<QuestionOutlineIcon w={8} h={8} />
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
