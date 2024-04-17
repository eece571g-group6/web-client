import { NextResponse } from 'next/server';
import Moralis from 'moralis';

export async function GET( request: Request )
{
	const { searchParams } = new URL( request.url );
	const chain = searchParams.get( 'chain' );
	const address = searchParams.get( 'address' );

	const mapChainToHex = ( chain: string | null ) =>
	{
		switch( chain )
		{
			case '84532':
				return '0x14a33';
			case '11155420':
				return '0xaa37dc';
		}

		return( null );
	}

	const hexChain = mapChainToHex( chain );

	if( hexChain === null )
	{
		return( NextResponse.json( 'Invalid chain', { status: 400 } ) );
	}
	else if( !address )
	{
		return( NextResponse.json( 'Address is required', { status: 400 } ) );
	}
	else
	{
		try
		{
			await Moralis.start(
			{
				apiKey: process.env.MORALIS_API_KEY
			} );

			console.log( hexChain );
			const response = await Moralis.EvmApi.nft.getWalletNFTs(
			{
				"chain": hexChain, 
				"format": "decimal",
				"mediaItems": false,
				"address": address
			} ).catch( e => console.error(e));
			console.log( response );

			return( NextResponse.json( response ) );
		}
		catch( err )
		{
			return( NextResponse.json( err, { status: 500 } ) );
		}
	}

}
