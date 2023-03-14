import { ButtonHTMLAttributes } from 'react';
import * as Styles from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: boolean;
}

function Button(props: Props) {
	const { children, variant, ...rest } = props;

	return (
		<Styles.Button variant={variant} {...rest}>
			{children}
		</Styles.Button>
	);
}

export { Button };
