'use client';

import { useDisconnect } from "wagmi";
import { Button, Stack } from "@mui/material";

interface ActionBarProps
{
}

export default function ActionBar( props: ActionBarProps )
{
	const { disconnect } = useDisconnect();

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
			>
				Transfer NFT
			</Button>
		</Stack>
	);
}
