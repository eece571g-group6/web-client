'use client';

import { useAccount } from "wagmi";
import { Button, Stack, Typography } from "@mui/material";
import ConnectWalletButton from "@/components/shared/ConnectWalletButton";
import MintButton from "./components/MintButton";

export default function MintContainer()
{
	const { isDisconnected } = useAccount();

	return(
		<Stack
			spacing={ 5 }
			position="fixed"
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			minHeight="100vh"
		>
			<Typography variant="h3">
				Mint a Test Token
			</Typography>
			{ isDisconnected && <ConnectWalletButton /> }
			{ !isDisconnected && <MintButton /> }
		</Stack>
	);
}
