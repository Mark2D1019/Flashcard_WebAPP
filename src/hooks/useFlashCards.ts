import { useState } from "react";

import { useDatas } from "./useDatas";

export const useFlashCards = () => {
	const { newFlashCardTexts, newAnswerTexts, newTipsTexts } = useDatas();

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

	return {
		setTimes,
		addNumber,
		onClickFlashCard,
		onClickDelete,
		flashCardTexts,
		tipsTexts
	};
};
