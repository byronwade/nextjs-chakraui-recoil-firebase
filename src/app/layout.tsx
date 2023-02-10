"use client";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<RecoilRoot>
					<ChakraProvider>{children}</ChakraProvider>
				</RecoilRoot>
			</body>
		</html>
	);
}
