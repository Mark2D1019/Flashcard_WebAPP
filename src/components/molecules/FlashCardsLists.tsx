import { memo, VFC } from "react";
import { VStack, Box, Flex, Heading, Button } from "@chakra-ui/react";

type Props = {
	flashCardTexts: string[];
	tipsTexts: string[];
	onClickFlashCard: (index: number) => void;
	onClickDelete: (index: number) => void;
	onClickFlashCardLists: (index: number) => void;
};

export const flashCardsLists: VFC<Props> = memo((props) => {
	const {
		flashCardTexts,
		onClickFlashCardLists,
		onClickDelete,
		tipsTexts
	} = props;

	return <>{flashCardTexts.map((flashCardText, index) => {})};</>;
});
