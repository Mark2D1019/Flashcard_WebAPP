import { Box, Link, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useNavigate } from "react-router-dom";

//import { MenuIconButton } from "../../atoms/button/MenuIconButton";
//import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	//Linkを作るための実装
	const navigate = useNavigate();
	const onClickHome = useCallback(() => navigate("/home"), []);
	// const onClickUserManagement = useCallback(
	// 	() => navigate("/home/usermanagement"),
	// 	[]
	// );
	// const onClickSetting = useCallback(() => navigate("/home/setting"), []);
	return (
		<>
			<Flex
				as="nav"
				bg="teal.500"
				color="gray.50"
				align="center"
				justify="space-between"
				padding={{ base: 3, md: 5 }}
			>
				<Flex
					align="center"
					as="a"
					mr={8}
					_hover={{ cursor: "pointer" }}
					onClick={onClickHome}
				>
					{/* デフォルトの:はbreakpointを表す。md以上で文字サイズを変える */}
					<Heading as="h1" fontSize={{ base: "xl", md: "2xl" }}>
						FlshCards List
					</Heading>
				</Flex>

				{/* <Flex
					align="center"
					fontSize="sm"
					flexGrow={2}
					//ディスプレイの表示設定。モバイルの場合とモバイルでない場合
					display={{ base: "none", md: "flex" }}
				>
					<Box pr={4}>
						<Link onClick={onClickUserManagement}>ユーザ一覧</Link>
					</Box>
					<Link onClick={onClickSetting}>設定</Link>
				</Flex> */}

				{/* <MenuIconButton onOpen={onOpen} /> */}
			</Flex>
			{/* <MenuDrawer
				onClickHome={onClickHome}
				onClickUserManagement={onClickUserManagement}
				onClickSetting={onClickSetting}
				isOpen={isOpen}
				onClose={onClose}
			/> */}
		</>
	);
});
