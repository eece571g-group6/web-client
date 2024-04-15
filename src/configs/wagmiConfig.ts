import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { baseSepolia, optimismSepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if( !projectId ) throw new Error( "Project ID not found" );

const metadata =
{
	name: 'EECE571G Bridge',
	description: 'A NFT bridge',
	url: '',
	icons: [],
};

export const wagmiConfig = createConfig(
{
	chains: [ baseSepolia, optimismSepolia ],
	transports: 
	{
		[ baseSepolia.id ]: http(),
		[ optimismSepolia.id ]: http(),
	},
	connectors:
	[
		walletConnect( { projectId, metadata, showQrModal: false } ),
		injected(),
	],
	ssr: true,
	storage: createStorage( { storage: cookieStorage } ),
} );
