'use client';

import { ReactNode } from "react";
import { State, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { projectId, wagmiConfig } from "@/configs/wagmiConfig";

// Setup queryClient
const queryClient = new QueryClient();

// Check if project ID is found
if( !projectId ) throw new Error( "Project ID not found" );

// Create modal
createWeb3Modal(
{
	wagmiConfig: wagmiConfig,
	projectId,
} );

export default function Web3ModalProvider
(
	{ 
		children,
		initialState
	}:
	{
		children: ReactNode;
		initialState?: State;
	}
)
{
	return(
		<WagmiProvider config={ wagmiConfig } initialState={ initialState }>
			<QueryClientProvider client={ queryClient }>
				{ children }
			</QueryClientProvider>
		</WagmiProvider>
	);
}
