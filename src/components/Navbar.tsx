'use client';

import Link from 'next/link';
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";

export default function Navbar()
{
	/**
	 * Define available pages
	 */
	const pages =
	[ 
		{
			name: 'Token Bridge', 
			route: '/'
		},
		{
			name: 'Whitepaper', 
			route: '/'
		},
		{
			name: 'Github',
			route: 'https://github.com/eece571g-group6'
		}
	];

	return(
		<AppBar>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography 
						variant="h6"
						component={ Link }
						href="/"
						flexGrow={ 1 }
					>
						EECE571G
					</Typography>
					<Box> 
						{ pages.map( ( page ) => 
						(
							<Button
								key={ page.name }
								component={ Link }
								href={ page.route ?? '/' }
								sx={{ ml: 2, color: 'white' }}
							>
								{ page.name }
							</Button>
						) ) }
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
