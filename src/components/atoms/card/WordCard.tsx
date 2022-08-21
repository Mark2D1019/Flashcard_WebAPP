import { ReactNode, memo, VFC, useState } from "react";

import { Flex, Heading, Box, ButtonGroup } from "@chakra-ui/react";

import { SimpleButton } from "../button/SimpleButton";

type Props = {
	id: number;
	selectedId: number | null;
	ansflag: boolean;
	children: ReactNode;
	onClick: (id: number) => void;
};

export const WordCard: VFC<Props> = memo((props) => {
	const { ansflag, onClick, children, id, selectedId } = props;
	const clearWord = (targetid: number) => {};
	return (
		<>
			{ansflag === false && (
				<Flex gap={20} align="center" ml={180} height="5vh">
					<Box bg="white" w={600} p={10} borderRadius="md" shadow="md">
						<Heading
							as="h2"
							size="lg"
							textAlign="center"
							onClick={() => onClick(id)}
						>
							{children}
						</Heading>
					</Box>
					<SimpleButton>TIPS</SimpleButton>
				</Flex>
			)}
			{ansflag && id === selectedId && (
				<Flex gap={8} align="center" ml={180} height="5vh">
					<Box bg="white" w={600} p={10} borderRadius="md" shadow="md">
						<Heading as="h2" size="lg" textAlign="center">
							{children}
						</Heading>
					</Box>
					<ButtonGroup gap={8}>
						<SimpleButton onClick={clearWord(targetid)}>OK</SimpleButton>
						<SimpleButton>NG</SimpleButton>
					</ButtonGroup>
				</Flex>
			)}
			{ansflag && id !== selectedId && (
				<Flex gap={8} align="center" ml={180} height="5vh">
					<Box bg="white" w={600} p={10} borderRadius="md" shadow="md">
						<Heading
							as="h2"
							size="lg"
							textAlign="center"
							onClick={() => onClick(id)}
						>
							{children}
						</Heading>
					</Box>
					<SimpleButton>TIPS</SimpleButton>
				</Flex>
			)}
		</>
	);
});
