import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookieToInitialState } from "wagmi";
import { wagmiConfig } from "@/configs/wagmiConfig";
import Web3ModalProvider from "@/contexts/Web3ModalProvider";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata =
{
	title: "EECE57G Bridge",
	description: "A NFT bridge",
};

export default function RootLayout( 
	{ 
		children,
	}: 
	Readonly<
	{ 
		children: React.ReactNode;
	} >
) 
{
	const initialState = cookieToInitialState( wagmiConfig, headers().get( "cookie" ) );

	return(
		<html lang="en">
			<body className={ inter.className }>
				<Web3ModalProvider initialState={ initialState }>
					{ children }
				</Web3ModalProvider>
			</body>
		</html>
	);
}
