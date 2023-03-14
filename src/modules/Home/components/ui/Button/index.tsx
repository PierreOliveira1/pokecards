import * as Styles from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

function Button({ children, ...rest }: Props) {
	return <Styles.Button {...rest}>{children}</Styles.Button>;
}

export { Button };
