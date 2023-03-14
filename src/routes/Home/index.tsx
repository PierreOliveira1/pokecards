import { lazy, Suspense } from 'react';
import { Loading } from '../../components/Loading';

const HomeComponent = lazy(() => import('../../modules/Home'));

function Home() {
	return (
		<Suspense fallback={<Loading />}>
			<HomeComponent />
		</Suspense>
	);
}

export { Home };
