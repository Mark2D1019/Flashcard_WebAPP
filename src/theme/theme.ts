//画面全体のデザインを設定するファイル

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: "gray.100",
				color: "gray.800"
			}
		},
		components: {
			Heading: {
				as: "h2",
				size: "lg",
				textAlign: "center",
				bg: "white",
				w: 600,
				p: 10,
				borderRadius: "md",
				shadow: "md"
			},
			Button: {
				baseStyle: {
					fontWeight: "semibold",
					color: "white",
					bg: "teal.400"
				},
				sizes: {},
				variants: {
					_hover: { opacity: 0.8 }
				}
			}
		}
	}
});
export default theme;
