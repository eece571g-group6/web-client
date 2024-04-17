import useSWR from 'swr';

/**
 * A fetch wrapper used by swr library
 */
const jsonFetcher = async ( input: RequestInfo, init: RequestInit ) =>
{
	return fetch( input, init ).then( res => res.json() );
}

/**
 * Fetches a JSON object using swr library.
 * @param url - The requesting API's URL.
 */
export default function useJsonFetch<T>( url: string )
{
	return useSWR<T>( url, jsonFetcher, {} );
}
