import { createTheme } from "@mui/material";

export const darkTheme = createTheme(
{
	palette:
	{
		mode: 'dark',
		primary:
		{
			main: '#90caf9',
		},
		secondary:
		{
			main: '#f48fb1',
		},
		error:
		{
			main: '#f44336',
		},
		background:
		{
			default: '#121212',
			paper: '#333',
		}
	},
	typography:
	{
		fontFamily: 'Roboto, sans-serif',
	},
} );

