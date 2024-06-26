'use client';

import { Container, Stack } from "@mui/material";
import SelectedTokenProvider from "@/contexts/SelectedTokenProvider";
import SourceSection from "./components/SourceSection";
import DestinationSection from "./components/DestinationSection";
import ActionBar from "./components/ActionBar";

export default function BridgeContainer()
{

	return(
		<Container maxWidth="lg" sx={{ mt: 10 }}>
			<Stack spacing={ 5 }> 
				<SelectedTokenProvider>
					<SourceSection />
					<DestinationSection />
					<ActionBar />
				</SelectedTokenProvider>
			</Stack>
		</Container>
	);
}
