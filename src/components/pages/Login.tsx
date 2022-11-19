import { ChangeEvent, memo, VFC, useState, useCallback } from "react";
import {
	Box,
	Input,
	Flex,
	Heading,
	Button,
	Stack,
	Divider
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login: VFC = memo(() => {
	const [userId, setUserId] = useState<string>("");
	const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
		setUserId(e.target.value);
	};
	const [password, setPassword] = useState<string>("");
	const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	// const login = useCallback((userId: string, password: string) => {
	// 	axios.get<any>(
	// 		`https://jsonplaceholder.typicode.com/users/${userId}/${password}`
	// 	);
	// });

	const login = (userId: string, password: string) => {
		const tmpUserId: string = "";
		const tmpPassword: string = "";

		if (userId === tmpUserId && password === tmpPassword) {
		}
	};

	//login main featurs
	const navigate = useNavigate();
	const onClickLogin = (userId: string, password: string) => {
		//login(userId, password);
		navigate(`/home`, { state: { userId: userId, password: password } });
	};

	return (
		<Flex align="center" justify="center" height="80vh">
			<Box bg="white" w="sm" p={10} borderRadius="md" shadow="md">
				<Heading textAlign="center">FlashCardアプリ</Heading>
				<Divider my={4} />
				<Stack spacing={6} py={4}>
					<Input
						size="lg"
						placeholder="ユーザID"
						value={userId}
						onChange={onChangeUserId}
					/>
					<Input
						size="lg"
						placeholder="パスワード"
						value={password}
						onChange={onChangePassword}
					/>
					<Button
						size="lg"
						bg="blue.500"
						color="white"
						_hover={{ opacity: 0.8 }}
						onClick={() => onClickLogin(userId, password)}
					>
						ログイン
					</Button>
				</Stack>
			</Box>
		</Flex>
	);
});
