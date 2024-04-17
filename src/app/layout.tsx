import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookieToInitialState } from "wagmi";
import { wagmiConfig } from "@/configs/wagmiConfig";
import MuiThemeProvider from "@/contexts/MuiThemeProvider";
import Web3ModalProvider from "@/contexts/Web3ModalProvider";
import Navbar from "@/components/core/Navbar";

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
				<MuiThemeProvider>
					<Web3ModalProvider initialState={ initialState }>
						<Navbar />
						{ children }
					</Web3ModalProvider>
				</MuiThemeProvider>
			</body>
		</html>
	);
}
