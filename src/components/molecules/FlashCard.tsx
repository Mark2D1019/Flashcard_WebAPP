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
					<VStack align="center" key={index}>
						<Flex gap={5} align="center" mt={5}>
							<Box
								bg="white"
								w={{ base: "300px", md: "500px" }}
								p={10}
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
								w={20}
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
								w={20}
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
										w={20}
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
										<PopoverHeader fontSize="xl">
											{tipsTexts[index]}
										</PopoverHeader>
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
