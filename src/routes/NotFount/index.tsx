import { lazy, Suspense } from 'react';
import { Loading } from '../../components/Loading';

const NotfoundComponent = lazy(() => import('../../modules/NotFound'));

function Notfound() {
	return (
		<Suspense fallback={<Loading />}>
			<NotfoundComponent />
		</Suspense>
	);
}

export { Notfound };
