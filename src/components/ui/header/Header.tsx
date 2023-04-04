import { FC } from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'

import Button from '@/components/ui/button/Button'
import Logo from '@/components/ui/logo/Logo'

import styles from './Header.module.scss'
import Burger from './burger/Burger'

const Header: FC = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<div className={styles.header}>
			<Logo />
			<div>
				{pathname === '/' ? (
					<>
						<Button handlerClick={() => navigate('/auth')}>
							ВОЙТИ | РЕГИСТРАЦИЯ
						</Button>
						<Burger />
					</>
				) : (
					<HiOutlineArrowNarrowLeft
						onClick={() => navigate('/')}
						size={45}
						className='text-accent cursor-pointer'
					/>
				)}
			</div>
		</div>
	)
}

export default Header
