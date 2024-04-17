import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

interface NFTCardProps
{
	thumbnail: string;
	collection: string;
	address: `0x${ string }`;
	tokenId: string;
	onClick: () => void;
};

export default function NFTCard( props: NFTCardProps )
{
	return(
		<Card>
			<CardActionArea 
				onClick={ () => props.onClick() }
				sx={{ display: 'flex', justifyContent: 'flex-start' }}
			>
				<CardMedia
					component="img"
					height="120"
					image={ props.thumbnail }
					sx={{ width: 120 }}
				/>
				<CardContent>
					<Typography variant="h6" sx={{ fontWeight: 800 }}>
						{ props.collection + ' #' + props.tokenId }
					</Typography>
					<Typography variant="body1">
						{ props.collection }
					</Typography>
					<Typography variant="body1">
						{ props.address }
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
