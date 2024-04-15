'use client';

import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import BlockchiainSelect from "@/components/shared/BlockchainSelect";
import ConnectWalletButton from "@/components/shared/ConnectWalletButton";

export default function SourceSection()
{
	const chainId = useChainId();
	const { chains, switchChain } = useSwitchChain();
	const { isDisconnected } = useAccount();

	return(
		<Card> 
			<CardContent>
				<Typography variant="h5" sx={{ fontWeight: 800 }}>
					Source
				</Typography>
				<Typography variant="body1" gutterBottom>
					Select an NFT to send through the NFT Bridge
				</Typography>
			</CardContent>
			<CardContent>
				<Grid container spacing={ 2 }>
					{/* Select source chain */}
					<Grid item xs={ 8 }>
						<BlockchiainSelect
							options={ chains }
							label={ isDisconnected ? 'Please connect your wallet to select a source blockcahin' : 'Source Blockchain' } 
							value={ isDisconnected ? null : chains.find( ( chain ) => chain.id === chainId ) ?? null }
							onChange={ ( chain ) => chain && switchChain( { chainId: chain.id } ) }
							disabled={ isDisconnected }
						/>
					</Grid>
					{/* Connect wallet */}
					<Grid item xs={ 4 }>
						<ConnectWalletButton />
					</Grid>
					{/* Select token */}
					<Grid item xs={ 12 }>
						<Button
							variant="contained"
							fullWidth
						>
							Select A Token
						</Button>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

