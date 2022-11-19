import { useState } from "react";

import sample from "../sample.json";
import sample2 from "../sample2.json";
import sample3 from "../sample3.json";

import { Worddata } from "../types/worddata";

export const useBookNameListsDatas = () => {
	const [datas1, setdatas] = useState<Worddata>(sample);
	const [datas2, setdatas2] = useState<Worddata>(sample2);
	const [datas3, setdatas3] = useState<Worddata>(sample3);
	const bookNameLists: string[] = [
		datas1.notename,
		datas2.notename,
		datas3.notename
	];

	return { bookNameLists };
};
