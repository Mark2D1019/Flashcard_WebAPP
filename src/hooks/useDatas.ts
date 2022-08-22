import { useState } from "react";

import sample from "../sample.json";
import { Worddata } from "../types/worddata";

export const useDatas = () => {
	const [datas, setdatas] = useState<Worddata>(sample);
	const newFlashCardTexts: string[] = [];
	const newTipsTexts: string[] = [];
	const newAnswerTexts: string[] = [];
	for (var item in datas.words) {
		newFlashCardTexts.push(datas.words[item]?.question);
		newAnswerTexts.push(datas.words[item]?.answer);
		newTipsTexts.push(datas.words[item]?.tips);
	}
	return { newFlashCardTexts, newAnswerTexts, newTipsTexts, datas };
};
