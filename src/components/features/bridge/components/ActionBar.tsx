'use client';

import { useContext, useEffect, useState } from "react";
import { useDisconnect } from "wagmi";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material";
import { SelectedTokenContext } from "@/contexts/SelectedTokenProvider";

interface ActionBarProps
{
}

export default function ActionBar( props: ActionBarProps )
{
	const [ openDialog, setOpenDialog ] = useState( false );
	const { disconnect } = useDisconnect();
	const [ selectedToken, setSelectedToken ] = useContext( SelectedTokenContext );

	// TODO: Implement transfer NFT
	const handleTransfer = () =>
	{
		setOpenDialog( true );
		console.log( "Transfer NFT" );
	};

	const handleDialogClose = () =>
	{
		setOpenDialog( false );
		setSelectedToken( null );
	}

	return(
		<Stack 
			direction="row"
			justifyContent="flex-end"
			spacing={ 2 }
		>
			<Button
				variant="contained"
				color="error"
				onClick={ () => disconnect() }
			>
				Reset
			</Button>
			<Button
				variant="contained"
				color="primary"
				disabled={ !selectedToken }
				onClick={ () => handleTransfer() }
			>
				Transfer NFT
			</Button>
			<Dialog
				open={ openDialog }
				onClose={ () => handleDialogClose() }
			>
				<DialogTitle>
					Successfully Initiated Transfer
				</DialogTitle>
				<DialogContent>
					You may return to the bridge for another transfer
				</DialogContent>
				<DialogActions>
					<Button onClick={ () => handleDialogClose() }>
						Return To Bridge
					</Button>
				</DialogActions>
			</Dialog>
		</Stack>
	);
}
