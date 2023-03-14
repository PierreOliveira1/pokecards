import { Routes } from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles } from './styles/globalStyles';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				refetchOnReconnect: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<Routes />
		</QueryClientProvider>
	);
}

export default App;
