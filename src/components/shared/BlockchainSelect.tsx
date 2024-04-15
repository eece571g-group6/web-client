'use client';

import { Chain } from "viem";
import { Autocomplete, TextField } from "@mui/material";

interface BlockchainSelectProps
{
	label: string;
	options: Readonly<[ Chain, ...Chain[] ]> | Chain[];
	value: Chain | null;
	onChange: ( chain: Chain | null ) => void;
	disabled: boolean;
}

export default function BlockchiainSelect( props: BlockchainSelectProps )
{
	return(
		<Autocomplete
			options={ props.options }
			getOptionLabel={ ( option ) => option.name }
			isOptionEqualToValue={ ( option, value ) => option.id === value.id }
			renderInput={ ( params ) => 
			(
				<TextField 
					{ ...params } 
					label={ props.label }
				/> 
			) }

			value={ props.value }
			onChange={ ( _, value ) => props.onChange( value ) }
			disabled={ props.disabled }
		/>
	);
}
