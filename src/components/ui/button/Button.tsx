import { FC, PropsWithChildren } from 'react'

interface IButton {
	handlerClick: () => void
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, handlerClick }) => {
	return (
		<button className='btn-primary' onClick={handlerClick}>
			{children}
		</button>
	)
}

export default Button
