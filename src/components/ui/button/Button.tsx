import { FC, PropsWithChildren } from 'react'

interface IButton {
	handlerClick: () => void
	type?: 'button' | 'submit'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	handlerClick,
	type = 'button'
}) => {
	return (
		<button type={type} className='btn-primary' onClick={handlerClick}>
			{children}
		</button>
	)
}

export default Button
