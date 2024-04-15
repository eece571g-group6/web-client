'use client';

import { useEffect, useState } from "react";
import { useAccount, useChainId, useChains } from "wagmi";
import { Chain } from "viem";
import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import BlockchiainSelect from "../../../shared/BlockchainSelect";

export default function DestinationSection()
{
	const chainId = useChainId();
	const chains = useChains();
	const { address, isDisconnected } = useAccount()

	const [ selectedChain, setSelectedChain ] = useState<Chain | null>( null );
	useEffect( () =>
	{
		// Deselect the chain if it is the source chain
		setSelectedChain( ( prev ) => prev?.id === chainId ? null : prev );
	}, [ chainId ] )
	
	return(
		<Card>
			<CardContent>
				<Typography variant="h5" sx={{ fontWeight: 800 }}>
					Destination
				</Typography>
				<Typography variant="body1" gutterBottom>
					Select a recipient chain and address
				</Typography>
			</CardContent>
			<CardContent>
				<Grid container spacing={ 2 }>
					{/* Select destination chain */}
					<Grid item xs={ 12 }>
						<BlockchiainSelect
							label="Destination Blockchain"
							options={ chains.filter( ( chain ) => chain.id !== chainId ) }
							value={ selectedChain }
							onChange={ setSelectedChain }
							disabled={ isDisconnected }
						/>
					</Grid>
					{/* Enter recipient address */}
					<Grid item xs={ 12 }>
						<TextField
							variant="outlined"
							label="Recipient Address"
							value={ address ?? '' }
							fullWidth
							disabled
						/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
