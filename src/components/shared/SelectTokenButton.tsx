import { useState } from "react";
import { useBalance } from "wagmi";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import NFTCard from "./NFTCard";

interface NFTDisplay
{
	thumbnail: string;
	name: string;
	collection: string;
	address: `0x${ string }`;
	tokenId: string;
};

interface SelectTokenButtonProps
{
	account: `0x${ string }` | null;
};

export default function SelectTokenButton( props: SelectTokenButtonProps )
{
	const [ openDialog, setOpenDialog ] = useState( false );
	const [ selectedToken, setSelectedToken ] = useState<NFTDisplay | null>( null );

	if( !props.account )
		return( <></> );

	// TODO: Need to get a list of NFT in the account, this does not work
	//const balance = useBalance( { address: props.account } );
	const mockNFTs: NFTDisplay[] =
	[
		{
			thumbnail: 'https://source.unsplash.com/random',
			name: 'NFT Name',
			collection: 'NFT Collection Name',
			address: '0x1234...4321',
			tokenId: '1'
		},
		{
			thumbnail: 'https://source.unsplash.com/random',
			name: 'NFT Name',
			collection: 'NFT Collection Name',
			address: '0x1234...4321',
			tokenId: '2'
		},
		{
			thumbnail: 'https://source.unsplash.com/random',
			name: 'NFT Name',
			collection: 'NFT Collection Name',
			address: '0x1234...4321',
			tokenId: '3'
		}
	];

	const handleSelectToken = ( nft: NFTDisplay ) =>
	{
		setOpenDialog( false );
		setSelectedToken( nft );
	};

	return(
		<>
			{ selectedToken ?
				<NFTCard
					name={ selectedToken.name }
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
								name={ nft.name }
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
