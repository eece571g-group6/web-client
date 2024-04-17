'use client';

import { useChainId, useSwitchChain, useWriteContract } from "wagmi";
import { optimismSepolia } from "wagmi/chains";
import { Button, Typography } from "@mui/material";
import { OP_MINT_ADDRESS } from "@/constants/contracts";
import NFT from "@/abi/NFT.json";
import { useEffect } from "react";

export default function MintButton()
{
	const chainId = useChainId();
	const { switchChain } = useSwitchChain();
	const { data: hash, isPending, writeContract } = useWriteContract();

	// Minting test token only available on OP Sepolia
	useEffect( () =>
	{
		if( chainId !== optimismSepolia.id )
		{
			switchChain( { chainId: optimismSepolia.id } );
		}
	}, [ chainId ] );

	/**
	 * ABI for NFT contract
	 */
	const abi = NFT.abi;

	/**
	 * Handle minting of test token
	 */
	const handleClickMint = async() =>
	{
		writeContract(
		{
			address: OP_MINT_ADDRESS,
			abi,
			functionName: 'Mint',
			args: [],
		} );

		console.log( 'mint' );
	};
		
	return(
		<>
			<Button
				variant="contained"
				color="primary"
				size="large"
				disabled={ isPending || chainId !== optimismSepolia.id }
				onClick={ () => handleClickMint() }
			>
				{ isPending ? 'Confirming...' : 'Mint' }
			</Button>
			{ hash &&
				<Typography variant="body1">
					Transaction Hash: { hash }
				</Typography>
			}
		</>
	);
}
