'use client';

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "../lib/mui";

interface MuiThemeProviderProps
{
	children: ReactNode
};

export default function MuiThemeProvider( props: MuiThemeProviderProps )
{
	return(
		<ThemeProvider theme={ darkTheme }>
			{ props.children }
		</ThemeProvider>
	);
}
