import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button } from "@mui/material";

export default function ConnectWalletButton()
{
	const { open } = useWeb3Modal();
	const { address, isConnecting, isDisconnected } = useAccount()

	const getShortAddress = ( addr: typeof address ) =>
	(
		addr ? `${ addr.slice( 0, 6 ) }...${ addr.slice( addr.length - 4, addr.length ) }` : ''
	)

	return(
		<Button
			variant="contained"
			onClick={ () => open() }
			fullWidth
			sx={{ height: '100%' }}
		>
			{ isDisconnected ? 'Connect Wallet' : ( isConnecting ? 'Connecting...' : getShortAddress( address ) ) }
		</Button>
	);
}
