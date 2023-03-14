import { lazy, Suspense } from 'react';
import { Loading } from '../../components/Loading';

const CardsComponent = lazy(() => import('../../modules/Cards'));

function Cards() {
	return (
		<Suspense fallback={<Loading />}>
			<CardsComponent />
		</Suspense>
	);
}

export { Cards };
