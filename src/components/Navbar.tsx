'use client';

import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";

export default function Navbar()
{
	/**
	 * Define available pages
	 */
	const pages = [ 'Token Bridge', 'Whitepaper', 'Github' ];

	/**
	 * Handle navigation when a page is clicked
	 *
	 * @param page - The page to navigate to
	 */
	const handleNavigation = ( page: string ) =>
	{
		switch( page )
		{
			case 'Token Bridge':
				window.location.href = '/';
				break;
			case 'Whitepaper':
				window.location.href = '/';
				break;
			case 'Github':
				window.location.href = '/';
		}
	};

	return(
		<AppBar>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography 
						variant="h6"
						component="a"
						href="/"
						flexGrow={ 1 }
					>
						EECE571G
					</Typography>
					<Box> 
						{ pages.map( ( page ) => 
						(
							<Button
								key={ page }
								onClick={ () => handleNavigation( page ) }
								sx={{ ml: 2, color: 'white' }}
							>
								{ page }
							</Button>
						) ) }
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
