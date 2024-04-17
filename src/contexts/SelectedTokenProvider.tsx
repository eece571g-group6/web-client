import { ReactNode, createContext } from "react";
import useSelectedToken from "../hooks/useSelectedToken";


interface SelectedTokenProviderProps
{
	children: ReactNode
};

export const SelectedTokenContext = createContext( null as any );

export default function SelectedTokenProvider( props: SelectedTokenProviderProps )
{
	return(
		<SelectedTokenContext.Provider value={ useSelectedToken() }>
			{ props.children }
		</SelectedTokenContext.Provider>
	);
}
