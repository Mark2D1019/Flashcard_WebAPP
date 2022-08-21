import { VStack } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { ActionArea } from "../molecules/ActionArea";
import { StatusArea } from "../molecules/StatusArea";

export const FlashCard: VFC = memo(() => {
	return (
		<VStack mt={0} spacing={150} align="stretch">
			<StatusArea />
			<ActionArea />
		</VStack>
	);
});
