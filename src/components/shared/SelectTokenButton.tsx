import { useContext, useEffect, useState } from "react";
import { useChainId, useReadContract } from "wagmi";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import { SelectedTokenContext } from "@/contexts/SelectedTokenProvider";
import NFTCard from "./NFTCard";
import NFT from "@/abi/NFT.json";
import { OP_TOKEN_ADDRESS } from "@/constants/contracts";

interface SelectTokenButtonProps
{
	walletAddress: `0x${ string }`;
};

export default function SelectTokenButton( props: SelectTokenButtonProps )
{
	const [ selectedToken, setSelectedToken ] = useContext( SelectedTokenContext )
	const [ openDialog, setOpenDialog ] = useState( false );
	const chainId = useChainId();

	//const abi = NFT.abi;

	//const result = useReadContract(
	//{
		//abi,
		//address: OP_TOKEN_ADDRESS,
		//functionName: 'balanceOf',
		//args: [ props.walletAddress ]
	//} );

	// Construct query url
	//let url = '/api/get-wallet-nfts';
	//const searchParams = new URLSearchParams();
	//searchParams.append( 'chain', chainId.toString() );
	//searchParams.append( 'address', props.walletAddress )
	//url = url + '?' + searchParams.toString();

	//const { data } = useJsonFetch( url );

	// TODO: Need to get a list of NFT in the account
	const mockNFTs =
	[
		{
			thumbnail: 'https://source.unsplash.com/random',
			collection: 'Random',
			address: '0xe213...1a9c',
			tokenId: '1'
		},
	];

	//useEffect( () =>
	//{
		//if( result.data )
		//{
			
		//}
	//}, [ result ] );

	const handleSelectToken = ( nft: any ) =>
	{
		//console.log( data );
		setOpenDialog( false );
		setSelectedToken( nft );
	};

	return(
		<>
			{ selectedToken ?
				<NFTCard
					thumbnail={ selectedToken.thumbnail }
					collection={ selectedToken.collection }
					address={ selectedToken.address }
					tokenId={ selectedToken.tokenId }
					onClick={ () => setOpenDialog( true ) }
				/>
				:
				<Button
					variant="contained"
					onClick={ () => setOpenDialog( true ) }
					fullWidth
				>
					Select A Token
				</Button>
			}
			<Dialog
				open={ openDialog }
				onClose={ () => setOpenDialog( false ) }
				fullWidth
			>
				<DialogTitle>
					Select A Token
				</DialogTitle>
				<DialogContent>
					<Stack spacing={ 2 }>
						{ mockNFTs.map( ( nft ) =>
						(
							<NFTCard
								key={ nft.address + nft.tokenId }
								thumbnail={ nft.thumbnail }
								collection={ nft.collection }
								address={ nft.address as `0x${ string }` }
								tokenId={ nft.tokenId }
								onClick={ () => handleSelectToken( nft ) }
							/>
						) ) }
					</Stack>
				</DialogContent>
			</Dialog>
		</>
	);
}
