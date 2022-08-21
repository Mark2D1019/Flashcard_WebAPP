import { memo, VFC, useState, useCallback } from "react";

import sample from "./sample.json";

import { VStack } from "@chakra-ui/react";
// import { WordCard } from "../atoms/card/WordCard";
import { Worddata } from "../../types/worddata";

export const ActionArea: VFC = memo(() => {
	const [ansflag, setansflag] = useState<boolean>(false);
	const [datas, setdatas] = useState<Worddata>(sample);
	const [selectedId, setSelectedId] = useState<number | null>();
	const onClickChange = useCallback(
		(id: number | null) => {
			setansflag(true);
			setSelectedId(id);
		},
		[selectedId]
	);
	return (
		<>
			{datas.words.map((word) => (
				<VStack key={word?.id} align="stretch">
					{/* <WordCard onClick={onClickChange} ansflag={ansflag}> */}
					<WordCard
						id={word?.id}
						onClick={onClickChange}
						ansflag={ansflag}
						selectedId={selectedId}
					>
						{word?.question}
					</WordCard>
				</VStack>
			))}
		</>
	);
});
