import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

interface NFT
{
	thumbnail: string;
	collection: string;
	address: `0x${ string }`;
	tokenId: string;
};

export default function useSelectedToken(): [ NFT | null, ( nft: NFT ) => void ]
{
	const [ selectedToken, setSelectedToken ] = useState<NFT | null>( null );
	const { address } = useAccount();

	// Reset selected token when account changes
	useEffect( () =>
	{
		if( !address )
		{
			setSelectedToken( null );
		}
	}, [ address ] );

	return( [ selectedToken, setSelectedToken ] );
}
