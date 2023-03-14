import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import * as Styles from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: boolean;
}

function ButtonComponent(props: Props, ref: Ref<HTMLButtonElement>) {
	const { children, variant, ...rest } = props;

	return (
		<Styles.Button ref={ref} variant={variant} {...rest}>
			{children}
		</Styles.Button>
	);
}

const Button = forwardRef(ButtonComponent);

export { Button };
