import { InputHTMLAttributes } from 'react';
import { useNameState } from '../../../../../stores/inputState';

import { Input } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement>;

function InputName({ ...rest }: Props) {
	const { name, setName } = useNameState();

	return (
		<Input
			placeholder="Insira um nome"
			defaultValue={name}
			onChange={(e) => setName(e.target.value.trim())}
			{...rest}
		/>
	);
}

export { InputName };
